export const PORTFOLIO_DATA = {
  personal: {
    name: "L. Dileepa Anushan",
    shortName: "Dileepa Anushan",
    role: "Software Engineering Undergraduate | Software Engineer Intern",
    tagline: "I build software that solves real-world problems.",
    bio: "Software Engineering undergraduate at SLIIT and Software Engineer Intern passionate about building reliable, scalable, and user-focused software solutions. Experienced in full-stack web development, system design, cloud technologies, and AI integrations.",
    university: "SLIIT – BSc (Hons) in Software Engineering",
    status: "Open for Software Engineering Opportunities",
    email: "dileepaanushanlk@gmail.com",
    linkedin: "https://lk.linkedin.com/in/dileepa-anushan-10a449368",
    github: "https://github.com/dileepa-anushan",
    avatarUrl: "/IMG_0490.jpg", // Updated to your uploaded JPEG photo
    interests: [
      "Software Engineering",
      "Full-Stack Web Development",
      "System Design",
      "Cloud Technologies",
      "DevOps",
      "AI-Powered Applications"
    ]
  },
  
  aboutCards: [
    {
      title: "Education",
      subtitle: "SLIIT",
      desc: "BSc (Hons) in Software Engineering",
      icon: "GraduationCap"
    },
    {
      title: "Core Focus",
      subtitle: "Full-Stack Engineering",
      desc: "Java, Spring Boot, React, Node.js & C#",
      icon: "Code2"
    },
    {
      title: "Key Interests",
      subtitle: "Architecture & Cloud",
      desc: "System Design · Cloud · DevOps · AI",
      icon: "Cpu"
    },
    {
      title: "Status",
      subtitle: "Undergraduate / Intern",
      desc: "Software Engineer Intern",
      icon: "Briefcase"
    }
  ],

  skills: {
    frontend: [
      { name: "React.js", level: "Practical", icon: "Code" },
      { name: "TypeScript", level: "Practical", icon: "FileCode" },
      { name: "JavaScript", level: "Practical", icon: "FileCode" },
      { name: "Tailwind CSS", level: "Practical", icon: "Layers" },
      { name: "HTML5 & CSS3", level: "Practical", icon: "Layout" },
      { name: "Bootstrap", level: "Practical", icon: "Box" }
    ],
    backend: [
      { name: "Java", level: "Practical", icon: "Coffee" },
      { name: "Spring Boot", level: "Practical", icon: "Server" },
      { name: "Node.js", level: "Practical", icon: "Cpu" },
      { name: "Express.js", level: "Practical", icon: "Cpu" },
      { name: "C# / .NET", level: "Practical", icon: "Server" },
      { name: "REST APIs", level: "Practical", icon: "Globe" }
    ],
    databases: [
      { name: "MySQL", level: "Practical", icon: "Database" },
      { name: "SQL Server", level: "Practical", icon: "Database" },
      { name: "MongoDB Atlas", level: "Practical", icon: "Database" }
    ],
    cloudDevOps: [
      { name: "AWS", level: "Learning", icon: "Cloud" },
      { name: "Git", level: "Practical", icon: "GitBranch" },
      { name: "GitHub", level: "Practical", icon: "Github" },
      { name: "Vercel", level: "Practical", icon: "Cloud" },
      { name: "VS Code / IntelliJ", level: "Practical", icon: "Code" }
    ]
  },

  experience: [
    {
      position: "Software Engineer Intern",
      company: "[Internship Company]",
      duration: "2026",
      type: "Internship",
      description: "Working on modern full-stack web application development, backend services, database design, and automated features adhering to industry software engineering standards.",
      highlights: [
        "Contributing to full-stack web application development using modern frontend (React, Tailwind CSS) and backend technologies (Java, Spring Boot, Node.js).",
        "Developing and maintaining reliable software features, authentication modules, and RESTful API integrations.",
        "Working with relational (MySQL, SQL Server) and document (MongoDB) databases for optimized data storage.",
        "Utilizing Git and GitHub for clean version control, branch management, and collaborative peer reviews.",
        "Debugging, testing, and refining application functionality to enhance reliability and user experience."
      ],
      technologies: ["Java", "Spring Boot", "React.js", "Node.js", "REST APIs", "SQL", "MongoDB", "Git"]
    }
  ],

  projects: [
    {
      id: "sitenex",
      name: "SiteNex – Smart Construction Tracking System",
      shortDesc: "A full-stack construction project management web application designed to digitize paper workflows, track task progress, manage workers/resources, report site issues, and predict delays using ML.",
      contribution: "Task Progress Tracking Module & Front-End Development",
      contributionDetails: [
        "Requirement analysis and full-stack architecture design",
        "Task status tracking module (To-Do, In Progress, Completed, Delayed)",
        "Percentage completion metrics calculation and visual representation",
        "Progress timestamps, historical audit log, and daily site reporting",
        "Integration with ML-powered delay risk prediction service",
        "Role-based access control (RBAC) for project stakeholders"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Vercel", "Git"],
      githubUrl: "https://github.com/dileepa-anushan/Site-Nex",
      liveDemoUrl: null,
      featured: true,
      category: "Full-Stack Web App"
    },
    {
      id: "lanka-blood-link",
      name: "Lanka Blood Link – Blood Donation Platform",
      shortDesc: "A web-based blood donation management system connecting donors, blood banks, and healthcare requestors to facilitate urgent blood requests and donation tracking.",
      contribution: "Full-Stack Application & Deployment",
      contributionDetails: [
        "Interactive donor search and urgent blood request creation",
        "Real-time status updates for blood requests and donor availability",
        "Responsive user interface deployed on Vercel platform",
        "RESTful API design and database management"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Vercel", "Tailwind CSS"],
      githubUrl: "https://github.com/dileepa-anushan/Lanka-Blood-Link",
      liveDemoUrl: "https://lanka-blood-link-client.vercel.app/",
      featured: true,
      category: "Full-Stack Web App"
    },
    {
      id: "drivelk",
      name: "DriveLK – Vehicle Rental System",
      shortDesc: "A web-based vehicle rental management platform streamlining vehicle booking, fleet management, payment processing, driver assignment, and customer support tickets.",
      contribution: "Finance Module & Payment Verification",
      contributionDetails: [
        "Requirement gathering and finance module architecture",
        "Secure user authentication and role-based access control",
        "Bank slip upload interface and payment verification workflow",
        "Automated digital invoice generation and payment history logs",
        "Support ticket management system to improve operational efficiency"
      ],
      technologies: ["Java", "Spring Boot", "JSP", "HTML5", "CSS3", "JavaScript", "SQL Server"],
      githubUrl: "https://github.com/dileepa-anushan/Web-based-Vehicle-Rental-System",
      liveDemoUrl: null,
      featured: true,
      category: "Full-Stack Web App"
    },
    {
      id: "food-delivery",
      name: "Food Delivery Management System Mobile & Web App",
      shortDesc: "A full-stack food delivery platform featuring customer ordering interfaces and admin management dashboards, integrated with payment gateways and cloud image hosting.",
      contribution: "Full-Stack Application & Cloud Deployment",
      contributionDetails: [
        "React Native (Expo) mobile experience and web management portal",
        "JWT authentication, order placement, and live delivery status tracking",
        "Stripe payment gateway integration for secure transaction processing",
        "Cloudinary integration for product image hosting",
        "AWS Elastic Beanstalk backend cloud deployment"
      ],
      technologies: ["React Native (Expo)", "Node.js", "Express.js", "MongoDB", "AWS", "Vercel"],
      githubUrl: "https://github.com/dileepa-anushan/Food-Delivery-App",
      liveDemoUrl: null,
      featured: true,
      category: "Mobile & Web App"
    },
    {
      id: "grocery-management",
      name: "Grocery Management System",
      shortDesc: "A comprehensive grocery store management platform designed to digitize daily retail operations, inventory tracking, product cataloging, and online customer purchasing.",
      contribution: "UI & Backend Development",
      contributionDetails: [
        "Requirement gathering and UML system diagram modeling",
        "Product catalog management and shopping cart functionality",
        "Secure checkout, order processing, and payment handling logic",
        "Apache Tomcat server deployment and servlet backend architecture"
      ],
      technologies: ["Java", "Servlets", "JSP", "HTML5", "CSS3", "JavaScript", "Apache Tomcat"],
      githubUrl: "https://github.com/dileepa-anushan/Grocery-Management-System",
      liveDemoUrl: null,
      featured: false,
      category: "Web Application"
    },
    {
      id: "lk-auto-service",
      name: "LK Auto Service – Integrated Management & POS System",
      shortDesc: "A hybrid desktop and web application digitizing automotive service station operations, POS billing, inventory tracking, employee salary payouts, and operational expense analytics.",
      contribution: "Hybrid POS & Analytics System",
      contributionDetails: [
        "Designed Role-Based Access Control (RBAC) supporting POS billing",
        "HTML-based invoice printing and credit transaction tracking",
        "Goods Received Notes (GRN) and automotive inventory control",
        "Interactive analytics dashboards for operational expense monitoring"
      ],
      technologies: ["C# .NET", "Windows Forms", "React.js", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "https://github.com/dileepa-anushan",
      liveDemoUrl: null,
      featured: false,
      category: "Desktop & Web System"
    }
  ],

  education: [
    {
      degree: "BSc (Hons) in Software Engineering",
      institution: "SLIIT (Sri Lanka Institute of Information Technology)",
      period: "July 2024 - Present",
      description: "Pursuing a B.Sc. (Hons) specializing in Software Engineering. Comprehensive curriculum covering software development, database management systems, software testing, system design, and full-stack web application development.",
      current: true
    }
  ],

  certifications: [
    {
      title: "AWS Cloud Quest & Fundamentals Tracks",
      provider: "AWS Skill Builder",
      type: "Cloud Learning",
      status: "In Progress",
      description: "Active learning path exploring AWS cloud practitioner essentials, generative AI basics, Amazon Q Developer fundamentals, and AWS serverless concepts.",
      topics: ["Introduction to Generative AI", "AWS Cloud Practitioner Essentials", "Amazon Q Developer Fundamentals", "AWS Cloud Quest"],
      isCertification: false
    },
    {
      title: "Software Testing & QA Fundamentals",
      provider: "LinkedIn Learning",
      type: "Professional Development",
      status: "Completed",
      description: "Coursework covering software quality assurance principles, testing methodologies, and Playwright framework fundamentals.",
      topics: ["Software Testing", "Quality Assurance", "Playwright Automated Testing"],
      isCertification: false
    }
  ]
};
