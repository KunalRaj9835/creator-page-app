# Creator Detail App

A mobile-optimized Creator Detail screen built with **React Native (Expo)** on the frontend, **Node.js + Express** on the backend, and **MongoDB** for data storage. This app enables users to search for content creators and view their detailed profiles with responsive mobile UI.

## Tech Stack

- **Frontend:** React Native (Expo) with modular components and TypeScript
- **Backend:** Express.js (Node.js)
- **Database:** MongoDB (Local)
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
│   │   └── useCreators.ts
│   ├── types/
│   │   └── index.ts
│   └── ...
└── server/                   # Backend API
    ├── index.js             # Main Express server
    ├── models/
    │   └── creator.js       # Mongoose model
```

## Setup Instructions

### 1. Backend (Express + MongoDB)

> Make sure MongoDB is running locally before proceeding.

1. Navigate to the backend folder:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node index.js
   ```

4. The backend will run on: **http://localhost:3000**

### 2. Frontend (React Native with Expo)

1. Navigate to the frontend folder:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the app using Expo:
   ```bash
   npx expo start
   ```

4. Launch the app:
   - Scan the QR code using **Expo Go** on your mobile
   - Or press `w` to open in your web browser

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/creators?search=xyz` | GET | Fetch creators matching xyz |
| `/api/creators/:id` | GET | Fetch a creator by ID |

**Note:** Ensure the frontend calls use your **local IP address** (e.g., `http://192.168.1.xx:3000`) instead of `localhost` when testing on a physical device.

## Features Implemented

- Axios-based data fetching using a custom `useCreators` hook
- Detail view with back navigation
- Real-time search filtering
- Modular component architecture (`CreatorCard`, `SearchInput`, `CreatorDetail`)
- MongoDB connection with Express

## Developer Notes

- You can manually add creator documents to MongoDB via Compass, Mongo shell, or Mongoose
- The backend is configured with proper CORS settings to allow cross-origin requests
- No seed or dummy data script is included in this version

## Submission Checklist

- Modular code in `/client` and `/server`
- Local MongoDB-based creator storage
- Mobile-optimized and responsive UI
- This README.md with clear setup instructions

## Developed By

**Kunal Raj**