// Dhirendra Jha Portfolio Data
export const basics = {
  name: "Dhirendra Jha",
  firstName: "Dhirendra",
  headline: "Senior Software Engineer · Distributed Backend Systems & Automation Platforms",
  location: "Bangalore, India",
  email: "djha5051@gmail.com",
  phone: "+91 88507 76289",
  avatar: "/images/profile.jpg",
  resume: "/CV_Dhirendra.pdf",
  socials: {
    github: "https://github.com/dhirendraj-cmd",
    linkedin: "https://www.linkedin.com/in/djha21/",
    twitter: "https://x.com/cmd_dj221",
    website: "",
  },
  githubUser: "dhirendraj-cmd",
};

export const aboutParagraphs = [
  "I am a Senior Software Engineer with over eight years of experience building scalable backend systems, automation platforms, and distributed applications. My expertise spans Python, Django, FastAPI, and Go, with a strong focus on performance optimization, distributed task processing, and offline-first architectures.",
  "Throughout my career, I have developed enterprise automation solutions, optimized large-scale data workflows, and built educational platforms serving thousands of users. I enjoy designing software that is reliable, maintainable, and focused on solving real-world business problems."
];

export const quote = {
  text: "A distributed system is one in which the failure of a computer you didn't even know existed can render your own computer unusable.",
  author: "Leslie Lamport",
};

export const allProjects = [
  {
    name: "Distributed SonarQube Issue Collector",
    tag: "Enterprise Automation Platform · EY GDS",
    description: "Designed and developed an enterprise application using Python, Tkinter, Celery, and Redis to automate SonarQube issue collection across multiple portfolios, generating real-time comparison reports to streamline release quality analysis and reduce manual effort.",
    details: "Designed using Celery distributed task queues for parallel collection across portfolio metrics. Integrated SQLite to persist execution history and developed a Tkinter-based desktop interface to trigger reports dynamically, saving hours of manual Excel compilation weekly.",
    live_url: null,
    repo_url: null,
    image: "/assets/projects/sonarqube.png",
    tech: ["Python", "Django", "Celery", "Redis", "SQLite"],
    featured: true,
  },
  {
    name: "Offline Content Serving Mechanism Platform",
    tag: "Offline Learning Management System · Pratham Education Foundation",
    description: "Built and deployed an offline-first Learning Management System using Python, Django, and Raspberry Pi to deliver educational content in rural areas without internet connectivity, serving 10,000+ rural students and improving academic performance by 50%.",
    details: "Implemented an offline-first video caching policy for offline school servers. Custom FFmpeg shell wrappers automatically transcoded and compressed diverse media uploads into bandwidth-optimized formats, ensuring smooth local network serving without active internet connection.",
    live_url: null,
    repo_url: null,
    image: "/assets/projects/offline-lms.png",
    tech: ["Python", "Django", "Raspberry Pi", "SQLite", "FFmpeg"],
    featured: true,
  },
  {
    name: "LAC Rebuild",
    tag: "Multi-Tenant Assessment Platform · Konsultera Solutions",
    description: "Designed a scalable multi-tenant educational platform using Django and PostgreSQL that enabled multiple institutions to manage students and content independently, improving complex database ORM query operations by over 700x (reducing execution time from 1 hour to 5 seconds).",
    details: "Optimized complex student enrollment queries by replacing loop-based checks with pre-fetched select_related and prefetch_related structures. Configured multi-tenant database partitioning strategies, which slashed report computation times from 1 hour to 5 seconds.",
    live_url: null,
    repo_url: null,
    image: "/assets/projects/lac-rebuild.png",
    tech: ["Python", "Django", "PostgreSQL", "PynamoDB", "JavaScript"],
    featured: true,
  },
  {
    name: "AES Cash Processing",
    tag: "Enterprise Financial Automation · TCS",
    description: "Developed a Django-based web application integrating Pandas and OpenPyXL to automate Excel data processing workflows for cash processing operations, reducing manual effort by approximately 80% while significantly improving processing accuracy.",
    details: "Engineered high-throughput financial Excel parsing modules using Pandas dataframes and OpenPyXL utilities. Deployed ledger validation checkers that flag mismatched values in real-time, decreasing human audit workloads by 80%.",
    live_url: null,
    repo_url: null,
    image: "/assets/projects/cash-processing.png",
    tech: ["Python", "Django", "Pandas", "PostgreSQL", "OpenPyXL"],
    featured: false,
  },
  {
    name: "Risk Tech Analysis",
    tag: "Enterprise Data Automation · Accenture",
    description: "Built enterprise data automation solutions using Python, Pandas, and PySpark to compare large financial datasets, validate risk model outputs, and automate Azure environment provisioning, reducing environment setup times from several hours to minutes.",
    details: "Utilized PySpark and Pandas for large-scale risk validation, comparing legacy ledger records against cloud data stores. Developed automation scripts using Azure CLI to provision secure testing environments and provision dataset indexes in under three minutes.",
    live_url: null,
    repo_url: null,
    image: "/assets/projects/risk-tech.png",
    tech: ["Python", "Pandas", "PySpark", "Azure CLI", "GitLab"],
    featured: false,
  },
  {
    name: "TTLYD – Concurrent In-Memory TTL Cache Server",
    tag: "Systems Programming · Personal Project",
    description: "Built a concurrent, thread-safe in-memory TTL (Time-To-Live) cache server in Go with doubly linked lists, min-heaps, and background eviction workers, exposed as an HTTP service for network-accessible caching.",
    details: "Implemented concurrent, thread-safe access utilizing sync.RWMutex lock splitting. Designed a custom min-heap eviction queue to automatically remove expired keys in background goroutine worker channels.",
    live_url: null,
    repo_url: null,
    image: "/assets/projects/ttlyd.png",
    tech: ["Go", "Goroutines", "RWMutex", "HTTP API", "Min Heap"],
    featured: false,
  },
  {
    name: "LRU Cache",
    tag: "Data Structures · Personal Project",
    description: "Implemented a thread-safe O(1) Least Recently Used cache library in Go using a combination of hash maps, doubly linked lists, and RWMutex synchronization to achieve constant-time operations.",
    details: "Coded a generic thread-safe O(1) cache library in Go. Leveraged a hash map for constant-time key lookups and a doubly linked list to track item recency and eviction ordering.",
    live_url: null,
    repo_url: null,
    image: "/assets/projects/lru-cache.png",
    tech: ["Go", "RWMutex", "Doubly Linked List", "Hash Map"],
    featured: false,
  },
];

