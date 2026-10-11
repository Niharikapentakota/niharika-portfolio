import {
  Github,
  Linkedin,
  Mail,
  Cpu,
  Code2,
  Globe,
  GraduationCap,
  Award,
  Trophy,
  MapPin,
  Calendar,
  Cloud,
  Shield,
  Brain,
  Network,
  CloudRain,
  Zap,
  HeartPulse,
  FileText,
  Sprout,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';

export const personalInfo = {
  name: 'Pentakota Niharika',
  firstName: 'Niharika',
  lastName: 'Pentakota',
  headline: 'Aspiring Software Developer | AI Enthusiast',
  introduction:
    'A CSIT student passionate about software development, artificial intelligence, and building practical technology solutions that create real impact.',
  location: 'Andhra Pradesh, India',
  profileImage: '/images/Professional_Portrait_with_Office_Glow.png',
  resumePath: '/resume.pdf',
  email: 'niharikapentakota08@gmail.com',
  github: 'https://github.com/Niharikapentakota',
  linkedin: 'https://www.linkedin.com/in/niharika-pentakota-044306352',
};

export const socialLinks: {
  name: string;
  url: string;
  icon: LucideIcon;
  placeholder: boolean;
}[] = [
  { name: 'GitHub', url: 'https://github.com/Niharikapentakota', icon: Github, placeholder: false },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/niharika-pentakota-044306352',
    icon: Linkedin,
    placeholder: false,
  },
];

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const aboutText = [
  "I'm a Computer Science and Information Technology undergraduate at Lendi Institute of Engineering and Technology, affiliated with JNTU. My journey in technology is driven by curiosity, a love for problem-solving, and a desire to build things that genuinely help people.",
  'I focus on strengthening my foundations in programming, web development, and artificial intelligence. I enjoy breaking down complex problems into manageable pieces and turning ideas into working software.',
  'Beyond academics, I actively explore new technologies through online courses, workshops, and hands-on projects. I believe in learning by building, and I am always looking for opportunities to grow as a developer and contribute meaningfully to real-world solutions.',
];

