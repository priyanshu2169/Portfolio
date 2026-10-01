export const personal = {
  name: "Priyanshu Tyagi",
  roles: ["Full-Stack Developer", "Backend Developer"],
  tagline:
    "I build full-stack web apps and integrate AI/ML models into real-world products.",
  location: "Meerut, Uttar Pradesh, India",
  email: "priyanshutyagi0910@gmail.com",
  phone: "+91 6377293622",
  resume: `${import.meta.env.BASE_URL}resume.pdf`,
  socials: {
    linkedin: "https://linkedin.com/in/priyanshutyagi3110",
    github: "https://github.com/priyanshu2169",
    leetcode: "https://leetcode.com/u/priyanshu_0910",
  },
};

export const about = {
  summary:
    "Computer Science undergraduate (AI/ML specialization) with hands-on experience building full-stack web applications using React, Node.js, Express.js, and MongoDB/SQL. Skilled in developing REST APIs, authentication systems, and MVC-based backends, with additional experience integrating AI/ML models into production-style applications.",
  goal: "Seeking a Software Developer / Backend Developer role to apply full-stack development and problem-solving skills.",
  stats: [
    { value: "3+", label: "Major Projects" },
    { value: "4", label: "Certifications" },
    { value: "2027", label: "B.Tech Graduation" },
  ],
};

export const skills = [
  { category: "Languages", items: ["Java", "JavaScript", "Python", "C", "SQL"] },
  { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "EJS"] },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "MVC Architecture", "CRUD Operations", "Authentication & Authorization"],
  },
  { category: "Databases", items: ["MongoDB", "MySQL", "SQL"] },
  { category: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Render"] },
  { category: "Other", items: ["Data Structures & Algorithms", "AI/ML Model Integration", "Prompt Engineering"] },
];

export const projects = [
  {
    title: "Agentic BI Multi-Lingual SQL Analyst",
    badge: "Final Year Major Project",
    description:
      "An agentic business-intelligence system that converts natural-language queries into SQL across multiple languages, so users can query relational databases without writing SQL. Owned the full lifecycle: backend architecture, React frontend, database design, and AI model integration for automated SQL generation and reporting.",
    tech: ["React", "Node.js", "Express.js", "SQL", "AI/ML"],
    github: "", // add link if available
    live: "",
  },
  {
    title: "AI-Powered Crop Optimization & Prediction",
    badge: "AI + Web",
    description:
      "A smart-farming web application with a Node.js/Express/MongoDB backend for agricultural data processing. Built the complete frontend and integrated AI/ML models for crop prediction, disease detection, fertilizer suggestions, and yield prediction.",
    tech: ["Node.js", "Express.js", "MongoDB", "AI/ML"],
    github: "https://github.com/priyanshu2169/crop-prediction-and-optimization",
    live: "",
  },
  {
    title: "Wanderlust — Airbnb Clone",
    badge: "Full-Stack",
    description:
      "A full-stack rental-booking app covering listing creation, browsing, and end-to-end booking. Implements authentication, authorization, input validation, multilingual support, and search using MVC architecture. Deployed on Render.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "Node.js", "Express.js", "MongoDB", "Render"],
    github: "https://github.com/priyanshu2169/Major-Project",
    live: "", // add your Render URL here
  },
];

export const education = [
  {
    school: "Meerut Institute of Engineering and Technology (MIET)",
    degree: "B.Tech in CSE (Artificial Intelligence & Machine Learning)",
    period: "2023 – 2027",
    place: "Meerut, Uttar Pradesh",
  },
  {
    school: "KV Public School, Meerut",
    degree: "Class XII, CBSE",
    period: "2022",
    score: "85%",
  },
  {
    school: "KV Public School, Meerut",
    degree: "Class X, CBSE",
    period: "2020",
    score: "82.8%",
  },
];

export const certifications = [
  { title: "Google AIML Workshop", issuer: "EduSkills Tech Camp" },
  { title: "MongoDB Skill Certificate", issuer: "MongoDB" },
  { title: "Web Development Certificate", issuer: "Apna College" },
  { title: "DSA Certificate", issuer: "Apna College" },
];