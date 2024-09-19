import { ST } from "next/dist/shared/lib/utils"

enum Experience{
    EXPERT = 5,
    PRO = 4,
    INTERMEDIATE = 3,
    BEGINNER = 2
}

/**
 * onst stacks = ["AR VR", "Data Science", "DevOps", "FullStack", "GIS", "iOS", "Project Management", "Wordpress"];
const languages = ["JavaScript", "PHP", "Python", "Swift"];
 */

enum Stack{
    GEOTECH = "Geo-spatial Technologies",
    VISUALISATION = "Modeling and Visualisation",
    FRONTEND = "Frontend",
    BACKEND = "Backend",
    DATABASE = "Databases",
    DEVOPS = "DevOps",
    CMS = "CMS",
    IOS = "iOS"
}

enum Language{
    JavaScript = "JavaScript",
    PHP = "PHP",
    Python = "Python",
    Swift = "Swift"
}

interface Skill{
    image: string
    title: string
    stacks: Stack[]
    languages: Language
    experience: number
}

interface SkillSet{
    title: string
    skills: Skill[]
}

/**
 *  Technical . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
• Programming Language: Java, JavaScript, TypeScript, Python, PHP, SQL, Swift, HTML, CSS, GraphQL
• Database: MySQL, PostgreSQL, MongoDB, DB2, SQLite, MariaDB
• Frontend: React, NextJS, JQuery, Tailwind CSS, Bootstrap
• Backend: NodeJS, Spring Boot, Flask, Django, Directus, Strapi, Wordpress
• Data Analysis: Pandas, Matplotlib, Numpy, NLTK, Scikit-Learn
• Others: JIRA, Miro, Trello, Project Management, Cloud Services, SEO, Agaile, Apache Airflow, Photoshop, Illustrator,
PremierePro, Word, Excel, Powerpoint
 */


const skills:Skill[] = [
    // Frontend, Backend
    {
        image: "javascript",
        title: "JavaScript",
        experience: Experience.EXPERT,
        stacks: [Stack.BACKEND, Stack.FRONTEND],
        languages: Language.JavaScript
    },
    {
        image: "typescript",
        title: "TypeScript",
        experience: Experience.PRO,
        stacks: [Stack.BACKEND, Stack.FRONTEND],
        languages: Language.JavaScript
    },
    {
        image: "python",
        title: "Python",
        experience: Experience.PRO,
        stacks: [Stack.BACKEND],
        languages: Language.JavaScript
    },
    {
        image: "php",
        title: "PHP",
        experience: Experience.PRO,
        stacks: [Stack.BACKEND, Stack.FRONTEND],
        languages: Language.JavaScript
    },
    {
        image: "sql",
        title: "SQL",
        experience: Experience.PRO,
        stacks: [Stack.BACKEND, Stack.DATABASE],
        languages: Language.JavaScript
    },
    {
        image: "swift",
        title: "Swift",
        experience: Experience.INTERMEDIATE,
        stacks: [Stack.IOS],
        languages: Language.JavaScript
    },
    {
        image: "html",
        title: "HTML",
        experience: Experience.EXPERT,
        stacks: [Stack.FRONTEND],
        languages: Language.JavaScript
    },
    {
        image: "css",
        title: "CSS",
        experience: Experience.EXPERT,
        stacks: [Stack.FRONTEND],
        languages: Language.JavaScript
    },
    {
        image: "graphql",
        title: "GraphQL",
        experience: Experience.INTERMEDIATE,
        stacks: [Stack.BACKEND],
        languages: Language.JavaScript
    },
    {
        image: "mysql",
        title: "MySQL",
        experience: Experience.PRO,
        stacks: [Stack.DATABASE],
        languages: Language.JavaScript
    },
    {
        image: "postgres",
        title: "PostgreSQL",
        experience: Experience.INTERMEDIATE,
        stacks: [Stack.DATABASE],
        languages: Language.JavaScript
    },
    {
        image: "mongodb",
        title: "MongoDB",
        experience: Experience.BEGINNER,
        stacks: [Stack.DATABASE],
        languages: Language.JavaScript
    },
    {
        image: "db2",
        title: "DB2",
        experience: Experience.BEGINNER,
        stacks: [Stack.DATABASE],
        languages: Language.JavaScript
    },
    {
        image: "sqlite",
        title: "SQLite",
        experience: Experience.INTERMEDIATE,
        stacks: [Stack.DATABASE],
        languages: Language.JavaScript
    },
    {
        image: "mariadb",
        title: "MariaDB",
        experience: Experience.INTERMEDIATE,
        stacks: [Stack.DATABASE],
        languages: Language.JavaScript
    },
    {
        image: "react",
        title: "React",
        experience: Experience.PRO,
        stacks: [Stack.FRONTEND],
        languages: Language.JavaScript
    },
    {
        image: "nextjs",
        title: "Next.js",
        experience: Experience.PRO,
        stacks: [Stack.FRONTEND],
        languages: Language.JavaScript
    },
    {
        image: "jquery",
        title: "JQuery",
        experience: Experience.PRO,
        stacks: [Stack.FRONTEND],
        languages: Language.JavaScript
    },
    {
        image: "tailwindcss",
        title: "Tailwind CSS",
        experience: Experience.PRO,
        stacks: [Stack.FRONTEND],
        languages: Language.JavaScript
    },
    {
        image: "bootstrap",
        title: "Bootstrap",
        experience: Experience.EXPERT,
        stacks: [Stack.FRONTEND],
        languages: Language.JavaScript
    },
    {
        image: "nodejs",
        title: "Node.js",
        experience: Experience.BEGINNER,
        stacks: [Stack.BACKEND],
        languages: Language.JavaScript
    },
    {
        image: "express",
        title: "Express",
        experience: Experience.BEGINNER,
        stacks: [Stack.BACKEND],
        languages: Language.JavaScript
    },
    {
        image: "flask",
        title: "Flask",
        experience: Experience.INTERMEDIATE,
        stacks: [Stack.BACKEND],
        languages: Language.JavaScript
    },
    {
        image: "django",
        title: "DJango",
        experience: Experience.INTERMEDIATE,
        stacks: [Stack.BACKEND, Stack.FRONTEND],
        languages: Language.JavaScript
    },
    // CMS
    {
        image: "directus",
        title: "Directus",
        experience: Experience.INTERMEDIATE,
        stacks: [Stack.CMS],
        languages: Language.JavaScript
    },
    {
        image: "strapi",
        title: "Strapi",
        experience: Experience.INTERMEDIATE,
        stacks: [Stack.CMS],
        languages: Language.JavaScript
    },
    {
        image: "wordpress",
        title: "WordPress",
        experience: Experience.EXPERT,
        stacks: [Stack.CMS],
        languages: Language.JavaScript
    },
    // DEVOPS
    {
        image: "docker",
        title: "Docker",
        experience: Experience.INTERMEDIATE,
        stacks: [Stack.DEVOPS],
        languages: Language.JavaScript
    },
    {
        image: "git",
        title: "Git",
        experience: Experience.INTERMEDIATE,
        stacks: [Stack.DEVOPS],
        languages: Language.JavaScript
    },
    {
        image: "github",
        title: "Github",
        experience: Experience.INTERMEDIATE,
        stacks: [Stack.DEVOPS],
        languages: Language.JavaScript
    },
    {
        image: "gitlab",
        title: "Gitlab",
        experience: Experience.INTERMEDIATE,
        stacks: [Stack.DEVOPS],
        languages: Language.JavaScript
    },
    // GEOTECH
    {
        image: "qgis",
        title: "QGis",
        experience: Experience.PRO,
        stacks: [Stack.GEOTECH],
        languages: Language.JavaScript
    },
    {
        image: "arcgis",
        title: "ArcGIS Map",
        experience: Experience.PRO,
        stacks: [Stack.GEOTECH],
        languages: Language.JavaScript
    },
    {
        image: "arcgis-pro",
        title: "ArcGIS Pro",
        experience: Experience.PRO,
        stacks: [Stack.GEOTECH],
        languages: Language.JavaScript
    },
    // VISUALISATION
    {
        image: "autocad",
        title: "AutoCAD",
        experience: Experience.INTERMEDIATE,
        stacks: [Stack.VISUALISATION],
        languages: Language.JavaScript
    },
    {
        image: "revit",
        title: "Revit",
        experience: Experience.BEGINNER,
        stacks: [Stack.VISUALISATION],
        languages: Language.JavaScript
    },
]

