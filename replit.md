# ARIVAI - AI-Powered Menstrual Wellness Companion

## Overview

ARIVAI is a comprehensive menstrual wellness application that combines cycle tracking, symptom logging, personalized AI assistance, and educational resources. The platform helps users understand and manage their menstrual health through phase-specific insights, nutrition recommendations, meditation resources, and an AI chat companion powered by Google's Gemini API.

The application targets individuals seeking to better understand their menstrual cycles, manage symptoms, and receive personalized wellness advice based on their current cycle phase.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type safety and modern component patterns
- Vite as the build tool for fast development and optimized production builds
- Wouter for lightweight client-side routing instead of React Router
- TanStack Query (React Query) for server state management, caching, and data synchronization

**UI Component Strategy**
- Shadcn UI component library built on Radix UI primitives for accessible, unstyled components
- TailwindCSS for utility-first styling with custom design tokens
- Design system based on wellness app aesthetics (Flo, Clue, Calm, Whoop, Oura)
- Custom color palette: Espresso Black (#281B1C), Dark Roast (#4A3C3B), Rich Merlot (#8B4B5B), Soft Latte (#EFE8E5)
- Typography: Inter for body text, Playfair Display for elegant headings

**State Management Pattern**
- Server state managed through TanStack Query with centralized API request handling
- Local UI state managed through React hooks (useState, useEffect)
- Authentication state synchronized between localStorage (tokens) and React Query cache
- Custom hooks for cross-cutting concerns (useAuth, useToast, useIsMobile)

### Backend Architecture

**Dual-Backend Hybrid System**
- **Node.js/Express (Primary)**: Handles authentication, routing, static file serving, and acts as reverse proxy
- **Flask/Python (Secondary)**: Legacy backend preserved for specific endpoints, spawned as child process by Express server
- Express server starts Flask on port 5001 and proxies requests to maintain backward compatibility
- Migration strategy allows gradual transition from Flask to Node.js

**API Design**
- RESTful API endpoints with `/api` prefix
- JWT-based authentication with access tokens (24-hour expiry) and refresh tokens (30-day expiry)
- Token storage in localStorage with automatic refresh mechanism
- Rate limiting and CORS configuration for security
- Session management using express-session with PostgreSQL store

**Authentication System**
- Replit Auth integration using OpenID Connect (OIDC) passport strategy
- Custom email/password authentication fallback (Flask legacy)
- Session persistence in PostgreSQL sessions table
- Token-based API authentication for client requests
- Automatic token refresh before expiration

### Data Layer

**Database Architecture**
- PostgreSQL as primary database (Neon serverless)
- Drizzle ORM for type-safe database queries and schema management
- Schema-first approach with TypeScript types generated from Drizzle schemas

**Core Data Models**
- **Users**: Profile information, cycle preferences (avg cycle/period length), authentication data
- **Cycles**: Individual menstrual cycle records with start/end dates
- **Symptoms**: Daily symptom logging with type, severity, and notes
- **ChatHistory**: AI conversation persistence for context-aware responses
- **Recipes**: Phase-specific nutrition recommendations with ingredients and instructions
- **MeditationVideos**: Curated YouTube meditation content linked to cycle phases
- **EducationalContent**: Articles and guides on menstrual health topics
- **Favorites**: User-saved recipes, meditations, and educational content

**Cycle Calculation Logic**
- Phase determination based on cycle day: Menstrual (1-5), Follicular (6 to ovulation-2), Ovulation (ovulation±1), Luteal (remainder)
- Ovulation day calculated as cycle length minus 14 days
- PMS window detection in luteal phase
- Next period prediction using average cycle length

### External Dependencies

**AI Integration**
- Google Gemini API for conversational AI assistant
- Context-aware responses incorporating user's current cycle phase, symptoms, and history
- System prompt engineered for empathetic, evidence-based menstrual health guidance
- Chat history persistence for continuity across sessions

**Third-Party Services**
- Neon Database (PostgreSQL serverless hosting)
- Replit Auth (OpenID Connect authentication provider)
- YouTube embed API for meditation video playback
- Unsplash for recipe imagery (via CDN URLs)

**Authentication & Session Management**
- Replit OIDC provider for seamless authentication in Replit environment
- connect-pg-simple for PostgreSQL-backed session storage
- Passport.js for authentication strategy management
- JWT signing and verification for API access control

**Development Tools**
- Replit-specific Vite plugins: cartographer (code mapping), dev-banner, runtime-error-modal
- ESBuild for server-side code bundling in production
- Drizzle Kit for database migrations and schema push

**Key Technical Decisions**

1. **Dual Backend Rationale**: Maintains Flask endpoints for compatibility while migrating to Node.js/Express for better integration with frontend tooling and unified TypeScript codebase

2. **Drizzle vs Prisma**: Drizzle chosen for lighter weight, better TypeScript inference, and schema-first approach that generates types rather than requiring code generation

3. **TanStack Query Strategy**: Centralized data fetching with automatic caching, background refetching, and optimistic updates reduces boilerplate and ensures consistent data state

4. **Component Library Choice**: Shadcn UI provides unstyled, accessible components that can be fully customized to match ARIVAI's specific design system while maintaining accessibility standards

5. **Token Storage**: localStorage used for JWT tokens despite XSS concerns, balanced with httpOnly session cookies for Replit Auth, accepting the tradeoff for simpler client-side development