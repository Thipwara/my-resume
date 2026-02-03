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
    logos?: string[];
}

export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    images?: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period?: string;
    description: string;
    logo?: string;
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
            category: "Project Management & tools",
            items: ["Testcase & Test result","Sprint report", "SIT & UAT", "Small team management", "Production Support","Jira", "Zyphyr", "Testrail"],
            logos: [
                "data:image/png;base64,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",
                "data:image/png;base64,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",
                "https://www.testrail.com/wp-content/uploads/2023/03/Frame-4.png"
            ]
        },
        {
            category: "Testing Tools",
            items: ["Robot Framework - Python", "Playwright - TypeScript", "Newman - JavaScript", "Postman", "Appium"],
            logos: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWvj9m0y4ORuBpr4pibnxhNqPi8Ay29ezQDg&s",
                "https://miro.medium.com/1*Dx8nmGGRZLmHGo0zwzoVDw.png",
                "https://logowik.com/content/uploads/images/postman-api-platform6643.logowik.com.webp",
                "https://www.getautonoma.com/_next/image?url=%2Fimg%2Fblog%2Fhow-to-test-android-apps-with-appium%2Fhero.png&w=1920&q=75"
            ]
        },
        {
            category: "Tools & DevOps",
            items: ["Git", "Firebase", "Android Studio", "XCode", "Kibana", "Jenkins", "CI/CD", "SourceTree", "Dbeaver"],
            logos: [
                "https://www.poolsawat.com/wp-content/uploads/2015/05/git_logo.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTDAuIHtknl2Sb1V3z1J8LgUoapgp_qChJA&s",
                "https://a.slack-edge.com/80588/img/services/jenkins-ci_512.png",
                "https://awsmp-logos.s3.amazonaws.com/0ed7b11e-a954-4759-b706-255abb673d4c/019d31123782932ac3e85ee51c6e1f63.png"
                
            ]
        }
    ],

    experience: [
        {
            title: "Quality Assurance Engineer",
            company: "TTB Spark Tech at TTB Bank",
            period: "2025 - Present",
            description: `      I am an IT QA working with CRM sales and service systems. I have initiated QA workflows for the team, such as test case and test result management, QA meetings, and consultations. 
      I have participated in system development to create processes for lead management, rules, and team management. These systems transform Salesforce into TTB internal systems and act as the core of other systems. 
      This has been a great opportunity for me to learn Playwright for API and web UI testing, helping to reduce testing time and eliminate redundant QA work.`,
            images: [
                "./timeline-img/ttb-training-PW.JPG",
                "./timeline-img/QA-meeting.jpg",
                "./timeline-img/ttb-party.JPG"
            ]
        },
        {
            title: "Quality Assurance Automation Engineer",
            company: "UCHOOSE at KRUNGSRI CONSUMER",
            period: "2023 - 2025",
            description: `      As a QA of Fintech Apps, I working with the Agile team to deliver features for Credit cards both user retention and user acquisition features. Also, perform testing a CMS and production support system on the website. 
        I am responsible for preparing test data and test cases for performing manual and automated testing. Using Git to push Newman script for automate API and Appium Robot script for UI automation for perform running on Jenkins pipeline. 
        I worked with third parties or the internal bank IT team to prepare for the testing environment and support user UAT.`,
            images: [
                "./timeline-img/KSC-onboard.PNG",
                "./timeline-img/KSC-party.JPG",
                "./timeline-img/KSC-Volunteer.JPG"
            ]
        },
        {
            title: "Junior Software Tester",
            company: "DataWow Co., Ltd",
            period: "2022 - 2023",
            description: `      Find application defects and root causes by Manual testing on Mobile applications both iOS and Android also Backend API testing. Initial Automation UI testing with Robot Framework and initial ideas for Testcase management and support application deployment
        Acting Team leader to manipulate sprint ceremonies and communicate with an international team to get requirements and support production with Japan’s team. Also, research new features with the team to apply A/B testing.`,
            images: [
                "./timeline-img/DW01.png",
                "./timeline-img/DW02.JPEG",
                "./timeline-img/DW03.JPEG",
            ]
        },
        {
            title: "Business Analyst Internship",
            company: "Beryl 8 Plus",
            period: "2021",
            description: `     Responsible for supporting manual testing, product delivery processes and learning to adopt Salesforce to encourage a business. I support project about integration CRM system with Line official for a famous Japanese restaurant in Thailand and join project with Commercial bank to refine about new version of in-house web system for SME.`
        }
    ],

    education: [
        {
            degree: "B.Sc. Information and Communication Technology",
            institution: "Mahidol University",
            period: "2015 - 2019",
            description: `Major : Software Engineering
    Software quality assurance and testing 
    Practical software engineering
    Software design and development
    Software metrics`,
            logo: "./degree-img/site-logo-ict.png"
        },
        {
            degree: "UDEMY",
            institution: "Online Course",
            description: `    Appium - Mobile App Automation
    Postman: The Complete Guild REST API Testing`,
            logo: "./degree-img/Udemy-Logo.png"
        }
    ],

    projects: [
        {
            title: "UCHOOSE - U CARD",
            description: "Build the feature for apply credit card channel, coonect API with core bank system mand re-design",
            technologies: ["Digital Lending", "NDID", "T&C", "Dipchip", "NCB"],
            link: "https://www.krungsriconsumer.com/u-highlight/u-card"
        },
        {
            title: "UCHOOSE - Promotion",
            description: "Allow user to register for a birthday promotion and promotion associated with each credit card ",
            technologies: ["Register","MKT code", "Deeplink", "lead"],
            link: "https://www.krungsriconsumer.com/u-highlight/promotion"
        }
    ]
};
