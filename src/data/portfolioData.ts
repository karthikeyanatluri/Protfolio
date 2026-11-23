/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  PORTFOLIO DATA CONFIGURATION                                ║
 * ║  Karthikeyan Atluri – Aspiring Software Engineer             ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/* ───────────── 1. BASIC INFO ───────────── */
export const SITE = {
  name: 'Karthikeyan Atluri',
  displayName: 'KARTHIKEYAN ATLURI',
  pageTitle: 'Karthikeyan Atluri – Aspiring Software Engineer',
  role: 'Information Technology Engineering Student | Aspiring Software Engineer | AI & Cybersecurity Enthusiast',
  email: 'atlurikarthik2@gmail.com',
  // Digits only with country code for WhatsApp / Tel (e.g. 918331921553)
  phone: '918331921553',
  displayPhone: '+91 8331921553',
  location: 'Vijayawada, Andhra Pradesh, India',
  college: 'Siddhartha Academy of Higher Education, Vijayawada',
  degree: 'Bachelor of Technology (B.Tech)',
  branch: 'Information Technology',
  academicYear: 'Third Year',
  expectedGraduation: '2027',
  cgpa: '8.0/10',
  whatsappMessage: 'Hi Karthikeyan, I visited your portfolio and would like to connect.',
  github: 'https://github.com/karthikeyanatluri',
  linkedin: 'https://www.linkedin.com/in/karthikeyan-atluri-604ba9315/',
  available: true,
};

/* ───────────── 2. HERO (top of page) ───────────── */
export const HERO = {
  eyebrow: 'BUILDING IDEAS INTO TECHNOLOGY.',
  headline: 'KARTHIKEYAN ATLURI',
  roles: [
    'Engineering Student',
    'Aspiring Software Engineer',
    'AI & Cybersecurity Enthusiast',
  ] as [string, string, ...string[]],
  tagline: 'Exploring technology, building meaningful solutions, and continuously learning to create a better digital future.',
  primaryButton: 'Explore My Work',
  secondaryButton: 'Get In Touch',
  image: '/assets/hero-red-bg.jpg', // 1920x1080 cinematic portrait, subject on the RIGHT third
  imageAlt: 'Portrait of Karthikeyan Atluri',
  imagePosition: '72% center', // CSS object-position fallback
};

/* ───────────── 3. LOADING SCREEN ───────────── */
export const LOADER = {
  statement: 'BUILDING IDEAS INTO TECHNOLOGY, EXPLORING INTELLIGENCE, AND SECURING THE DIGITAL FUTURE.',
  redWords: ['BUILDING', 'INTELLIGENCE', 'SECURING', 'INTELLIGENCE,'],
};

/* ───────────── 4. ABOUT ───────────── */
export interface FocusArea {
  title: string;
  description: string;
}

export const ABOUT = {
  eyebrow: 'Aspiring Software Engineer · AI & Emerging Tech · Leadership',
  portrait: '/media/profile.webp', // 4:5 vertical portrait photo
  portraitAlt: 'Portrait of Karthikeyan Atluri',
  portraitCaption: 'Aspiring Software Engineer',
  paragraphs: [
    'I am Karthikeyan Atluri, an Information Technology undergraduate at Siddhartha Academy of Higher Education, passionate about software engineering, artificial intelligence, and cybersecurity.',
    'I focus on building practical applications, exploring intelligent systems, and learning secure digital infrastructure while continuously expanding my technical problem-solving skills.',
  ],
  technologies: [
    'Python',
    'Java',
    'C++',
    'SQL',
    'React',
    'JavaScript',
    'C#',
    '.NET',
    'Entity Framework Core',
    'Docker',
    'Git',
    'TensorFlow Lite',
  ],
  focus: [
    {
      title: 'SOFTWARE ENGINEERING & FULL-STACK DEVELOPMENT',
      description:
        'Building scalable web applications, robust backends, and modern software architectures.',
    },
    {
      title: 'ARTIFICIAL INTELLIGENCE & MACHINE LEARNING',
      description:
        'Developing intelligent models, computer vision applications, and practical AI solutions.',
    },
    {
      title: 'CYBERSECURITY & INFORMATION SECURITY',
      description:
        'Understanding system vulnerabilities, network defense, and secure coding practices.',
    },
  ] as (string | FocusArea)[],
};

