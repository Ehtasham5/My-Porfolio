export const personalInfo = {
  name: 'Hafiz Muhammad Ehtasham Faryad',
  shortName: 'Ehtasham Faryad',
  title: 'Full-Stack Developer (MERN & Next.js)',
  email: 'ehtashamfaryad29@gmail.com',
  phone: '+92 304 5280101',
  location: 'Faisalabad, Pakistan',
  github: 'https://github.com/Ehtasham5',
  linkedin: 'https://linkedin.com/in/ehtashamfaryad',
  bio: [
    "I'm a Software Engineering student at the University of Agriculture, Faisalabad (BS, 2022 – Present). I build full-stack products from the ground up: e-commerce platforms, job portals, auth systems, and backend APIs.",
    "I'm looking for a full-stack internship where I can contribute to real-world products and grow as an engineer.",
  ],
  education: 'BS Software Engineering',
  coursework: 'DSA · Database Systems · Web Technologies · Machine Learning · Software Design',
};

export const experience = [
  {
    year: '2025',
    role: 'Frontend Developer Intern',
    company: 'Foodsted',
    location: 'Norway-based, on-site in Faisalabad',
    bullets: [
      'Built and maintained the client-facing website with HTML, CSS, JavaScript',
      'Implemented responsive UI components following brand guidelines',
      'Improved cross-browser compatibility and page load performance',
      'Gained exposure to professional workflows, version control, and client feedback',
    ],
  },
];

export const skills = [
  {
    category: 'Full-Stack',
    items: ['MongoDB / Mongoose', 'Express.js', 'React.js / Next.js', 'Node.js', 'REST API / JWT / Clerk'],
  },
  {
    category: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'HTML / CSS', 'Python'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'SQL / PostgreSQL', 'Supabase', 'Prisma'],
  },
  {
    category: 'Concepts & Tools',
    items: ['Auth & RBAC', 'OOP / System Design', 'Git / GitHub / VS Code', 'Postman / Stripe'],
  },
];

export const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform with Admin Dashboard',
    slug: 'e-commerce-platform',
    summary: 'Full-stack e-commerce with Stripe payments, JWT auth, and a comprehensive admin dashboard for managing products, orders, and users.',
    description:
      'Product search with category and price filters, cart with quantity updates and totals, Stripe checkout with order creation and status tracking, admin dashboard for products/orders/users protected by JWT and role-based access control.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Stripe'],
    role: 'Full-Stack Developer',
    year: '2026',
    githubUrl: 'https://github.com/Ehtasham5',
    liveUrl: 'https://forever-ecommerce-dnrj.vercel.app/',
    images: ['/ecommerce.png'],
  },
  {
    id: '2',
    title: 'Job Portal',
    slug: 'job-portal',
    summary: 'Role-based job portal with separate experiences for recruiters and job seekers, featuring job management, applications, and status tracking.',
    description:
      'Separate role-based experiences. Recruiters post, edit, and manage jobs and review applications. Job seekers register, search, filter, and apply, with application status visible to both sides. RESTful APIs for jobs, users, and applications.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    role: 'Full-Stack Developer',
    year: '2026',
    githubUrl: 'https://github.com/Ehtasham5',
    liveUrl: '#',
    images: [],
  },
  {
    id: '3',
    title: 'Twitter Clone',
    slug: 'twitter-clone',
    summary: 'Full-stack social media application mirroring Twitter core functionality with authentication, tweets, likes, comments, and follow system.',
    description:
      'Authentication, tweet creation, likes, comments, follow/unfollow. Mongoose schemas for users, tweets, and relationships. Full CRUD REST APIs.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Mongoose'],
    role: 'Full-Stack Developer',
    year: '2026',
    githubUrl: 'https://github.com/Ehtasham5',
    liveUrl: '#',
    images: [],
  },
  {
    id: '4',
    title: 'YouTube API Backend',
    slug: 'youtube-api-backend',
    summary: 'Robust backend RESTful APIs simulating YouTube with channels, subscriptions, video posting, and commenting.',
    description:
      'Account creation, channel subscriptions, video posting, comments. RESTful endpoints for auth, subscribe/unsubscribe, video posting, commenting.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'Mongoose'],
    role: 'Backend Developer',
    year: '2026',
    githubUrl: 'https://github.com/Ehtasham5',
    liveUrl: '#',
    images: [],
  },
  {
    id: '5',
    title: 'User Authentication System',
    slug: 'user-auth-system',
    summary: 'Reusable JWT-based authentication system with registration, login, protected routes, and bcrypt hashing.',
    description:
      'Registration, login, protected routes, reusable auth middleware, bcrypt hashing.',
    techStack: ['Node.js', 'Express', 'MongoDB', 'JWT', 'bcrypt'],
    role: 'Backend Developer',
    year: '2026',
    githubUrl: 'https://github.com/Ehtasham5',
    liveUrl: '#',
    images: [],
  },
];
