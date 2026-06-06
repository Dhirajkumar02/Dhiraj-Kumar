import { FaGithub } from "react-icons/fa";
import bankingImg from "../assets/projectsImg/BankingSystem.jpg";
import hmsImg from "../assets/projectsImg/HMS.png";
import smsImg from "../assets/projectsImg/SMS.png";
import bloggyImg from "../assets/projectsImg/bloggy.png";
import ecommerceImg from "../assets/projectsImg/ecommerce.jpg";
import votingImg from "../assets/projectsImg/voting.png";
import FadeInSection from "./FadeInSection";

const projects = [
    {
        title: "Hospital Management System",
        image: hmsImg,
        description:
            "A complete web-based Hospital Management System with patient registration, doctor management, appointment scheduling, authentication, and database integration.",
        github:
            "https://github.com/Dhirajkumar02/Hospital-Management-System-Using-Servlet",
        tech: ["Java", "Servlet", "JDBC", "MySQL", "Bootstrap"],
    },
    {
        title: "Banking Application",
        image: bankingImg,
        description:
            "Spring Boot based banking application supporting account management, transactions, CRUD operations, and REST API integration.",
        github:
            "https://github.com/Dhirajkumar02/Banking-Application-Using-Spring-Boot",
        tech: ["Spring Boot", "Hibernate", "JPA", "MySQL"],
    },
    {
        title: "Student Management System",
        image: smsImg,
        description:
            "Web application for managing student records, admissions, and academic information using Java Servlet and MySQL.",
        github:
            "https://github.com/Dhirajkumar02/Student-Management-System-Using-Servlet",
        tech: ["Servlet", "JSP", "JDBC", "MySQL"],
    },
    {
        title: "E-Commerce Website",
        image: ecommerceImg,
        description:
            "Full Stack E-Commerce platform developed using React and Spring Boot with product management and user-friendly UI.",
        github:
            "https://github.com/Dhirajkumar02/E-Commerce-Website",
        tech: ["React", "Spring Boot", "MySQL"],
    },
    {
        title: "Online Voting Application",
        image: votingImg,
        description:
            "Secure online voting system with user authentication, voting management, and result tracking.",
        github:
            "https://github.com/Dhirajkumar02/Online-Voting-App",
        tech: ["React", "Spring Boot", "MySQL"],
    },
    {
        title: "Bloggy Tech App",
        image: bloggyImg,
        description:
            "MERN Stack blogging platform allowing users to create, manage, and publish technical blogs.",
        github:
            "https://github.com/Dhirajkumar02/BloggyTechApp",
        tech: ["MongoDB", "Express", "React", "Node.js"],
    },
];

const Projects = () => {
    return (
        <FadeInSection delay={0.4}>
            <section
                id="projects"
                className="
                py-24 px-6
                bg-white text-gray-900
                dark:bg-slate-900 dark:text-white
                transition-colors duration-500
            "
            >
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Featured{" "}
                            <span className="text-cyan-500 dark:text-cyan-400">
                                Projects
                            </span>
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
                            A collection of software and web applications
                            developed using Java, Spring Boot, React,
                            JDBC, MySQL, and modern development technologies.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="
                                bg-white dark:bg-slate-800
                                border border-gray-300 dark:border-slate-700
                                rounded-2xl overflow-hidden

                                shadow-md
                                hover:shadow-2xl

                                hover:border-cyan-400
                                hover:-translate-y-3

                                transition-all duration-300
                            "
                            >

                                {/* Project Image */}
                                <div className="overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="
                                        w-full h-52
                                        object-cover
                                        hover:scale-105
                                        transition duration-500
                                    "
                                    />
                                </div>

                                <div className="p-6">

                                    <h3 className="text-xl font-bold text-cyan-500 dark:text-cyan-400 mb-3">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-700 dark:text-gray-300 mb-5">
                                        {project.description}
                                    </p>

                                    {/* Technology Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="
                                                bg-cyan-100 text-cyan-700
                                                dark:bg-cyan-500/20 dark:text-cyan-300
                                                px-3 py-1 rounded-full text-sm
                                            "
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* GitHub Button */}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                        inline-flex items-center gap-2
                                        bg-cyan-500 hover:bg-cyan-600
                                        text-white
                                        px-4 py-2 rounded-lg
                                        transition
                                    "
                                    >
                                        <FaGithub />
                                        View Code
                                    </a>

                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </FadeInSection>
    );
};

export default Projects;