import FadeInSection from "./FadeInSection";

const Experience = () => {
    return (
        <FadeInSection delay={0.3}>
            <section
                id="experience"
                className="
                py-24 px-6
                bg-gray-50 text-gray-900
                dark:bg-slate-950 dark:text-white
                transition-colors duration-500
            "
            >
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Work <span className="text-cyan-500 dark:text-cyan-400">Experience</span>
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 mt-4">
                            My professional journey and industry experience.
                        </p>
                    </div>

                    {/* LRDE-DRDO */}
                    <div
                        className="
                        bg-white dark:bg-slate-900
                        border border-gray-300 dark:border-slate-700
                        rounded-2xl p-8
                        shadow-md hover:shadow-xl
                        hover:border-cyan-400
                        transition duration-300
                    "
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

                            <div>
                                <h3 className="text-2xl font-bold text-cyan-500 dark:text-cyan-400">
                                    LRDE - DRDO
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 mt-1">
                                    📍 Bengaluru, Karnataka, India
                                </p>

                                <p className="text-lg text-gray-700 dark:text-gray-300 mt-1">
                                    Apprentice Trainee – Radar Software Development
                                </p>
                            </div>

                            <div className="mt-3 md:mt-0">
                                <span
                                    className="
                                    bg-cyan-100 text-cyan-700
                                    dark:bg-cyan-500/20 dark:text-cyan-300
                                    px-4 py-2 rounded-full text-sm
                                "
                                >
                                    Sep 2025 - Present
                                </span>
                            </div>

                        </div>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Working on Radar Technology Projects and gaining
                            hands-on experience in defense and real-time software systems.
                            Contributing to desktop application development,
                            networking modules, and radar data visualization.
                        </p>

                        <div className="space-y-4 text-gray-700 dark:text-gray-300">

                            <div>
                                ✅ Developed Log Analyzer Software using Qt, C++,
                                and UDP/TCP Socket Programming for analyzing radar
                                communication logs.
                            </div>

                            <div>
                                ✅ Working on Radar Display Software development
                                using Qt and C++.
                            </div>

                            <div>
                                ✅ Gained experience in Networking,
                                Multithreading, and Real-Time Data Processing.
                            </div>

                            <div>
                                ✅ Worked with communication protocols and
                                radar system software architecture.
                            </div>

                            <div>
                                ✅ Improved expertise in Qt Framework,
                                C++, GUI Development, and Software Engineering.
                            </div>

                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-3 mt-8">

                            {[
                                "Qt",
                                "C++",
                                "UDP/TCP",
                                "Networking",
                                "Multithreading",
                                "Radar Systems",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="
                                    bg-cyan-100 text-cyan-700
                                    dark:bg-cyan-500/20 dark:text-cyan-300
                                    px-3 py-1 rounded-full
                                "
                                >
                                    {tech}
                                </span>
                            ))}

                        </div>
                    </div>

                    {/* JSpiders */}
                    <div
                        className="
                        bg-white dark:bg-slate-900
                        border border-gray-300 dark:border-slate-700
                        rounded-2xl p-8
                        shadow-md hover:shadow-xl
                        hover:border-cyan-400
                        transition duration-300
                        mt-8
                    "
                    >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

                            <div>
                                <h3 className="text-2xl font-bold text-cyan-500 dark:text-cyan-400">
                                    JSpiders Training & Development Center
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 mt-1">
                                    📍 Bengaluru, Karnataka, India
                                </p>

                                <p className="text-lg text-gray-700 dark:text-gray-300 mt-1">
                                    Java Full Stack Development Program
                                </p>
                            </div>

                            <div className="mt-3 md:mt-0">
                                <span
                                    className="
                                    bg-cyan-100 text-cyan-700
                                    dark:bg-cyan-500/20 dark:text-cyan-300
                                    px-4 py-2 rounded-full text-sm
                                "
                                >
                                    Jun 2024 - Apr 2025
                                </span>
                            </div>

                        </div>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            Completed intensive training in Java Full Stack Development,
                            focusing on front-end and back-end technologies, database
                            management, REST APIs, and enterprise application development.
                        </p>

                        <div className="space-y-4 text-gray-700 dark:text-gray-300">

                            <div>
                                ✅ Learned Core Java, Advanced Java, JDBC, Servlets, JSP and SQL.
                            </div>

                            <div>
                                ✅ Developed Full Stack Web Applications using Spring Boot,
                                Hibernate and React.
                            </div>

                            <div>
                                ✅ Worked with MySQL Database, REST APIs and MVC Architecture.
                            </div>

                            <div>
                                ✅ Built real-world projects including Hospital Management System,
                                Student Management System and Banking Application.
                            </div>

                            <div>
                                ✅ Strengthened problem-solving, debugging and software development skills.
                            </div>

                        </div>

                        <div className="flex flex-wrap gap-3 mt-8">

                            {[
                                "Java",
                                "JDBC",
                                "Servlet",
                                "Spring Boot",
                                "Hibernate",
                                "React",
                                "Oracle/MySQL",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="
                                    bg-cyan-100 text-cyan-700
                                    dark:bg-cyan-500/20 dark:text-cyan-300
                                    px-3 py-1 rounded-full
                                "
                                >
                                    {tech}
                                </span>
                            ))}

                        </div>
                    </div>

                </div>
            </section>
        </FadeInSection>
    );
};

export default Experience;