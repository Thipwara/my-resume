// Resume Data Interfaces
export interface ResumeData {
    name: string;
    title: string;
    bio: string;
    skills: SkillCategory[];
    experience: Experience[];
    education: Education[];
    projects: Project[];
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    description: string;
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

// Sample Resume Data - Customize this with your own information
export const resumeData: ResumeData = {
    name: "Thipwara Karphondee (Mint)",
    title: "Quality Assurance Engineer (Manual & Automation)",
    bio: "     As a Quality Assurance 4 yrs experience in manual and automation testing also team management, I aim to deliver the best quality software for users and for drives the organizations. \n     I specialize in fintech, digital lending, credit card and back office processing. I’m seeking an innovative company to be part of an agile team for the digital transformation.",

    skills: [
        {
            category: "Frontend",
            items: ["TypeScript", "React", "Vue.js", "Next.js", "HTML/CSS", "Tailwind CSS"]
        },
        {
            category: "Backend",
            items: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"]
        },
        {
            category: "Tools & DevOps",
            items: ["Git", "Docker", "AWS", "CI/CD", "Webpack", "Vite"]
        },
        {
            category: "Design",
            items: ["Figma", "Adobe XD", "Responsive Design", "UI/UX Principles"]
        }
    ],

    experience: [
        {
            title: "Senior Frontend Developer",
            company: "Tech Innovations Inc.",
            period: "2022 - Present",
            description: "Leading frontend development for enterprise SaaS platform. Architected and implemented new design system, improving development velocity by 40%. Mentoring junior developers and conducting code reviews."
        },
        {
            title: "Full Stack Developer",
            company: "Digital Solutions Co.",
            period: "2020 - 2022",
            description: "Developed and maintained multiple client-facing web applications using React and Node.js. Implemented RESTful APIs and optimized database queries, reducing page load times by 60%."
        },
        {
            title: "Junior Web Developer",
            company: "StartUp Labs",
            period: "2019 - 2020",
            description: "Built responsive websites and web applications for various clients. Collaborated with designers to implement pixel-perfect UI components. Gained experience in modern web development practices."
        }
    ],

    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of Technology",
            period: "2015 - 2019",
            description: "Graduated with honors. Focused on software engineering, algorithms, and web technologies. Led the university's web development club."
        },
        {
            degree: "Full Stack Web Development Bootcamp",
            institution: "Code Academy",
            period: "2018",
            description: "Intensive 12-week program covering modern web development stack including React, Node.js, and database design."
        }
    ],

    projects: [
        {
            title: "E-Commerce Platform",
            description: "Built a full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            link: "https://github.com"
        },
        {
            title: "Task Management App",
            description: "Collaborative task management application with real-time updates and team features.",
            technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
            link: "https://github.com"
        },
        {
            title: "Portfolio Generator",
            description: "Tool that automatically generates beautiful portfolio websites from JSON data.",
            technologies: ["TypeScript", "Vite", "CSS Grid"],
            link: "https://github.com"
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather dashboard with beautiful visualizations and location-based forecasts.",
            technologies: ["React", "Chart.js", "OpenWeather API"],
            link: "https://github.com"
        }
    ]
};
