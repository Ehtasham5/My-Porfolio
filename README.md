# MERN Stack Portfolio

A premium, editorial-style personal portfolio website built with the MERN stack (MongoDB, Express, React, Node.js).

## Features
- **Design**: Premium typographic design, 12-column grid, soft color palette with Light/Dark mode.
- **Frontend**: React, Vite, Tailwind CSS, Framer Motion, React Router, React Hook Form + Zod.
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT authentication.
- **Admin Dashboard**: Protected routes to view contact messages and manage projects.

## Project Structure
- `/client`: React frontend
- `/server`: Node.js backend

## Local Setup

### 1. Prerequisites
- Node.js (v18+)
- MongoDB (Local instance or MongoDB Atlas cluster)

### 2. Backend Setup
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory (use `.env.example` as a template):
```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_super_secret_jwt_key
CLIENT_URL=http://localhost:5173
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=replace_with_a_long_random_password
```

**Seed the Database:**
This will load your 5 initial projects and create an admin user using `ADMIN_EMAIL` and `ADMIN_PASSWORD` from `server/.env`. Set a unique, strong password before running the seed command.
```bash
npm run seed
```

**Start the Server:**
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd client
npm install
```
Create a `.env` file in the `client` directory (use `.env.example` as a template):
```env
VITE_API_URL=http://localhost:5000/api
```

**Start the Client:**
```bash
npm run dev
```

Your app will be running at `http://localhost:5173`.

## Deployment Steps

### Backend (Render or Railway)
1. Push your code to GitHub.
2. Create a new Web Service on Render or Railway, pointing to the `server` directory.
3. Add the environment variables from your `.env` file (ensure `NODE_ENV=production` and `CLIENT_URL` points to your deployed frontend domain).
4. Set the build command to `npm install` and start command to `node server.js`.

### Database (MongoDB Atlas)
1. Create a free cluster on MongoDB Atlas.
2. Get your connection string and add it as the `MONGO_URI` environment variable in your backend deployment.
3. Ensure Network Access is set to allow connections from anywhere (`0.0.0.0/0`) or your specific backend IP.

### Frontend (Vercel or Netlify)
1. Import the repository into Vercel/Netlify.
2. Set the Framework Preset to Vite.
3. Set the Root Directory to `client`.
4. Add the `VITE_API_URL` environment variable pointing to your deployed backend URL (e.g., `https://your-backend.onrender.com/api`).
5. Deploy.

---
*Designed & Built for Hafiz Muhammad Ehtasham Faryad.*
