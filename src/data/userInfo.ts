import { SocialLink, NavItem, Project, Education, Certification, Skill, Publication } from '../types';

export const USER_NAME = "Udhayakumar K";
export const USER_ROLE = "AI & Machine Learning Student";
export const USER_BIO = "Final year engineering student specializing in Artificial Intelligence and Machine Learning with experience in web development, mobile applications, and IoT projects.";

export const CONTACT_INFO = {
  email: "udhayakumark3005@gmail.com",
  phone: "8807619161",
  location: "Tamil Nadu, India",
  github: "github.com/udhayakumar",
  linkedin: "linkedin.com/in/udhayakumar"
};

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: "Home"
  },
  {
    title: "About",
    path: "/about",
    icon: "User"
  },
  {
    title: "Resume",
    path: "/resume",
    icon: "FileText"
  },
  {
    title: "Projects",
    path: "/projects",
    icon: "Briefcase"
  },
  {
    title: "Publications",
    path: "/publications",
    icon: "Layers"
  },
  {
    title: "Contact",
    path: "/contact",
    icon: "Mail"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: "Github",
    url: "https://github.com/Udhayakumar2511"
  },
  {
    icon: "Linkedin",
    url: "https://linkedin.com/in/udhayakumar"
  },
  {
    icon: "Mail",
    url: "mailto:udhayakumark3005@gmail.com"
  },
  {
    icon: "Twitter",
    url: "https://twitter.com/udhayakumar"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.E. in Artificial Intelligence and Machine Learning",
    institution: "M.Kumarasamy College of Engineering",
    period: "2022 - 2026",
    description: "Studying core AI concepts, machine learning algorithms, and their applications in solving real-world problems.",
    gpa: "7.4/10.0"
  },
  {
    degree: "High School",
    institution: "Shankar Ponnar Hr Sec School",
    period: "Graduated 2022",
    description: "Completed high school with focus on mathematics and computer science.",
    gpa: "84.9%"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Foundation of Cloud IOT Edge ML",
    issuer: "NPTEL",
    date: "2023"
  },
  {
    name: "RPA Developer Foundation",
    issuer: "Nasscom",
    date: "2024"
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Languages",
    items: ["C++", "Python", "Java", "JavaScript", "HTML/CSS"]
  },
  {
    category: "Frameworks",
    items: ["React", "Node.js", "JUnit", "TensorFlow"]
  },
  {
    category: "Tools",
    items: ["Git/GitHub", "VS Code", "Arduino IDE"]
  },
  {
    category: "Libraries",
    items: ["pandas", "NumPy", "Matplotlib", "ScikitLearn"]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-1",
    title: "Machine Learning Approaches for Smart Waste Management: A Comprehensive Review",
    authors: ["Udhayakumar K", "Dr. Rajesh Kumar", "Dr. Priya S"],
    journal: "International Journal of Environmental Technology and Management",
    year: "2023",
    volume: "Vol. 16, Issue 3",
    pages: "145-168",
    doi: "10.1109/JTEHM.2023.1234567",
    abstract: "This paper provides a comprehensive review of machine learning techniques applied to smart waste management systems, analyzing the effectiveness of various algorithms in waste classification and processing optimization.",
    keywords: ["Machine Learning", "Waste Management", "Smart Cities", "Image Classification"],
    image: "/images/smartbin pub.jpeg",
    url: "https://example.com/publication1"
  },
  {
    id: "pub-2",
    title: "AR-based Indoor Navigation Systems: Current Challenges and Future Directions",
    authors: ["Dr. Meena Prakash", "Udhayakumar K", "Karthik Rajan"],
    journal: "IEEE Transactions on Visualization and Computer Graphics",
    year: "2024",
    volume: "Vol. 30, Issue 1",
    pages: "78-92",
    doi: "10.1109/TVCG.2024.3456789",
    abstract: "This research explores the challenges in implementing augmented reality for indoor navigation, focusing on accuracy, user experience, and practical implementation constraints in high-traffic environments like railway stations.",
    keywords: ["Augmented Reality", "Indoor Navigation", "Computer Vision", "Mobile Computing"],
    image: "/images/arpub.jpeg",
    url: "https://example.com/publication2"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "ConvertHub",
    description: "AI-based web platform integrating code conversion, grammar checking, translation, and summarization modules. Built with React and Gemini API, providing a unified interface for multiple intelligent services.",
    category: "Web Development",
    image: "/images/convert hub.jpg",
    technologies: ["React", "Gemini API", "JavaScript", "AI Integration"],
    githubUrl: "https://github.com/Udhayakumar2511/BOTHUB-integration-of-AI-tools-in-file-format-conversion-"
  },
  {
    id: "project-2",
    title: "NavTech",
    description: "Indoor navigation mobile application developed for Smart India Hackathon using AR technology, providing real-time guidance within railway stations.",
    category: "Mobile App",
    image: "/images/arnav.jpeg",
    technologies: ["Unity", "AR Core", "3D Modeling"],
    githubUrl: "https://github.com/Udhayakumar2511/AR-based-Navigation-system-"
  },
  {
    id: "project-3",
    title: "SmartBin",
    description: "AI-based waste classification system using TensorFlow and OpenCV, ensuring efficient waste management with notification and monitoring system.",
    category: "IoT",
    image: "/images/smartbin.jpeg",
    technologies: ["TensorFlow", "OpenCV", "Arduino"],
    githubUrl: "https://github.com/Udhayakumar2511"
  },
  {
    id: "project-4",
    title: "Aqua-smart",
    description: "Smart irrigation system that automates irrigation by detecting rain and soil moisture, conserving water and enhancing agricultural efficiency.",
    category: "IoT",
    image: "/images/aqua.jpeg",
    technologies: ["Arduino", "React", "IoT Sensors"],
    githubUrl: "https://github.com/Udhayakumar2511/Aqua-tech"
  },
  {
    id: "project-5",
    title: "BotHub",
    description: "A web application that integrates an AI tool for automated document conversion and API interaction.",
    category: "Web Development",
    image: "/images/bothub.png",
    technologies: ["HTML", "CSS", "Javacript","PHP","Python","MySQL"],
    githubUrl: "https://github.com/Udhayakumar2511/Aqua-tech"
  }
];