/* ───────────── 4b. EDUCATION ───────────── */
export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  score: string;
  location?: string;
}

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Siddhartha Academy of Higher Education',
    degree: 'B.Tech – Information Technology (Third Year)',
    period: 'Expected Graduation: 2027',
    score: 'CGPA: 8.0 / 10',
    location: 'Vijayawada, Andhra Pradesh, India',
  },
  {
    institution: 'Narayana Junior College',
    degree: 'Intermediate – MPC',
    period: '2023',
    score: 'Score: 785 / 1000',
    location: 'Andhra Pradesh, India',
  },
];

/* ───────────── 4c. EXPERIENCE & LEADERSHIP ───────────── */
export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Secretary',
    organization: 'WiCyS (Women in Cybersecurity), Student Chapter',
    period: 'August 2026 – Present',
    description: 'Cybersecurity community participation, student engagement, technical workshops, and chapter leadership.',
  },
  {
    role: 'Zonal Head',
    organization: 'VYNEDAM',
    period: 'June 2026 – Present',
    description: 'Leadership, regional coordination, event management, and organizational responsibilities across chapters.',
  },
  {
    role: 'Student Ambassador / Campus Lead',
    organization: 'Student Tribe',
    period: 'December 2024 – Present',
    description: 'Campus leadership, student engagement, ambassador recruitment, community initiatives, and technology events.',
  },
  {
    role: 'Volunteer',
    organization: 'Make A Difference (MAD)',
    period: 'Community Service',
    description: 'Community outreach, youth education support, social impact initiatives, and mentorship.',
  },
  {
    role: 'YIIP 2.0 Ex-Intern',
    organization: 'Scalar',
    period: 'Internship',
    description: 'Industry immersion, foundational problem-solving, algorithmic thinking, and professional development.',
  },
];

/* ───────────── 4d. CERTIFICATIONS & PROFESSIONAL LEARNING ───────────── */
export type CertificationCategory =
  | 'CYBERSECURITY'
  | 'PROGRAMMING'
  | 'ARTIFICIAL INTELLIGENCE'
  | 'BUSINESS & ENTREPRENEURSHIP'
  | 'DESIGN & CREATIVE TOOLS';

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  credentialId?: string;
  credentialType?: string;
  score?: string;
  duration?: string;
  category: CertificationCategory;
  description: string;
  skills: string[];
  detail?: string;
  url?: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cba-cyber',
    title: 'Commonwealth Bank – Introduction to Cybersecurity Job Simulation',
    issuer: 'Forage (Commonwealth Bank)',
    issueDate: 'November 2025',
    credentialId: 'YoEWCiTiMp472fH5k',
    credentialType: 'Job Simulation',
    category: 'CYBERSECURITY',
    description:
      'Completed a cybersecurity job simulation offered through Forage, gaining exposure to cybersecurity-related professional tasks and practical security concepts.',
    skills: ['Cybersecurity', 'Information Security', 'Security Fundamentals'],
    detail: 'Cybersecurity job simulation · Practical security concepts & enterprise risk tasks',
  },
  {
    id: 'deloitte-cyber',
    title: 'Deloitte Australia – Cyber Job Simulation',
    issuer: 'Forage (Deloitte Australia)',
    issueDate: 'October 2025',
    credentialId: 'nBoepEQPgDoQKis9S',
    credentialType: 'Job Simulation',
    category: 'CYBERSECURITY',
    description:
      "Completed Deloitte Australia's Cyber Job Simulation through Forage, gaining exposure to cybersecurity consulting activities and practical cyber-related challenges.",
    skills: ['Cybersecurity', 'Cyber Risk', 'Security Analysis'],
    detail: 'Cybersecurity consulting job simulation · Cyber risk analysis & mitigation exercises',
  },
  {
    id: 'hackerrank-python',
    title: 'Python Certification',
    issuer: 'HackerRank',
    issueDate: 'July 2025',
    credentialType: 'Python Basic',
    category: 'PROGRAMMING',
    description:
      "Successfully completed HackerRank's Python certification, demonstrating foundational knowledge of Python programming and problem-solving.",
    skills: ['Python', 'Programming', 'Problem Solving'],
    detail: 'Verified Python Basic certification · Algorithmic logic & syntax fundamentals',
  },
  {
    id: 'google-genai',
    title: "Google's Generative AI Course",
    issuer: 'L4G',
    issueDate: 'January 2026',
    credentialType: "Google's GenAI Course!",
    category: 'ARTIFICIAL INTELLIGENCE',
    description:
      'Completed a learning programme focused on Generative AI concepts and their practical applications.',
    skills: ['Generative AI', 'Artificial Intelligence'],
    detail: 'Generative AI concepts, prompt engineering & practical modern AI workflows',
  },
  {
    id: 'freedom-ai',
    title: 'Freedom With AI Masterclass',
    issuer: 'Freedom With AI',
    issueDate: 'September 2024',
    credentialType: 'Certificate of Achievement – Freedom With AI Masterclass',
    category: 'ARTIFICIAL INTELLIGENCE',
    description:
      'Completed the Freedom With AI Masterclass, gaining exposure to AI strategy and the use of artificial intelligence in practical contexts.',
    skills: ['AI Strategy', 'Artificial Intelligence'],
    detail: 'AI strategy masterclass · Practical AI application frameworks and tools',
  },
  {
    id: 'saylor-business-law',
    title: 'Business Law and Entrepreneurship',
    issuer: 'Saylor University (Saylor Academy)',
    issueDate: 'July 2026',
    credentialId: '7825178674AC',
    score: 'Final Score: 94.87%',
    duration: '10-week course completed over 12 weeks (31 hours)',
    category: 'BUSINESS & ENTREPRENEURSHIP',
    description:
      'Successfully completed BUS651: Business Law and Entrepreneurship with a score of 94.87%. Developed knowledge of business law, contracts, entrepreneurship, business structures, taxation, risk management, e-commerce, intellectual property, and consumer protection.',
    skills: ['Business Law', 'Entrepreneurship', 'Contract Fundamentals', 'Risk Management', 'Intellectual Property'],
    detail: 'BUS651 · Score: 94.87% · Contracts, IP, corporate structure & risk management',
  },
  {
    id: 'scaler-innovator',
    title: 'Young Innovator',
    issuer: 'Scaler',
    issueDate: 'October 2024',
    credentialType: 'Young Innovator',
    category: 'BUSINESS & ENTREPRENEURSHIP',
    description: 'Recognized through the Scaler Young Innovator programme.',
    skills: ['Innovation', 'Leadership', 'Problem Solving'],
    detail: 'Scaler Young Innovator recognition · Product thinking & technical innovation',
  },
  {
    id: 'canva-beginner',
    title: 'Canva Beginner',
    issuer: 'SkillUp Program',
    credentialType: 'Canva Beginner',
    category: 'DESIGN & CREATIVE TOOLS',
    description:
      'Completed beginner-level learning in Canva, developing foundational skills in graphic design and visual content creation.',
    skills: ['Canva', 'Image Editing', 'Graphic Design'],
    detail: 'Foundational graphic design, visual composition & content creation',
  },
];

