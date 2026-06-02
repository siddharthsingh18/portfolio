import { FaEnvelope, FaInstagram, FaPhone } from "react-icons/fa";
import {
  RxGithubLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Python",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "C++",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React.js",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const TECH_GROUPS = [
  {
    title: "Programming",
    detail:
      "Core problem-solving and implementation languages used across coursework, projects, and DSA practice.",
    items: ["Python", "C++", "JavaScript"],
  },
  {
    title: "AI / ML",
    detail:
      "Modeling, evaluation, and applied intelligence for forecasting, NLP, computer vision, and data-driven products.",
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "OpenCV",
    ],
  },
  {
    title: "AI Agents & LLMs",
    detail:
      "Agentic workflows and retrieval systems for practical AI applications that can reason over external context.",
    items: [
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "Prompt Engineering",
      "OpenAI API",
      "Hugging Face",
    ],
  },
  {
    title: "Data, Web & Tools",
    detail:
      "The supporting stack for cleaning data, building dashboards, serving APIs, and shipping usable interfaces.",
    items: [
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "MySQL",
      "MongoDB",
      "React.js",
      "Node.js",
      "Flask",
      "FastAPI",
      "Git",
      "Jupyter",
    ],
  },
] as const;

export const PROFILE_HIGHLIGHTS = [
  {
    value: "200+",
    label: "DSA problems solved",
    detail: "Steady competitive-programming practice with an algorithms-first foundation.",
  },
  {
    value: "4",
    label: "Featured AI projects",
    detail: "Insurance NLP, demand forecasting, runoff prediction, and sustainability analytics.",
  },
  {
    value: "250K+",
    label: "Content views",
    detail: "Built audience momentum around gym, badminton, and AI/ML content.",
  },
  {
    value: "Top 10%",
    label: "Academic standing",
    detail: "Consistent performance across the B.Tech Computer Science program.",
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Website Development & Digital Media Intern",
    org: "Lois Consultancy",
    period: "Jun 2026 - Jul 2026",
    detail:
      "Debugged and maintained digital platforms, deployed HTML/CSS web pages, and supported social media branding initiatives.",
  },
  {
    role: "Content Creator",
    org: "Self Employed",
    period: "Jan 2026 - Present",
    detail:
      "Built a personal brand around gym, badminton, and AI/ML content, reaching 250K+ views in the first month and securing a paid brand deal with Vyra.",
  },
  {
    role: "Chief Marketing Officer",
    org: "Abyss Studios",
    period: "Oct 2024 - Dec 2024",
    detail:
      "Designed end-to-end marketing strategies and used data insights to optimize content, targeting, and early-stage user growth.",
  },
  {
    role: "Social Media Team",
    org: "Solace Studios, College Club",
    period: "Sep 2024 - May 2025",
    detail:
      "Managed social platforms and content strategy to improve club visibility and audience interaction.",
  },
] as const;

export const ACHIEVEMENTS = [
  "Solved 200+ competitive programming problems.",
  "Finalist in Hackaccino among 200+ teams.",
  "Consistently ranked in the top 10% of the batch.",
  "University-level Badminton medalist and active university team member.",
] as const;

