# ARIVAI - AI-Powered Menstrual Wellness Companion

## Project Overview
ARIVAI is a comprehensive AI-powered menstrual wellness application that helps users track their menstrual cycles, log symptoms, receive personalized health advice, and access phase-specific nutrition and mindfulness resources.

## Tech Stack
- **Frontend**: React.js with TypeScript, TailwindCSS, Shadcn UI components
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: Replit Auth (OpenID Connect)
- **AI**: Google Gemini API for intelligent chat assistant

## Color Palette
- **Espresso Black** (#281B1C): Main background
- **Dark Roast** (#4A3C3B): Cards and containers
- **Rich Merlot** (#8B4B5B): Primary accent, CTAs
- **Soft Latte** (#EFE8E5): Text and icons
- **Cabernet Stone** (#6D4D4F): Charts, secondary data
- **Warm Truffle** (#7A6A63): Muted elements

## Project Structure
```
├── client/
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── ui/            # Shadcn UI components
│   │   │   ├── Navigation.tsx # Main navigation
│   │   │   ├── CycleCalendar.tsx
│   │   │   ├── PhaseCard.tsx
│   │   │   └── SymptomLogger.tsx
│   │   ├── pages/             # Page components
│   │   │   ├── Landing.tsx    # Public landing page
│   │   │   ├── Dashboard.tsx  # Main dashboard with calendar
│   │   │   ├── Recipes.tsx    # Healthy snacks & recipes
│   │   │   ├── Meditation.tsx # Meditation videos
│   │   │   ├── Education.tsx  # Educational content
│   │   │   ├── Chat.tsx       # AI chat assistant
│   │   │   └── Profile.tsx    # User settings
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utility functions
│   │   └── App.tsx            # Main app with routing
│   └── index.html
├── server/
│   ├── db.ts                  # Database connection
│   ├── gemini.ts              # Gemini AI integration
│   ├── replitAuth.ts          # Authentication setup
│   ├── routes.ts              # API endpoints
│   ├── storage.ts             # Database operations
│   └── index.ts               # Express server setup
├── shared/
│   └── schema.ts              # Database schema & types
└── design_guidelines.md       # UI/UX design specifications
```

## Database Schema
- **users**: User profiles with cycle preferences
- **sessions**: Auth session storage
- **cycles**: Menstrual cycle tracking
- **symptoms**: Daily symptom logs
- **chat_history**: AI conversation history
- **recipes**: Healthy recipe database
- **meditation_videos**: Curated meditation videos
- **educational_content**: Health education articles
- **favorites**: User bookmarks

## Key Features
1. **Cycle Tracking**: Log period start dates, track cycle phases
2. **Phase Visualization**: Color-coded calendar showing menstrual, follicular, ovulation, luteal phases
3. **Symptom Logging**: Track physical and emotional symptoms with severity
4. **AI Chat**: Personalized wellness advice based on current phase
5. **Recipes**: Phase-specific nutrition recommendations
6. **Meditation**: Curated mindfulness and relaxation videos
7. **Education**: Articles on PMS, pregnancy, menopause, sexual wellness

## Cycle Phase Logic
- **Menstrual**: Days 1-5 (bleeding)
- **Follicular**: Days 6-12 (energy rising)
- **Ovulation**: Days 13-15 (peak fertility)
- **Luteal**: Days 16-28 (PMS window)

## API Endpoints
- `GET/POST /api/cycles` - Cycle management
- `GET/POST /api/symptoms` - Symptom logging
- `GET/POST /api/chat` - AI chat
- `GET /api/recipes` - Recipe list
- `GET /api/meditation-videos` - Video list
- `GET /api/educational-content` - Articles
- `GET/POST/DELETE /api/favorites` - User favorites
- `GET /api/auth/user` - Current user
- `PATCH /api/user/profile` - Update profile

## Environment Variables Required
- `DATABASE_URL` - PostgreSQL connection string
- `SESSION_SECRET` - Session encryption key
- `GEMINI_API_KEY` - Google Gemini API key (for AI chat)
