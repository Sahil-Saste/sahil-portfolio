import { Project, SkillCategory, EducationItem, CertificationItem } from './types';

export const PERSONAL_INFO = {
  name: "Sahil Saste",
  title: "AI & Data Science Engineer",
  bio: "AI enthusiast and Data Science undergraduate passionate about creating AI-powered solutions that think, see, and understand. Experienced in NLP (Sentence-BERT), Computer Vision (OpenCV, MediaPipe), and Deep Learning (CNNs). Built impactful projects with a mission to turn data into intelligent action.",
  email: "sahilsaste2304@gmail.com",
  phone: "+91-7249041134",
  linkedin: "https://www.linkedin.com/in/sahil-saste-a97248296",
  github: "https://github.com/Sahil-Saste",
};

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'C', 'SQL'],
  },
  {
    title: 'Data Structures, Algorithms & OOP',
    skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Object Oriented Programming'],
  },
  {
    title: 'AI/ML & Data Science',
    skills: ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning (CNNs)', 'NLP (Sentence-BERT, NLTK)', 'Computer Vision (OpenCV, MediaPipe)', 'Semantic Similarity', 'Feature Engineering'],
  },
  {
    title: 'Libraries & Frameworks',
    skills: ['Scikit-learn', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'TensorFlow', 'Keras', 'Transformers (Hugging Face)'],
  },
  {
    title: 'Data Visualization',
    skills: ['Tableau', 'Power BI'],
  },
  {
    title: 'Databases & Tools',
    skills: ['MySQL', 'MongoDB', 'Git', 'Docker', 'Jupyter', 'Streamlit', 'Excel', 'Google Colab'],
  },
  {
    title: 'Soft Skills',
    skills: ['Analytical Thinking', 'Team Collaboration', 'Time-Management'],
  }
];


export const PROJECTS_DATA: Project[] = [
  {
    title: "FitMate AI",
    technologies: ["Python", "OpenCV", "MediaPipe", "Streamlit", "pyttsx3"],
    description: [
      "Created an AI-powered fitness trainer that tracks body posture in real-time using a webcam.",
      "Implemented exercise-specific logic for squats, push-ups, curls, and more with rep counting and form correction.",
      "Integrated voice guidance and an interactive Streamlit interface for workout feedback.",
    ],
    imageUrl: "https://placehold.co/600x400/0f172a/94a3b8?text=FitMate+AI",
    githubUrl: "https://github.com/Sahil-Saste/fitmate-ai",
  },
  {
    title: "Resume Screening AI",
    technologies: ["Python", "NLP", "Streamlit", "Sentence-BERT"],
    description: [
      "Built a resume screening app to compare resumes with job descriptions using regex and NLP.",
      "Integrated Sentence-BERT to compute semantic similarity for context-aware matching.",
      "Displayed skill match, semantic score, and a combined score with visual charts for recruiters.",
    ],
    imageUrl: "https://placehold.co/600x400/0f172a/94a3b8?text=Resume+AI",
    githubUrl: "https://github.com/Sahil-Saste/Resume-Screening-AI",
  },
  {
    title: "Employee Attrition Analysis",
    technologies: ["Power BI", "SQL", "DAX", "Excel"],
    description: [
      "Built an interactive Power BI dashboard to analyze attrition patterns across 1,480 employees.",
      "Used SQL queries to preprocess employee data and create calculated columns for attrition trends.",
      "Provided data-driven insights to help HR teams improve retention strategies.",
    ],
    imageUrl: "https://placehold.co/600x400/0f172a/94a3b8?text=Attrition+Analysis",
    githubUrl: "https://github.com/Sahil-Saste/Employee-Attrition-Analysis",
  },
  {
    title: "Spam Email Detection",
    technologies: ["Python", "SVM", "Scikit-learn", "HTML", "CSS"],
    description: [
      "Developed an SVM model achieving 93% classification accuracy on over 5,000 email samples.",
      "Preprocessed email data to extract features and integrated Scikit-learn pipelines for efficient modeling.",
      "Designed an intuitive interface for users to input email text and get instant predictions.",
    ],
    imageUrl: "https://placehold.co/600x400/0f172a/94a3b8?text=Spam+Detection",
    githubUrl: "https://github.com/Sahil-Saste",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
    {
        year: 'Nov 2022 - May 2026',
        degree: 'B.E. in AI & DS Engineering',
        institute: 'Terna Engineering College, Nerul',
        gpa: '7.77 / 10'
    }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
    {
        date: 'March 2025',
        title: 'Deloitte Australia Data Analytics Job Simulation',
        issuer: 'Forage'
    },
    {
        date: 'Feb 2025',
        title: 'Google - Foundations: Data, Data Everywhere',
        issuer: 'Coursera'
    },
    {
        date: 'Jan 2025',
        title: 'Introduction to Data Science',
        issuer: 'Cisco Networking Academy'
    },
    {
        date: 'Dec 2024',
        title: 'Data Structures and Algorithms with Java',
        issuer: 'Apna College'
    }
];