/* ───────────── 5. SOCIAL LINKS (footer) ───────────── */
export const SOCIALS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/karthikeyanatluri' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/karthikeyan-atluri-604ba9315/' },
] as const;

/* ───────────── 6. TECHNICAL SKILLS (6 balanced cards) ───────────── */
export const SKILL_CARDS: { name: string; category: string; level: string }[] = [
  {
    name: 'Programming Languages',
    category: 'Python · Java · C · C++ · SQL',
    level: 'Proficient',
  },
  {
    name: 'Web Development',
    category: 'React · JavaScript · HTML5 · CSS3 · Node.js',
    level: 'Proficient',
  },
  {
    name: 'Artificial Intelligence',
    category: 'Machine Learning · TensorFlow Lite · Generative AI',
    level: 'Proficient',
  },
  {
    name: 'Cybersecurity',
    category: 'Network Security · InfoSec · Vulnerability Assessment',
    level: 'Proficient',
  },
  {
    name: 'Databases & Backend',
    category: 'SQL Server · PostgreSQL · .NET · EF Core',
    level: 'Proficient',
  },
  {
    name: 'Core CS & Leadership',
    category: 'DSA · OOP · DBMS · OS · Community Leadership',
    level: 'Proficient',
  },
];

/* ───────────── 6b. TECH STACK STRIP (16 technology logos) ───────────── */
export const TECH_STACK: string[] = [
  'React',
  'JavaScript',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'Supabase',
  'SQLite',
  'Three.js',
  'GSAP',
  'Java',
  'C++',
  'Docker',
  'Git',
  'GitHub',
  'SQL',
  '.NET',
];

