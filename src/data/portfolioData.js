// ============================================================
// portfolioData.js — Centralized configuration for Jeevith R's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Jeevith R",
  firstName: "Jeevith",
  brandName: "Jeevith R",
  title: "AI Engineer & Full-Stack Product Builder",
  location: "Bengaluru, India",
  phone: "+91 63600 48626",
  emails: {
    primary: "1812jeevith@gmail.com",
    secondary: "devquillyt2025@gmail.com",
  },
  summary:
    "AI and data engineer building production healthcare pipelines on AWS by day, and an independent product builder shipping live SaaS tools by night. Experienced across Python, SQL, Generative AI, and cloud data engineering — with a working portfolio of self-built products spanning clinic operations, personal finance, and productivity.",
  resumeUrl: "/Jeevith_R_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/devquillyt2025-arch",
  linkedin: "https://www.linkedin.com/in/jeevith-r-b61aa025b/",
};

export const heroContent = {
  greeting: "Hi, I'm Jeevith",
  titleHighlight: "AI Engineer & Full-Stack Product Builder",
  subtitle:
    "I build production AI and data pipelines on AWS, and ship full-stack products solo — from clinic management SaaS to AI-powered finance tools.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:1812jeevith@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Jeevith,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Jeevith_R_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Jeevith R</span>, an AI and data engineer based in Bengaluru, India, building healthcare-grade pipelines on AWS by day and shipping independent SaaS products end-to-end on my own time.`,
  techStack: ["Python", "AWS", "Generative AI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, creative, and highly technical approach to turn ideas into robust full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding goals, user requirements, and technical constraints to lay a rock-solid foundation for the project.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting clean architecture, intuitive interfaces, and pixel-perfect wireframes that guarantee an engaging and accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable backends and responsive frontends using modern tech stacks and best practices.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Rigorous testing, performance optimization, and seamless deployment to cloud infrastructure, followed by ongoing support.",
    },
  ],
  endText: "Ready to ship!",
};

// Technical Skills Data — tier-based (Familiar / Proficient / Expert)
export const technicalSkills = {
  categories: [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Generative AI & Prompt Engineering", tier: "Expert" },
        { name: "Machine Learning", tier: "Proficient" },
        { name: "AI Solution Development", tier: "Proficient" },
      ],
    },
    {
      title: "Data Engineering",
      skills: [
        { name: "Python", tier: "Expert" },
        { name: "SQL", tier: "Expert" },
        { name: "ETL Pipelines", tier: "Expert" },
        { name: "Databricks & PySpark", tier: "Proficient" },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS (Lambda, Step Functions, S3)", tier: "Expert" },
        { name: "Serverless Architecture", tier: "Expert" },
        { name: "CI/CD (Bitbucket)", tier: "Proficient" },
      ],
    },
    {
      title: "Analytics & BI",
      skills: [
        { name: "Power BI", tier: "Proficient" },
        { name: "Advanced Excel", tier: "Expert" },
        { name: "Pandas & NumPy", tier: "Proficient" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Pytest", tier: "Proficient" },
        { name: "Git", tier: "Expert" },
        { name: "Jira", tier: "Proficient" },
      ],
    },
  ],
};

// Professional Experience Data
export const experienceList = [
  {
    organization: "Emids Technologies",
    role: "Senior Consultant",
    duration: "Nov 2025 – Present",
    location: "Bengaluru, India",
    skills: ["EDI 834 Parsing", "Healthcare Data Pipelines", "Serverless Architecture", "CI/CD"],
    tech: ["Python", "AWS Lambda", "Step Functions", "PostgreSQL", "Pytest", "Bitbucket", "Jira"],
  },
  {
    organization: "MAA Academy",
    role: "Program Manager & AI Engineer",
    duration: "Oct 2024 – Nov 2025",
    location: "Bengaluru, India",
    skills: ["AI/ML Program Delivery", "Client Onboarding", "Operational Reporting", "Revenue Tracking"],
    tech: ["Excel", "SQL", "Power BI", "LMS Tools"],
  },
  {
    organization: "Tata Electronics",
    role: "Data Analyst",
    duration: "Sep 2023 – Oct 2024",
    location: "Narsapura, India",
    skills: ["Predictive Modeling", "Process Optimization", "Data Validation"],
    tech: ["Python", "SQL", "Power BI"],
  },
];

// Soft Skills Data
export const softSkillsList = [
  { name: "Analytical Thinking & Problem Solving", icon: "🧩", desc: "Breaking down ambiguous data and business problems into structured, solvable pieces." },
  { name: "Innovation & Continuous Learning", icon: "🌱", desc: "Picking up new tools fast — currently Generative AI, Databricks, and serverless architecture." },
  { name: "Research & Data-Driven Decision Making", icon: "🔍", desc: "Grounding recommendations in data validation, testing, and measurable outcomes." },
  { name: "Cross-Functional Collaboration", icon: "🤝", desc: "Working across engineering, sales, and training teams to ship aligned outcomes." },
  { name: "Communication & Stakeholder Management", icon: "💬", desc: "Translating technical work into terms clients and non-technical stakeholders act on." },
];

export const projects = [
  {
    id: "myturnapp",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "MyTurnApp",
    description:
      "Clinic queue management SaaS — multi-clinic support, QR-based self-serve walk-in, appointment booking, and Razorpay payments. Production-hardened and live.",
    techTags: ["Next.js", "Supabase", "Razorpay", "Vercel"],
    links: {
      github: "https://github.com/devquillyt2025-arch/MyTurn",
      demo: "https://myturnapp.online",
    },
    isFlagship: true,
  },
  {
    id: "ledger",
    number: "02",
    badge: null,
    title: "Ledger",
    description:
      "Personal finance app — bank accounts, subscriptions, debt & EMI tracking, investments, and a net-worth dashboard with PhonePe statement parsing.",
    techTags: ["Next.js", "Supabase", "PhonePe Statement Parser", "Vercel"],
    links: {
      github: "https://github.com/devquillyt2025-arch/Ledger",
    },
    isFlagship: false,
  },
  {
    id: "focusly",
    number: "03",
    badge: null,
    title: "Focusly",
    description:
      "Multi-module productivity dashboard — Habits, Focus, Journal, Goals, Tasks, Notes, Calendar, with two-way Google Tasks sync.",
    techTags: ["Next.js", "Supabase", "Google Tasks API", "Vercel"],
    links: {
      github: "https://github.com/devquillyt2025-arch/focusly",
    },
    isFlagship: false,
  },
  {
    id: "replyforge",
    number: "04",
    badge: null,
    title: "ReplyForge",
    description:
      "Cold email triage tool — Gmail API integration with Claude-based classification, deployed on Vercel.",
    techTags: ["Next.js", "Gmail API", "Claude API", "Vercel"],
    links: {
      github: "https://github.com/devquillyt2025-arch/replyforge",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Advanced Certification in Artificial Intelligence & Machine Learning",
      issuer: "MAA Academy",
      icon: "🤖",
    },
    {
      name: "Generative AI & Prompt Engineering",
      issuer: "MAA Academy",
      icon: "✨",
    },
  ],
};

export const education = {
  degree: "B.E. — Electrical & Electronics Engineering",
  institution: "The National Institute of Engineering, Mysuru",
  cgpa: "7.6",
  graduation: "2023",
};

export const footerContent = {
  taglines: [
    "AI Engineering & Data Solutions",
    "Python · AWS · Generative AI",
    "Full-Stack Product Builder",
  ],
  credential: "B.E. EEE · AWS & GenAI Engineer",
  copyright: `© ${new Date().getFullYear()} Jeevith R | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
