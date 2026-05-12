export const personal = {
  name: "Shenbaga Balaji",
  tagline: "I build systems that learn.",
  subtagline:
    "ML engineer & full-stack builder — turning messy data into intelligent products.",
  location: "Chennai, India",
  email: "shenal19406@gmail.com",
  phone: "+91 7358183753",
  linkedin: "https://linkedin.com/in/shenbaga-balaji-6b4b8228a",
  github: "https://github.com/shenal19",
  role: "AI / ML Engineer",
  bio: [
    "Pre-final year CSE (Data Science) student at VIT Chennai with a focus on applied machine learning, NLP, and full-stack AI integration.",
    "I've shipped predictive models, real-time computer vision pipelines, and LLM-powered discovery tools — all the way from research to deployable interfaces.",
    "Previously worked at ISNIA Technologies on enterprise data quality workflows using Stibo STEP MDM. Now looking for opportunities where data and intelligence intersect at scale.",
  ],
};

export const stats = [
  { label: "Projects Shipped", value: "4+" },
  { label: "Open Source PRs", value: "3+" },
  { label: "ML Models Deployed", value: "3" },
  { label: "Certifications", value: "4" },
];

export const projects = [
  {
    id: "indiaInternHub",
    title: "IndiaInternHub",
    year: "2026",
    featured: true,
    tagline: "LLM-powered internship discovery engine",
    description:
      "Engineered a full-stack aggregation platform that automates internship discovery across multiple sources. Integrated a fine-tuned LLM chatbot for intelligent filtering and ranking, reducing manual search time by ~70%. Backend powered by REST APIs and PostgreSQL with structured candidate matching logic.",
    stack: ["Python", "PostgreSQL", "REST APIs", "LLM", "SQL"],
    metrics: ["~70% reduction in search time", "Multi-source aggregation", "LLM-ranked results"],
    github: "https://github.com/shenal19",
    category: "Full-Stack + AI",
  },
  {
    id: "bugPrediction",
    title: "Bug Prediction System",
    year: "2025",
    featured: true,
    tagline: "RandomForest fault-prone module classifier",
    description:
      "Built a research-grade fault prediction system using RandomForest on structured code quality datasets. Achieved 87%+ classification accuracy identifying fault-prone modules before deployment. Deployed findings via an interactive Streamlit dashboard enabling real-time analysis by non-technical stakeholders.",
    stack: ["Python", "RandomForest", "Streamlit", "scikit-learn", "Pandas"],
    metrics: ["87%+ accuracy", "Interactive dashboard", "Research-grade pipeline"],
    github: "https://github.com/Lohithaswin/Bug-Prediction",
    category: "ML Research",
  },
  {
    id: "agreeWise",
    title: "AgreeWise — T&C Summarizer",
    year: "2025",
    featured: true,
    tagline: "NLP engine for legal text comprehension",
    description:
      "Developed an NLP pipeline using spaCy to parse and distill dense Terms & Conditions documents into actionable summaries. Reduces 40+ page legal documents to key insights in under 5 seconds. Designed for non-technical users facing complex software agreements.",
    stack: ["Python", "spaCy", "NLP", "Streamlit"],
    metrics: ["<5 second summaries", "40+ page docs processed", "Key clause extraction"],
    github: "https://github.com/shenal19",
    category: "NLP",
  },
  {
    id: "cricketTracking",
    title: "Cricket Ball Tracker",
    year: "2025",
    featured: false,
    tagline: "Real-time object tracking via computer vision",
    description:
      "Built a real-time video analysis system using OpenCV to detect and track cricket ball trajectory across frames. Demonstrates applied understanding of object detection, frame differencing, and motion estimation in sports analytics.",
    stack: ["Python", "OpenCV", "Computer Vision"],
    metrics: ["Real-time tracking", "Frame-level detection", "Motion estimation"],
    github: "https://github.com/shenal19",
    category: "Computer Vision",
  },
];

export const experience = [
  {
    company: "ISNIA Technologies",
    role: "STEP Master Data Management Intern",
    period: "Jun 2025 – Jul 2025",
    location: "Coimbatore, TN",
    type: "internship",
    points: [
      "Managed structured enterprise data workflows in Stibo STEP MDM, improving data consistency across 10,000+ product records.",
      "Designed and implemented validation and transformation rules, reducing data entry errors by 30%.",
      "Automated manual workflow processes, cutting processing overhead for enterprise data pipelines.",
    ],
  },
  {
    company: "Coincent.ai",
    role: "Data Science Internship Trainee",
    period: "Jun 2024 – Jul 2024",
    location: "Remote, India",
    type: "internship",
    points: [
      "Completed intensive hands-on training in data analysis, statistical modeling, and Python for data science.",
      "Applied learned techniques to real-world problem-solving exercises and mini-projects.",
    ],
  },
  {
    company: "Music Club, VIT Chennai",
    role: "Operations Team Member",
    period: "Jul 2024 – Aug 2025",
    location: "Chennai, TN",
    type: "extracurricular",
    points: [
      "Coordinated logistics and operations for 5+ large-scale student events, managing cross-functional teams of 20+.",
    ],
  },
];

export const openSource = [
  {
    repo: "TourismWebApp",
    org: "vignsh7",
    url: "https://github.com/vignsh7/TourismWebApp",
    description:
      "Contributed to an AI-powered tourism booking platform (SIH 2025). Maintained production deployment pipelines and implemented trip planning workflow improvements.",
    tags: ["Full-Stack", "SIH 2025", "Deployment"],
  },
  {
    repo: "Bug-Prediction",
    org: "Lohithaswin",
    url: "https://github.com/Lohithaswin/Bug-Prediction",
    description:
      "Submitted PRs improving the prediction pipeline architecture and module maintainability. Refactored workflow for multi-dataset support.",
    tags: ["ML", "Python", "Code Quality"],
  },
];

export const skills = {
  "Machine Learning & AI": [
    "RandomForest",
    "Linear Regression",
    "NLP (spaCy)",
    "LLM Integration",
    "scikit-learn",
    "Oracle GenAI",
  ],
  "Languages": ["Python", "Java", "SQL", "R", "C/C++", "TypeScript"],
  "Data & Backend": ["PostgreSQL", "MySQL", "REST APIs", "Streamlit", "Pandas"],
  "Tools & Platforms": ["Git", "Stibo STEP MDM", "AWS (Fundamentals)", "JMP", "Oracle Cloud"],
  "CS Foundations": [
    "Data Structures",
    "Algorithms",
    "Dynamic Programming",
    "Graphs & Trees",
    "Hashing",
  ],
};

export const certifications = [
  {
    title: "Oracle Cloud Infrastructure Generative AI Professional",
    issuer: "Oracle",
    badge: "OCI",
    color: "accent",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    badge: "IBM",
    color: "accent-2",
  },
  {
    title: "STEP Fundamentals — Master Data Management",
    issuer: "Stibo Systems",
    badge: "MDM",
    color: "highlight",
  },
  {
    title: "Data Science with Python",
    issuer: "Coincent.ai",
    badge: "DS",
    color: "accent",
  },
];

export const education = {
  degree: "B.Tech — CSE (Data Science)",
  school: "Vellore Institute of Technology, Chennai",
  period: "2023 – 2027",
  cgpa: "7.81",
};