export const skillGroups: {
  title: string;
  icon: LucideIcon;
  skills: { name: string; level: string }[];
}[] = [
  {
    title: 'Programming Languages',
    icon: Cpu,
    skills: [
      { name: 'C', level: 'Proficient' },
      { name: 'Java', level: 'Proficient' },
      { name: 'Python', level: 'Proficient' },
    ],
  },
  {
    title: 'Web Development',
    icon: Code2,
    skills: [
      { name: 'HTML', level: 'Familiar' },
      { name: 'CSS', level: 'Familiar' },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  github?: string;
  hasRepo: boolean;
  icon: LucideIcon;
  accent: string;
};

export const projects: Project[] = [
  {
    id: 'swasthyapath',
    title: 'SwasthyaPath',
    tagline: 'Healthcare continuity for rural communities',
    description:
      'A healthcare continuity prototype designed for rural and underserved communities, ensuring access to guidance and care information even in low-connectivity environments.',
    features: [
      'Symptom guidance and triage assistance',
      'Referral tracking across care providers',
      'Offline-first architecture with local data sync',
      'Nearby healthcare facility discovery',
      'Multilingual assistance for diverse users',
    ],
    technologies: ['React', 'Vite', 'JavaScript', 'localStorage', 'Leaflet', 'OpenStreetMap'],
    github: 'https://github.com/Niharikapentakota/SwasthyaPath',
    hasRepo: true,
    icon: HeartPulse,
    accent: 'from-rose-500/20 to-violet-500/20',
  },
  {
    id: 'agricircular',
    title: 'AgriCircular',
    tagline: 'Smart agricultural waste utilization',
    description:
      'A smart agricultural waste utilization and circular economy concept focused on helping people explore productive, sustainable uses for agricultural residues.',
    features: [
      'Explore uses for paddy straw',
      'Sugarcane trash valorization ideas',
      'Coconut leaves repurposing guidance',
      'Banana stem utilization methods',
      'Maize residue processing concepts',
    ],
    technologies: ['Concept Design', 'Sustainability', 'Circular Economy'],
    hasRepo: false,
    icon: Sprout,
    accent: 'from-emerald-500/20 to-violet-500/20',
  },
  {
    id: 'bulk-cert-generator',
    title: 'Bulk Certificate Generator',
    tagline: 'Scalable certificate generation API',
    description:
      'A Python FastAPI project for bulk certificate generation, featuring API validation, database integration, and automated certificate rendering for high-volume use cases.',
    features: [
      'Bulk certificate generation via API',
      'Request validation and error handling',
      'Database integration for record tracking',
      'Automated certificate PDF rendering',
    ],
    technologies: ['Python', 'FastAPI', 'SQL', 'Database Integration'],
    github: 'https://github.com/Niharikapentakota/bulk-certificate-generator',
    hasRepo: true,
    icon: FileText,
    accent: 'from-amber-500/20 to-violet-500/20',
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  affiliation?: string;
  detail: string;
  metric: string;
  year: string;
  icon: LucideIcon;
};

export const education: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science & Information Technology',
    institution: 'Lendi Institute of Engineering & Technology',
    affiliation: 'Affiliated to JNTU',
    detail: 'Currently pursuing',
    metric: 'CGPA: 9.24',
    year: 'Expected 2028',
    icon: GraduationCap,
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Himasekhar Junior College, Anakapalli',
    detail: 'Mathematics, Physics, Chemistry',
    metric: '98%',
    year: '2024',
    icon: Award,
  },
  {
    degree: 'SSC (10th Standard)',
    institution: 'Himasekhar E.M. School, Anakapalli',
    detail: 'Secondary Education',
    metric: '96%',
    year: '2022',
    icon: Award,
  },
];

export type Certification = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const certifications: Certification[] = [
  {
    title: 'Google AI Course',
    description: 'Completed coursework covering fundamental artificial intelligence and machine learning concepts.',
    icon: Brain,
  },
  {
    title: 'Microsoft Cloud Course',
    description: 'Explored cloud computing fundamentals and Microsoft Azure cloud services and architecture.',
    icon: Cloud,
  },
  {
    title: 'Cisco Introduction to Cybersecurity',
    description: 'Gained foundational knowledge of cybersecurity principles, threats, and defense strategies.',
    icon: Shield,
  },
  {
    title: 'Cisco Packet Tracer IoT',
    description: 'Explored Internet of Things concepts and network simulation through Cisco Packet Tracer.',
    icon: Network,
  },
  {
    title: 'Scaler RAG Masterclass',
    description: 'Participated in a masterclass on Retrieval-Augmented Generation and modern AI application patterns.',
    icon: Sparkles,
  },
  {
    title: 'Google IWD Workshop',
    description: 'Attended a Google International Women\u2019s Day workshop focused on technology and empowerment.',
    icon: Zap,
  },
  {
    title: 'Cyberthreya Workshop',
    description: 'Participated in a workshop exploring cybersecurity challenges and threat awareness.',
    icon: CloudRain,
  },
];

export type Achievement = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  {
    title: 'Hackathon Participation',
    description: 'Actively participated in college and inter-college hackathons, tackling real-world problem statements under time constraints.',
    icon: Trophy,
  },
  {
    title: 'Technical Workshops',
    description: 'Attended hands-on workshops on AI, cloud computing, and cybersecurity to broaden practical skills.',
    icon: Cpu,
  },
  {
    title: 'Project Showcases',
    description: 'Presented academic and personal projects including SwasthyaPath and AgriCircular at college showcases.',
    icon: Globe,
  },
  {
    title: 'College Activities',
    description: 'Engaged in technical club activities, coding challenges, and collaborative learning initiatives on campus.',
    icon: Sparkles,
  },
];

export const contactInfo = {
  email: personalInfo.email,
  github: personalInfo.github,
  linkedin: personalInfo.linkedin,
  location: personalInfo.location,
  iconMap: { email: Mail, github: Github, linkedin: Linkedin, location: MapPin },
};

export const footerNavLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];
