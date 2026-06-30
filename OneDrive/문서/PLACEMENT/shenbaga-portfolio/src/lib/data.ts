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
    "Pre-final year CSE (Data Science) student at VIT Chennai with a focus on applied machine learning, computer vision, and data-driven product engineering.",
    "I've shipped predictive ML systems, real-time computer vision pipelines, NLP analyzers, and full-stack analytics platforms — all the way from research to deployable interfaces.",
    "Previously worked at ISNIA Technologies on enterprise master data workflows and at Skillumni on applied data science training. AWS Certified Solutions Architect, 200+ LeetCode problems solved, and an active hackathon contributor. Now looking for opportunities where data and intelligence intersect at scale.",
  ],
};

export const stats = [
  { label: "Projects Shipped", value: "4+" },
  { label: "LeetCode Problems", value: "200+" },
  { label: "Model Accuracy", value: "93%" },
  { label: "Certifications", value: "3" },
];

export const projects = [
  {
    id: "netflixAnalytics",
    title: "Netflix Analytics & Recommendation Platform",
    year: "2026",
    featured: true,
    tagline: "ETL pipelines + Power BI insight engine",
    description:
      "Engineered Python ETL pipelines processing 50,000+ records and built advanced SQL analytics layers to surface recommendation, churn, engagement, and revenue insights. Delivered through interactive Power BI dashboards, cutting manual analysis time by 70%.",
    stack: ["Python", "PostgreSQL", "SQL", "Power BI"],
    metrics: ["50k+ records processed", "70% less manual analysis time", "4 dashboard modules"],
    github: "https://github.com/shenal19/Netflix-Analytics-Platform",
    category: "Data Analytics",
  },
  {
    id: "bugPrediction",
    title: "Software Bug Prediction System",
    year: "2025",
    featured: true,
    tagline: "RandomForest fault-prone module classifier",
    description:
      "Built a machine learning-based software defect prediction system using Random Forest and software code metrics. Achieved 93% prediction accuracy and 86% bug-type classification accuracy, deployed via an interactive Streamlit dashboard for real-time analysis.",
    stack: ["Python", "Scikit-learn", "RandomForest", "Streamlit"],
    metrics: ["93% prediction accuracy", "86% bug-type classification", "Interactive dashboard"],
    github: "https://github.com/shenal19/Bug-Prediction",
    category: "ML Research",
  },
  {
    id: "cricketTracking",
    title: "Cricket Ball Tracking System",
    year: "2025",
    featured: true,
    tagline: "Real-time CV tracking with YOLOv8",
    description:
      "Developed a real-time computer vision system using OpenCV for cricket ball detection and motion tracking, improving sports analytics and visualization through frame-level object detection.",
    stack: ["Python", "OpenCV", "YOLOv8", "Computer Vision"],
    metrics: ["Real-time detection", "Frame-level tracking", "Sports analytics use case"],
    github: "https://github.com/shenal19/Cricket-Ball-Tracking",
    category: "Computer Vision",
  },
  {
    id: "agreeWise",
    title: "AgreeWise — T&C Analyzer",
    year: "2025",
    featured: false,
    tagline: "NLP engine for legal document transparency",
    description:
      "Built an NLP-powered legal document analyzer using spaCy to automate clause extraction and generate transparency scoring for simplified Terms & Conditions analysis.",
    stack: ["Python", "spaCy", "NLP"],
    metrics: ["Automated clause extraction", "Transparency scoring", "spaCy pipeline"],
    github: "https://github.com/shenal19/T-C-SUMMARIZER",
    category: "NLP",
  },
];

export const experience = [
  {
    company: "Skillumni",
    role: "Data Science with Python Trainee",
    period: "Mar 2026 – May 2026",
    location: "Remote, India",
    type: "internship",
    points: [
      "Performed data preprocessing, exploratory data analysis (EDA), and feature engineering using Python libraries to derive meaningful insights from datasets.",
      "Completed project-based training across Python, SQL, data analysis, and machine learning, culminating in a built SQL project.",
    ],
  },
  {
    company: "ISNIA Technologies",
    role: "STEP Master Data Management Intern",
    period: "Jun 2025 – Jul 2025",
    location: "Coimbatore, TN",
    type: "internship",
    points: [
      "Managed enterprise master data workflows using Stibo STEP MDM with structured data validation and transformation processes.",
      "Assisted in maintaining master data integrity by identifying, validating, and resolving data inconsistencies across enterprise datasets.",
    ],
  },
  {
    company: "Music Club, VIT Chennai",
    role: "Operations Team Leader",
    period: "Jun 2024 – Aug 2025",
    location: "Chennai, TN",
    type: "extracurricular",
    points: [
      "Coordinated event operations, logistics, and cross-functional teams for club activities and cultural events.",
      "Managed planning and execution workflows while collaborating with multiple teams to ensure successful event delivery.",
    ],
  },
];

export const openSource = [
  {
    repo: "TourismWebApp",
    org: "vignsh7",
    url: "https://github.com/vignsh7/TourismWebApp",
    description:
      "Contributed to an AI-powered tourism booking platform built for Smart India Hackathon 2025. Maintained production deployment pipelines and trip planning workflows.",
    tags: ["Full-Stack", "SIH 2025", "Deployment"],
  },
  {
    repo: "GlitchCon 2025",
    org: "ECDS x VITAA",
    url: "https://github.com/shenal19",
    description:
      "Participated in a 24-hour hackathon hosted by ECDS and VITAA, building and shipping a working prototype under time constraints.",
    tags: ["Hackathon", "24hr Build", "Rapid Prototyping"],
  },
];

export const skills = {
  "Machine Learning & AI": [
    "Scikit-learn",
    "Random Forest",
    "Feature Engineering",
    "NLP (spaCy)",
    "YOLOv8",
    "Model Evaluation",
  ],
  "Languages": ["Python", "Java", "SQL", "R", "C++"],
  "Data & Databases": ["PostgreSQL", "MySQL", "Amazon DynamoDB", "Pandas", "NumPy"],
  "Cloud & Tools": ["AWS", "Oracle Cloud (OCI)", "Power BI", "Tableau", "Streamlit", "Git", "Linux"],
  "CS Foundations": ["DSA", "OOPs", "REST APIs", "DBMS", "Operating Systems", "Computer Networks", "DAA"],
};

export const certifications = [
  {
    title: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    badge: "AWS",
    color: "accent",
  },
  {
    title: "Oracle Cloud Infrastructure Generative AI Professional",
    issuer: "Oracle",
    badge: "OCI",
    color: "accent-2",
  },
  {
    title: "Data Science with Python",
    issuer: "IBM",
    badge: "IBM",
    color: "highlight",
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon 2025",
    description: "Contributed to an AI-Powered Tourism Platform as part of the official SIH 2025 contributor track.",
    icon: "trophy",
  },
  {
    title: "GlitchCon 2025",
    description: "Built and shipped a working prototype in a 24-hour hackathon hosted by ECDS and VITAA.",
    icon: "zap",
  },
  {
    title: "200+ LeetCode Problems",
    description: "Solved 200+ DSA problems on LeetCode with a current rating of 1450.",
    icon: "code",
  },
  {
    title: "State-Level Cricket",
    description: "Represented Dindigul district in TNCA, competing in District Round-Robin matches at U-14, U-16, and U-19 levels.",
    icon: "award",
  },
];

export const education = {
  degree: "B.Tech — CSE (Data Science)",
  school: "Vellore Institute of Technology, Chennai",
  period: "2023 – Present",
  cgpa: "7.87",
};
