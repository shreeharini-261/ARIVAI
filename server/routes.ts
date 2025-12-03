import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { generateChatResponse } from "./gemini";
import { insertCycleSchema, insertSymptomSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Setup authentication
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // Update user profile
  app.patch('/api/user/profile', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { firstName, lastName, dateOfBirth, averageCycleLength, averagePeriodLength } = req.body;
      
      const user = await storage.updateUser(userId, {
        firstName,
        lastName,
        dateOfBirth,
        averageCycleLength,
        averagePeriodLength,
      });
      
      res.json(user);
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Failed to update profile" });
    }
  });

  // Cycle routes
  app.get('/api/cycles', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const cycles = await storage.getCycles(userId);
      res.json(cycles);
    } catch (error) {
      console.error("Error fetching cycles:", error);
      res.status(500).json({ message: "Failed to fetch cycles" });
    }
  });

  app.post('/api/cycles', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { startDate } = req.body;
      
      if (!startDate) {
        return res.status(400).json({ message: "Start date is required" });
      }
      
      const cycle = await storage.createCycle({
        userId,
        startDate,
      });
      
      res.status(201).json(cycle);
    } catch (error) {
      console.error("Error creating cycle:", error);
      res.status(500).json({ message: "Failed to create cycle" });
    }
  });

  // Symptom routes
  app.get('/api/symptoms', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const symptoms = await storage.getSymptoms(userId);
      res.json(symptoms);
    } catch (error) {
      console.error("Error fetching symptoms:", error);
      res.status(500).json({ message: "Failed to fetch symptoms" });
    }
  });

  app.post('/api/symptoms', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { symptoms: symptomList } = req.body;
      
      if (!symptomList || !Array.isArray(symptomList)) {
        return res.status(400).json({ message: "Symptoms array is required" });
      }
      
      const today = new Date().toISOString().split('T')[0];
      
      const symptomsToCreate = symptomList.map((s: any) => ({
        userId,
        date: today,
        symptomType: s.symptomType,
        severity: s.severity || 3,
        notes: s.notes || null,
      }));
      
      const createdSymptoms = await storage.createSymptoms(symptomsToCreate);
      res.status(201).json(createdSymptoms);
    } catch (error) {
      console.error("Error creating symptoms:", error);
      res.status(500).json({ message: "Failed to log symptoms" });
    }
  });

  // Chat routes
  app.get('/api/chat', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const history = await storage.getChatHistory(userId);
      res.json(history);
    } catch (error) {
      console.error("Error fetching chat history:", error);
      res.status(500).json({ message: "Failed to fetch chat history" });
    }
  });

  app.post('/api/chat', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { content, cyclePhase } = req.body;
      
      if (!content) {
        return res.status(400).json({ message: "Message content is required" });
      }
      
      // Save user message
      await storage.createChatMessage({
        userId,
        role: 'user',
        content,
        cyclePhase,
      });
      
      // Get recent chat history for context
      const history = await storage.getChatHistory(userId, 10);
      const formattedHistory = history.map(msg => ({
        role: msg.role,
        content: msg.content,
      }));
      
      // Get recent symptoms for context
      const recentSymptoms = await storage.getSymptoms(userId);
      const symptomNames = recentSymptoms.slice(0, 5).map(s => s.symptomType);
      
      // Generate AI response
      const aiResponse = await generateChatResponse(
        content,
        {
          cyclePhase,
          symptoms: symptomNames,
        },
        formattedHistory
      );
      
      // Save AI response
      const assistantMessage = await storage.createChatMessage({
        userId,
        role: 'assistant',
        content: aiResponse,
        cyclePhase,
      });
      
      res.status(201).json(assistantMessage);
    } catch (error) {
      console.error("Error in chat:", error);
      res.status(500).json({ message: "Failed to process message" });
    }
  });

  // Recipe routes
  app.get('/api/recipes', async (req, res) => {
    try {
      const { phase } = req.query;
      let recipesList;
      
      if (phase && typeof phase === 'string' && phase !== 'all') {
        recipesList = await storage.getRecipesByPhase(phase);
      } else {
        recipesList = await storage.getRecipes();
      }
      
      res.json(recipesList);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      res.status(500).json({ message: "Failed to fetch recipes" });
    }
  });

  // Meditation video routes
  app.get('/api/meditation-videos', async (req, res) => {
    try {
      const { category } = req.query;
      let videos;
      
      if (category && typeof category === 'string' && category !== 'all') {
        videos = await storage.getMeditationVideosByCategory(category);
      } else {
        videos = await storage.getMeditationVideos();
      }
      
      res.json(videos);
    } catch (error) {
      console.error("Error fetching meditation videos:", error);
      res.status(500).json({ message: "Failed to fetch meditation videos" });
    }
  });

  // Educational content routes
  app.get('/api/educational-content', async (req, res) => {
    try {
      const { category } = req.query;
      let content;
      
      if (category && typeof category === 'string') {
        content = await storage.getEducationalContentByCategory(category);
      } else {
        content = await storage.getEducationalContent();
      }
      
      res.json(content);
    } catch (error) {
      console.error("Error fetching educational content:", error);
      res.status(500).json({ message: "Failed to fetch educational content" });
    }
  });

  // Favorites routes
  app.get('/api/favorites', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const userFavorites = await storage.getFavorites(userId);
      res.json(userFavorites);
    } catch (error) {
      console.error("Error fetching favorites:", error);
      res.status(500).json({ message: "Failed to fetch favorites" });
    }
  });

  app.post('/api/favorites', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { itemType, itemId } = req.body;
      
      if (!itemType || !itemId) {
        return res.status(400).json({ message: "Item type and ID are required" });
      }
      
      const favorite = await storage.addFavorite({
        userId,
        itemType,
        itemId,
      });
      
      res.status(201).json(favorite);
    } catch (error) {
      console.error("Error adding favorite:", error);
      res.status(500).json({ message: "Failed to add favorite" });
    }
  });

  app.delete('/api/favorites', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { itemType, itemId } = req.body;
      
      if (!itemType || !itemId) {
        return res.status(400).json({ message: "Item type and ID are required" });
      }
      
      await storage.removeFavorite(userId, itemType, itemId);
      res.status(204).send();
    } catch (error) {
      console.error("Error removing favorite:", error);
      res.status(500).json({ message: "Failed to remove favorite" });
    }
  });

  return httpServer;
}