/**
 * 
 * 
 * const newSkills:SkillSet[] = [
    {
        title: "Geo-spatial Technologies",
        skills: [
            {
                image: "qgis",
                title: "QGis",
                experience: Experience.Proficient
            },
            {
                image: "arcgis",
                title: "ArcGIS Map",
                experience: Experience.Proficient
            },
            {
                image: "arcgis-pro",
                title: "ArcGIS Pro",
                experience: Experience.Intermediate
            },
        ]
    },
    {
        title: "Modeling and Visualisation",
        skills: [
            {
                image: "autocad",
                title: "AutoCAD",
                experience: Experience.Beginner
            },
            {
                image: "revit",
                title: "Revit",
                experience: Experience.Beginner
            },
        ]
    },
    {
        title: "Programming and Scripting",
        skills: [
            {
                image: "python",
                title: "Python",
                experience: Experience.Proficient
            },
            {
                image: "sql",
                title: "SQL",
                experience: Experience.Proficient
            },
            {
                image: "typescript",
                title: "TypeScript",
                experience: Experience.Proficient
            },
            {
                image: "javascript",
                title: "JavaScript",
                experience: Experience.Proficient
            },
            {
                image: "nodejs",
                title: "NodeJs",
                experience: Experience.Beginner
            },
            {
                image: "react",
                title: "React",
                experience: Experience.Expert
            },
            {
                image: "jquery",
                title: "JQuery",
                experience: Experience.Expert
            },
            {
                image: "flask",
                title: "Flask",
                experience: Experience.Intermediate
            },
            {
                image: "django",
                title: "DJango",
                experience: Experience.Intermediate
            },
            {
                image: "rest-api",
                title: "Rest API",
                experience: Experience.Expert
            },
        ]
    },
    {
        title: "Databases",
        skills: [
            {
                image: "postgres",
                title: "PostgreSQL",
                experience: Experience.Proficient
            },
            {
                image: "postgis",
                title: "PostGIS",
                experience: Experience.Beginner
            },
            {
                image: "mongodb",
                title: "MongoDB",
                experience: Experience.Intermediate
            },
            {
                image: "mysql",
                title: "MySQL",
                experience: Experience.Expert
            },
        ]
    },
    {
        title: "DevOps",
        skills: [
            {
                image: "git",
                title: "Git",
                experience: Experience.Proficient
            },
            {
                image: "github",
                title: "Github",
                experience: Experience.Proficient
            },
            {
                image: "gitlab",
                title: "GitLab",
                experience: Experience.Intermediate
            },
            {
                image: "docker",
                title: "Docker",
                experience: Experience.Proficient
            },
        ]
    },
]
 */