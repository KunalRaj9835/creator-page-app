# Creator Detail App

A mobile-optimized Creator Detail screen built with **React Native (Expo)** on the frontend and **Supabase** for backend services. This app enables users to search for content creators and view their detailed profiles with responsive mobile UI.

## Tech Stack

- **Frontend:** React Native (Expo) with modular components and TypeScript
- **Backend:** Supabase (PostgreSQL database with REST API)
- **Data Communication:** REST API using Axios

## Features

- Search bar with live filtering of creators by name
- Display of creator details:
  - Profile Image
  - Name
  - Category (e.g., Fashion, Tech)
  - Follower Count
  - Bio
  - Instagram and YouTube links
- Mobile-friendly UI using FlatList and modular components
- Modular and clean code structure (components, hooks, types)

## Folder Structure

```
creator-detail-app/
├── client/                    # React Native App
│   ├── app/
│   │   └── index.tsx         # Main screen (modular layout)
│   ├── components/           # Reusable UI components
│   │   ├── CreatorCard.tsx
│   │   ├── CreatorDetail.tsx
│   │   └── SearchInput.tsx
│   ├── hooks/
│   │   ├── useCreators.ts
│   │   ├── useColorScheme.ts
│   │   └── useThemeColor.ts
│   ├── types/
│   │   └── types.ts
│   ├── utils/
│   │   └── supabaseClient.ts # Supabase configuration
│   ├── constants/
│   └── ...
```

## Setup Instructions

### Prerequisites

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Set up your creators table in Supabase with the following schema:
   ```sql
   CREATE TABLE creators (
     id SERIAL PRIMARY KEY,
     name VARCHAR NOT NULL,
     category VARCHAR NOT NULL,
     follower_count INTEGER,
     bio TEXT,
     profile_image_url VARCHAR,
     instagram_url VARCHAR,
     youtube_url VARCHAR,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

### Frontend Setup (React Native with Expo)

1. Navigate to the frontend folder:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Supabase:
   - Copy your Supabase URL and anon key from your project settings
   - Update the configuration in `utils/supabaseClient.ts`

4. Start the app using Expo:
   ```bash
   npx expo start
   ```

5. Launch the app:
   - Scan the QR code using **Expo Go** on your mobile
   - Or press `w` to open in your web browser

## Supabase Configuration

Create a `utils/supabaseClient.ts` file with your Supabase credentials:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

## API Integration

The app uses Supabase's auto-generated REST API:

- **Search creators:** `GET /rest/v1/creators?name=ilike.*searchTerm*`
- **Get creator by ID:** `GET /rest/v1/creators?id=eq.{id}`

## Features Implemented

- Supabase integration using the official JavaScript client
- Detail view with back navigation
- Real-time search filtering
- Modular component architecture (`CreatorCard`, `SearchInput`, `CreatorDetail`)
- Custom `useCreators` hook for data management
- TypeScript support for type safety

## Environment Variables

Make sure to set up your environment variables or configuration file with:

- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Developer Notes

- Data is now stored in Supabase PostgreSQL database
- Row Level Security (RLS) can be configured in Supabase for data protection
- Real-time subscriptions available through Supabase if needed
- Automatic API generation eliminates need for custom backend code

## Submission Checklist

- Modular code structure in `/client`
- Supabase integration for data storage and API
- Mobile-optimized and responsive UI
- TypeScript implementation
- This README.md with clear setup instructions

## Developed By

**Kunal Raj**