# ARIVAI - AI-Powered Menstrual Wellness Companion

ARIVAI is a comprehensive AI-powered menstrual wellness application that helps users track their menstrual cycles, log symptoms, receive personalized health advice, and access phase-specific nutrition and mindfulness resources.

## Features

- **Cycle Tracking**: Log period start dates, track cycle phases with personalized predictions
- **Phase Visualization**: Color-coded calendar showing menstrual, follicular, ovulation, and luteal phases
- **Symptom Logging**: Track physical and emotional symptoms with severity levels
- **AI Chat**: Personalized wellness advice powered by Google Gemini API
- **Recipes**: Phase-specific nutrition recommendations
- **Meditation**: Curated mindfulness and relaxation videos
- **Education**: Articles on PMS, pregnancy, menopause, and sexual wellness
- **Onboarding Questionnaire**: Personalized setup for accurate cycle predictions

## Tech Stack

- **Frontend**: React.js with TypeScript, TailwindCSS, Shadcn UI components
- **Backend**: Express.js + Flask (Python) hybrid architecture
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: JWT-based authentication
- **AI**: Google Gemini API for intelligent chat assistant

## Prerequisites

Before running locally, ensure you have:

- **Node.js** (v18 or higher)
- **Python** (v3.11 or higher)
- **PostgreSQL** database
- **npm** (comes with Node.js)

## Local Development Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd version2
```

### 2. Install Dependencies

Install Node.js dependencies:
```bash
npm install
```

Install Python dependencies:
```bash
pip install -r requirements.txt
# OR using uv (if available)
uv sync
```

### 3. Set Up Environment Variables

Copy the example environment file:
```bash
cp .env.example .env
```

Edit `.env` with your values:
```env
# PostgreSQL Database Connection
DATABASE_URL=postgresql://username:password@localhost:5432/arivai_db

# Session encryption key (generate a random string)
SESSION_SECRET=your-secret-key-here

# Google Gemini API Key (optional - app works without it)
GEMINI_API_KEY=your-gemini-api-key
```

### 4. Set Up the Database

Create a PostgreSQL database:
```bash
createdb arivai_db
```

Push the database schema:
```bash
npm run db:push
```

### 5. Run the Application

Start the development server:
```bash
npm run dev
```

This will start:
- **Express server** on port 5000 (serves frontend + proxies API)
- **Flask backend** on port 5001 (handles API endpoints)

Open your browser and navigate to: `http://localhost:5000`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run db:push` | Push database schema changes |
| `npm run check` | Run TypeScript type checking |

## Project Structure

```
version2/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
│   └── index.html
├── server/                 # Express.js backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API route handlers
│   ├── db.ts              # Database connection
│   └── vite.ts            # Vite dev server setup
├── backend/                # Flask Python backend
│   └── app.py             # Flask API endpoints
├── shared/                 # Shared TypeScript types
│   └── schema.ts          # Database schema (Drizzle)
├── package.json
├── pyproject.toml
└── vite.config.ts
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh access token
- `GET /api/auth/user` - Get current user

### Cycle Management
- `GET /api/cycles` - Get user cycles
- `POST /api/cycles` - Create new cycle

### Symptoms
- `GET /api/symptoms` - Get logged symptoms
- `POST /api/symptoms` - Log new symptom

### AI Chat
- `GET /api/chat` - Get chat history
- `POST /api/chat` - Send message to AI

### Content
- `GET /api/recipes` - Get recipes
- `GET /api/meditation-videos` - Get meditation videos
- `GET /api/educational-content` - Get educational articles
- `GET /api/onboarding` - Get onboarding status
- `POST /api/onboarding` - Save onboarding data

## Onboarding Questions

When users sign up, they complete a questionnaire that includes:
1. First day of last menstrual period
2. Typical cycle length
3. Period duration
4. Cycle variability
5. Health conditions (PCOS, hormonal imbalance, etc.)
6. Fertility tracking methods
7. Symptom tracking preference
8. Prediction display preference
9. Lifestyle factors (optional)

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `SESSION_SECRET` | Yes | Secret key for session encryption |
| `GEMINI_API_KEY` | No | Google Gemini API key for AI chat |

## Color Scheme

The app uses a warm, wellness-focused color palette:
- **Espresso Black** (#281B1C) - Background
- **Dark Roast** (#4A3C3B) - Cards and containers
- **Rich Merlot** (#8B4B5B) - Primary accent
- **Soft Latte** (#EFE8E5) - Text and icons

Calendar phase colors (soft latte brown shades):
- **Menstrual**: #E8B4BC (Soft Rose Latte)
- **Follicular**: #D4C4B0 (Warm Beige Latte)
- **Ovulation**: #C9A9A6 (Dusty Rose Latte)
- **Luteal**: #BFA89E (Mocha Latte)

## Troubleshooting

### Database Connection Issues
- Ensure PostgreSQL is running
- Verify DATABASE_URL is correct
- Check if the database exists

### Port Conflicts
- Frontend runs on port 5000
- Flask backend runs on port 5001
- Ensure these ports are available

### Python Dependencies
If you encounter Python import errors:
```bash
pip install flask flask-cors flask-jwt-extended flask-sqlalchemy bcrypt google-generativeai psycopg2-binary python-dotenv
```

## License

MIT License