/* ───────────── 7. PROJECTS (Exactly 6 high-impact projects) ───────────── */
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  poster?: string;
  description?: string;
  tags?: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'secureshield',
    kind: 'software',
    title: 'SecureShield',
    subtitle: 'Cybersecurity Practical Solutions',
    category: 'Cybersecurity',
    poster: '/assets/thumbnails/project-1-1.jpg',
    description:
      'A cybersecurity-focused project aimed at developing practical security-related solutions using SQL Server, Docker, and system security practices.',
    tags: ['SQL Server', 'Docker', 'Cybersecurity', 'Network Security', 'Vulnerability Assessment'],
  },
  {
    id: 'fixflow',
    kind: 'software',
    title: 'FixFlow',
    subtitle: 'Enterprise Backup & Workflow Management',
    category: 'Enterprise .NET',
    poster: '/assets/thumbnails/project-2-1.jpg',
    description:
      'A backup management application developed using the .NET ecosystem and Entity Framework Core, providing automated backups, transaction logging, and robust database operations.',
    tags: ['C#', '.NET', 'Entity Framework Core', 'SQL Server', 'React'],
  },
  {
    id: 'context-aware-wearable-assistive-device',
    kind: 'software',
    title: 'AI-Driven Assistive Wearable',
    subtitle: 'Context-Aware Sound Recognition & Vibration Feedback',
    category: 'AI & Embedded Systems',
    poster: '/assets/thumbnails/project-3-1.jpg',
    description:
      'An intelligent wearable assistive device designed to recognize important environmental sounds and communicate alerts through vibration feedback across Home, Road, and Office contexts.',
    tags: ['ESP32', 'INMP441 Microphone', 'TensorFlow Lite Micro', 'Embedded Systems', 'Machine Learning'],
  },
  {
    id: 'supragna-2k27',
    kind: 'software',
    title: 'SUPRAGNA 2K27',
    subtitle: 'Techno-Cultural Festival Web Experience',
    category: 'Web Experience',
    poster: '/assets/thumbnails/project-4-1.jpg',
    description:
      'A website development project for a university-level techno-cultural festival, focusing on an engaging digital experience, schedule exploration, and event presentation.',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'UI/UX'],
  },
  {
    id: 'academic-ml-projects',
    kind: 'software',
    title: 'Machine Learning Academic Suite',
    subtitle: 'Predictive Modeling & Statistical Analysis',
    category: 'Machine Learning',
    poster: '/assets/thumbnails/project-5-1.jpg',
    description:
      'A collection of academic machine learning projects focusing on data preprocessing, feature engineering, classification algorithms, regression modeling, and performance evaluation.',
    tags: ['Python', 'Machine Learning', 'Data Analysis', 'Scikit-Learn', 'Statistical Testing'],
  },
  {
    id: 'developer-portfolio',
    kind: 'software',
    title: 'Personal Developer Portfolio',
    subtitle: '3D Glassmorphic Interactive Web Platform',
    category: 'Frontend Engineering',
    poster: '/assets/thumbnails/project-6-1.jpg',
    description:
      'A high-performance interactive developer portfolio featuring 3D glass shard physics, real-time lighting shaders, and smooth GSAP animations.',
    tags: ['React', 'TypeScript', 'Three.js', 'GSAP', 'Tailwind CSS'],
  },
];

/* ───────────── 8. SERVICES (5 Services) ───────────── */
export interface ServiceItem {
  id: string;
  title: string;
  featured?: boolean;
  priceLabel?: string;
  price?: string;
}

export const SERVICES_PRICING: ServiceItem[] = [
  {
    id: 'service-1',
    title: 'Basic Website Development',
    featured: false,
  },
  {
    id: 'service-2',
    title: 'Portfolio Website Development',
    featured: true,
  },
  {
    id: 'service-3',
    title: 'Frontend Development',
    featured: false,
  },
  {
    id: 'service-4',
    title: 'Database Integration',
    featured: false,
  },
  {
    id: 'service-5',
    title: 'Technical Consultation & Project Assistance',
    featured: false,
  },
];

/* ───────────── 9. HEADLINE NUMBERS (under hero) ───────────── */
export const CLIENT_STATS = [
  { id: 'stat-1', value: 6, suffix: '', label: 'Portfolio Entries' },
  { id: 'stat-2', value: 15, suffix: '+', label: 'Technologies' },
  { id: 'stat-3', value: 5, suffix: '', label: 'Service Categories' },
] as const;

/* Derived – do not edit */
export const WHATSAPP_URL = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