export const experienceList = [
  {
    role: "Senior Consultant 2",
    company: "EY GDS, Bangalore",
    date: "September 2025 - Present",
    highlights: [
      "Designed and developed a Python/Tkinter desktop application to automate SonarQube issue collection and generate real-time comparison reports across multiple portfolios, streamlining release quality analysis.",
      "Currently designing and implementing a Django-based web version using Celery, Redis, and SQLite to support asynchronous report generation and historical report management.",
      "Built the initial backend architecture for report generation and data persistence, with ongoing work on distributed task processing and interactive dashboards."
    ],
  },
  {
    role: "Application Developer Team Lead",
    company: "Accenture Solutions Pvt Ltd, Pune",
    date: "August 2024 - August 2025",
    highlights: [
      "Designed and implemented Python automation scripts to compare large datasets, calculate percentage differences, and validate risk model outputs, improving data consistency.",
      "Automated dataset and lens provisioning using Azure CLI, reducing environment setup time from several hours to a few minutes and minimizing manual effort.",
      "Tech Stack: Python, Pandas, PySpark, GitLab."
    ],
  },
  {
    role: "I.T. Analyst",
    company: "Tata Consultancy Services, Mumbai",
    date: "August 2022 - July 2024",
    highlights: [
      "Developed a Django web application using Python, Pandas, and OpenPyXL to automate Excel data processing workflows, eliminating repetitive manual tasks and improving processing accuracy.",
      "Implemented automated Excel data comparison and validation features using Pandas, reducing manual effort by 80% and accelerating report generation.",
      "Tech Stack: Python, Django, Pandas, PostgreSQL, Git, GitHub."
    ],
  },
  {
    role: "Software Engineer",
    company: "Pratham Education Foundation, Mumbai",
    date: "July 2021 - July 2022",
    highlights: [
      "Built and deployed a low-power Learning Management System (LMS) using Python, Django, and Raspberry Pi, enabling offline content delivery in rural schools and supporting 10,000+ students.",
      "Improved student academic performance by 50% through an offline-first digital learning platform optimized for low-resource environments.",
      "Built a Python-based media conversion pipeline using FFmpeg to automatically transcode diverse video and audio formats into standardized MP4 and MP3 outputs.",
      "Tech Stack: Python, Django, Django REST Framework, Raspberry Pi, Shell Scripting, Git, JavaScript, jQuery, SQLite3."
    ],
  },
  {
    role: "Software Developer",
    company: "Konsultera Solutions Pvt Ltd, Mumbai",
    date: "December 2020 - June 2021",
    highlights: [
      "Designed and implemented a scalable multi-tenant Django architecture for the LAC Rebuild platform, allowing multiple educational institutions to manage students and learning content independently.",
      "Optimized complex database queries using Django ORM subqueries, improving data processing performance by over 700x (from 1 hour to 5 seconds).",
      "Tech Stack: Python, Django, PostgreSQL, PynamoDB, JavaScript, jQuery."
    ],
  },
  {
    role: "Software Developer",
    company: "Pratham Education Foundation, Mumbai",
    date: "March 2018 - December 2020",
    highlights: [
      "Developed multiple solutions for offline education using Raspberry Pi and LMS integration, creating a desktop-based application to work in correspondence to handle data from the Kolibri platform.",
      "Created and configured Raspberry Pi as a standalone server to deliver Kolibri content and provide offline internet access in rural areas of India.",
      "Tech Stack: Django, Django REST Framework, JavaScript, SQLite3, Raspberry Pi, Linux, Shell Scripting, Git, GitHub, Raspbian OS."
    ],
  },
  {
    role: "Intern - Python/Django Developer",
    company: "Insomniacs",
    date: "December 2017 - February 2018",
    highlights: [
      "Developed backend APIs and integrated web services using Python and Django.",
      "Collaborated with the frontend engineering team to assist with API integration and data model rendering."
    ],
  },
];

export const educationList = [
  {
    degree: "Bachelor of Engineering (Information Technology)",
    school: "Shree L.R. Tiwari College of Engineering, Mumbai",
    date: "2012 - 2016",
    grade: "CGPA: 6.47",
  }
];

export const skillGroups = [
  {
    category: "Backend",
    items: ["Python", "Django", "Django REST Framework", "FastAPI", "Go / Golang"],
  },
  {
    category: "Frontend",
    items: ["JavaScript"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "SQLite / SQLite3", "PynamoDB"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub", "GitLab", "Docker", "AWS EC2", "Azure CLI"],
  },
  {
    category: "Others",
    items: ["Raspberry Pi", "Pandas", "PySpark", "Shell Scripting", "FFmpeg", "Kolibri", "Linux", "Raspbian OS"],
  },
];
