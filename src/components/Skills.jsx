import FadeInSection from "./FadeInSection";

const skillCategories = [
    {
        title: "Programming Languages",
        skills: ["Java", "C++", "JavaScript", "SQL", "Python"],
    },
    {
        title: "Frontend Development",
        skills: ["HTML", "CSS", "Bootstrap", "React.js", "Tailwind CSS"],
    },
    {
        title: "Backend Development",
        skills: ["Servlet", "JSP", "Spring", "Spring Boot", "Hibernate"],
    },
    {
        title: "Database & APIs",
        skills: ["MySQL", "Oracle", "JDBC", "REST APIs"],
    },
    {
        title: "Qt & Software Development",
        skills: [
            "Qt Framework",
            "Qt Creator",
            "GUI Development",
            "TCP/UDP Sockets",
            "Multithreading",
            "Networking",
        ],
    },
    {
        title: "Tools & Technologies",
        skills: [
            "Git",
            "GitHub",
            "Linux",
            "Docker",
            "Jira",
            "Jenkins",
            "Postman",
            "Maven",
            "VS Code",
            "Eclipse",
            "Apache Tomcat",
        ],
    },
];

const Skills = () => {
    return (
        <FadeInSection delay={0.5}>
            <section
                id="skills"
                className="
                py-24 px-6
                bg-gray-50 text-gray-900
                dark:bg-slate-950 dark:text-white
                transition-colors duration-500
            "
            >
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Technical{" "}
                            <span className="text-cyan-500 dark:text-cyan-400">
                                Skills
                            </span>
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 mt-4">
                            Technologies, frameworks, tools, and platforms
                            I use to build software solutions.
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {skillCategories.map((category, index) => (
                            <div
                                key={index}
                                className="
                                bg-white dark:bg-slate-900

                                border border-gray-300
                                dark:border-slate-700

                                rounded-2xl p-6

                                shadow-md
                                hover:shadow-xl

                                hover:border-cyan-400
                                hover:-translate-y-2

                                transition-all duration-300
                            "
                            >
                                <h3 className="text-xl font-bold text-cyan-500 dark:text-cyan-400 mb-5">
                                    {category.title}
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="
                                            bg-cyan-100 text-cyan-700

                                            dark:bg-cyan-500/20
                                            dark:text-cyan-300

                                            px-3 py-2
                                            rounded-full
                                            text-sm
                                            font-medium

                                            transition
                                        "
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </FadeInSection>
    );
};

export default Skills;