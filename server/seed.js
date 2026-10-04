import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';
import Admin from './models/Admin.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const projects = [
  {
    title: 'E-Commerce Platform with Admin Dashboard',
    slug: 'e-commerce-platform',
    summary: 'MERN stack e-commerce with Stripe, JWT auth, and a full admin dashboard.',
    description:
      'Product search with category and price filters, cart with quantity updates and totals, Stripe checkout with order creation and status tracking, admin dashboard for products/orders/users protected by JWT and role-based access control.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Stripe'],
    role: 'Full-Stack Developer',
    year: '2026',
    githubUrl: 'https://github.com/Ehtasham5',
    liveUrl: 'https://forever-ecommerce-dnrj.vercel.app/',
    images: ['/ecommerce.png'],
    featured: true,
    order: 1,
  },
  {
    title: 'Job Portal',
    slug: 'job-portal',
    summary: 'Role-based job portal for recruiters and job seekers.',
    description:
      'Separate role-based experiences. Recruiters post, edit, and manage jobs and review applications. Job seekers register, search, filter, and apply, with application status visible to both sides. RESTful APIs for jobs, users, and applications.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    role: 'Full-Stack Developer',
    year: '2026',
    githubUrl: 'https://github.com/Ehtasham5',
    liveUrl: '#',
    images: [],
    featured: true,
    order: 2,
  },
  {
    title: 'Twitter Clone',
    slug: 'twitter-clone',
    summary: 'Full-stack social media application mirroring Twitter core functionality.',
    description:
      'Authentication, tweet creation, likes, comments, follow/unfollow. Mongoose schemas for users, tweets, and relationships. Full CRUD REST APIs.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Mongoose'],
    role: 'Full-Stack Developer',
    year: '2026',
    githubUrl: 'https://github.com/Ehtasham5',
    liveUrl: '#',
    images: [],
    featured: false,
    order: 3,
  },
  {
    title: 'YouTube API Backend',
    slug: 'youtube-api-backend',
    summary: 'Robust backend RESTful APIs simulating YouTube.',
    description:
      'Account creation, channel subscriptions, video posting, comments. RESTful endpoints for auth, subscribe/unsubscribe, video posting, commenting.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
    role: 'Backend Developer',
    year: '2026',
    githubUrl: 'https://github.com/Ehtasham5',
    liveUrl: '#',
    images: [],
    featured: false,
    order: 4,
  },
  {
    title: 'User Authentication System',
    slug: 'user-auth-system',
    summary: 'Reusable JWT-based authentication system.',
    description:
      'Registration, login, protected routes, reusable auth middleware, bcrypt hashing.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt'],
    role: 'Backend Developer',
    year: '2026',
    githubUrl: 'https://github.com/Ehtasham5',
    liveUrl: '#',
    images: [],
    featured: false,
    order: 5,
  },
];

const importData = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD must be set before seeding.');
    }

    await Project.deleteMany();
    await Admin.deleteMany();

    const createdProjects = await Project.insertMany(projects);

    const admin = await Admin.create({
      email: adminEmail,
      password: adminPassword,
    });

    console.log('Data Imported!');
    console.log(`Admin email: ${adminEmail}`);
    console.log('Admin password configured.');
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  // Option to destroy data
} else {
  importData();
}