export const EDUCATION_TIMELINE = [
  {
    institution: "Bennett University, Greater Noida",
    title: "B.Tech in Computer Science",
    period: "Aug 2024 - May 2028 (Expected)",
    detail: "Current CGPA: 8.47",
  },
  {
    institution: "Allen Career Institute, Kota",
    title: "JEE Preparation",
    period: "2022 - 2023",
    detail:
      "Completed two years of focused engineering entrance preparation in Kota.",
  },
  {
    institution: "Gyan Sthali Academy",
    title: "Schooling up to Class 12",
    period: "Completed in 2023",
    detail: "Studied at Gyan Sthali Academy through senior secondary school.",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "React.js",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/siddharthsingh18",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/siddharth-singh-572b84319/",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    link: "mailto:siddharthsingh23122005@gmail.com",
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "FastAPI",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Flask",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Git",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Jupyter Notebook",
    image: "figma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "OpenAI API",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "VS Code",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
] as const;

export const PROJECTS = [
  {
    title: "InsureAI",
    description:
      "AI-powered insurance analyzer using NLP to surface hidden clauses, present key coverage details, and recommend better-suited plans based on a user's profile.",
    image: "/projects/project-1.png",
    link: "https://github.com/siddharthsingh18/Insure.AI",
  },
  {
    title: "Smart Demand Forecasting & Shipment Delay Prediction",
    description:
      "ML models trained on supply chain data to forecast retail demand and predict shipment delays, deployed through a Uvicorn-based real-time dashboard.",
    image: "/projects/project-2.png",
    link: "https://github.com/siddharthsingh18/Smart-Demand-Forecasting-and-Shipment-Delay-Prediction",
  },
  {
    title: "AI ML Runoff Forecasting",
    description:
      "Machine learning pipeline for water runoff prediction using rainfall data preprocessing and predictive modeling for environmental planning.",
    image: "/projects/project-3.png",
    link: "https://github.com/siddharthsingh18/Runoff-Prediction-for-Flood-Forecasting-AI-ML",
  },
  {
    title: "Palgreen",
    description:
      "Carbon and water footprint monitoring system that helps users evaluate environmental impact and act on sustainability insights.",
    image: "/projects/project-1.png",
    link: "https://github.com/siddharthsingh18/palgreen",
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: "Data Structures and Algorithm",
    pdf: "/certificates/Data%20Structures%20and%20Algorithm.pdf",
    image: "/certificates/thumbs/Data%20Structures%20and%20Algorithm.png",
  },
  {
    title: "Entrepreneurship Strategy From Ideation to Exit",
    pdf: "/certificates/Entrepreneurship%20Strategy%20From%20Ideation%20to%20Exit.pdf",
    image:
      "/certificates/thumbs/Entrepreneurship%20Strategy%20From%20Ideation%20to%20Exit.png",
  },
  {
    title: "Introduction to Automation Testing",
    pdf: "/certificates/Introduction%20to%20Automation%20Testing.pdf",
    image:
      "/certificates/thumbs/Introduction%20to%20Automation%20Testing.png",
  },
  {
    title: "Introduction to Microprocessors",
    pdf: "/certificates/Introduction%20to%20Microprocessors.pdf",
    image: "/certificates/thumbs/Introduction%20to%20Microprocessors.png",
  },
  {
    title: "Introduction to Performance Testing",
    pdf: "/certificates/Introduction%20to%20Performance%20testing.pdf",
    image:
      "/certificates/thumbs/Introduction%20to%20Performance%20testing.png",
  },
  {
    title: "Operating Systems Fundamentals",
    pdf: "/certificates/Operating%20Systems%20Fundamentals.pdf",
    image: "/certificates/thumbs/Operating%20Systems%20Fundamentals.png",
  },
  {
    title: "Test Design Technique",
    pdf: "/certificates/Test%20Design%20Technique.pdf",
    image: "/certificates/thumbs/Test%20Design%20Technique.png",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    pdf: "/certificates/The%20Bits%20and%20Bytes%20of%20computer%20networking.pdf",
    image:
      "/certificates/thumbs/The%20Bits%20and%20Bytes%20of%20computer%20networking.png",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Contact",
    data: [
      {
        name: "+91 8755366061",
        icon: FaPhone,
        link: "tel:+918755366061",
      },
      {
        name: "Personal Email",
        icon: FaEnvelope,
        link: "mailto:siddharthsingh23122005@gmail.com",
      },
    ],
  },
  {
    title: "Profiles",
    data: [
      {
        name: "Instagram",
        icon: FaInstagram,
        link: "https://instagram.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/siddharth-singh-572b84319/",
      },
    ],
  },
  {
    title: "More",
    data: [
      {
        name: "College Email",
        icon: FaEnvelope,
        link: "mailto:s24cseu0544@bennett.edu.in",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/siddharthsingh18",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Progress",
    link: "#progress",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Certifications",
    link: "#certifications",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  contact: "mailto:siddharthsingh23122005@gmail.com",
  github: "https://github.com/siddharthsingh18",
  linkedin: "https://www.linkedin.com/in/siddharth-singh-572b84319/",
};
