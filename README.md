# Ehtasham Faryad - Personal Portfolio

A premium, editorial-style personal portfolio website built to showcase full-stack development projects. The site is a lightning-fast, entirely static frontend application.

## Features
- **Design**: Premium typographic design, refined layout, custom animations, and a soft color palette with Light/Dark mode.
- **Frontend Only**: 100% static React application — no database or backend required.
- **Easy to Update**: All content (bio, skills, experience, projects) is centrally managed in a single static data file.
- **Tech Stack**: React, Vite, Tailwind CSS, Framer Motion, React Router, and Lucide React.

## Getting Started

### 1. Prerequisites
- Node.js (v18+)

### 2. Installation
Navigate to the `client` directory and install the dependencies:
```bash
cd client
npm install
```

### 3. Running Locally
Start the Vite development server:
```bash
npm run dev
```
Your portfolio will be running at `http://localhost:5173`.

---

## How to Customize Content

You don't need a database to update your portfolio. Everything is managed inside one file: 
**`client/src/data/content.js`**

Simply open this file to update your:
- Personal Bio & Links
- Experience
- Skills & Tools
- Projects & Case Studies

Whenever you save the file, the site will automatically update.

## Adding a Working Contact Form

Since there is no backend, the contact form currently simulates a submission. To make it send real emails to your inbox for free:

1. Create a free account at [Web3Forms](https://web3forms.com/) or [Formspree](https://formspree.io/).
2. Get your Access Key.
3. Open `client/src/pages/Home.jsx`.
4. Update the `onSubmit` function to fetch your form provider's endpoint using your Access Key.

## Deployment

Deploying this portfolio is incredibly fast and free.

### Vercel (Recommended)
1. Push your code to a GitHub repository. (You only need the `client` folder).
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Set the Framework Preset to **Vite** and the Root Directory to `client` (if you kept the folder structure) or leave it as root if you moved the contents of `client` to the top level.
5. Click **Deploy**. 

---
*Designed & Built for Hafiz Muhammad Ehtasham Faryad.*
