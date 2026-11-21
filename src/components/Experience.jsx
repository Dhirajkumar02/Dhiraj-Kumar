
import FadeInSection from "./FadeInSection";

const Experience = () => {
    const experiences = [
        {
            company: "Astra Microwave Products Limited (AMPL)",
            location: "Hyderabad, Telangana, India",
            role: "Software Engineer – Research & Development",
            duration: "Sep 2026 - Present",
            current: true,
            description:
                "Working in the Research & Development domain, contributing to radar software application development and testing for defence technology projects.",
            responsibilities: [
                "Developing and testing radar software applications using C++ and the Qt Framework.",
                "Contributing to real-time software application development and GUI implementation for radar technology projects.",
                "Working on software debugging, testing, issue identification, and application validation.",
                "Using Python for software integration, automation, and supporting development activities.",
                "Working with Visual Studio Code and Qt development tools for software development and testing.",
                "Collaborating on R&D software development activities involving radar systems and engineering applications."
            ],
            technologies: [
                "C++",
                "Qt Framework",
                "Python",
                "VS Code",
                "Radar Software",
                "Software Testing",
                "R&D"
            ]
        },
        {
            company:
                "Electronics and Radar Development Establishment (LRDE - DRDO)",
            location: "Bengaluru, Karnataka, India",
            role: "Graduate Apprentice Trainee – Radar Software Development",
            duration: "Sep 2025 - Sep 2026",
            current: false,
            description:
                "Worked on Radar Technology projects, developing software applications for radar data analysis, processing, and visualization.",
            responsibilities: [
                "Developed Radar Data Log Analyzer software using C++ and Qt for extracting and analyzing radar sortie data logs.",
                "Implemented Analysis Mode for binary log parsing, message extraction, categorization, and output generation.",
                "Developed Replay Mode to visualize recorded radar data on the radar display.",
                "Implemented All Track and Selected Track replay with filtering based on Track Type and Track ID.",
                "Used multithreading, Qt Signals and Slots, file handling, and Qt Style Sheets to build responsive GUI applications.",
                "Gained practical experience in radar systems, UDP/TCP networking, real-time data processing, and software development."
            ],
            technologies: [
                "C++",
                "Qt",
                "UDP/TCP",
                "Socket Programming",
                "Multithreading",
                "Radar Systems",
                "GUI Development"
            ]
        }
    ];

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

                    {/* Section Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Work{" "}
                            <span className="text-cyan-500 dark:text-cyan-400">
                                Experience
                            </span>
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 mt-4">
                            My professional journey in software engineering,
                            radar technology, and application development.
                        </p>
                    </div>

                    {/* Professional Experience */}
                    <div className="space-y-8">

                        {experiences.map((exp, index) => (
                            <div
                                key={exp.company}
                                className="
                                    bg-white dark:bg-slate-900
                                    border border-gray-300 dark:border-slate-700
                                    rounded-2xl p-6 md:p-8
                                    shadow-md hover:shadow-xl
                                    hover:border-cyan-400
                                    transition duration-300
                                "
                            >
                                {/* Company and Duration */}
                                <div className="
                                    flex flex-col md:flex-row
                                    md:items-center md:justify-between
                                    gap-4 mb-6
                                ">
                                    <div>
                                        <h3 className="
                                            text-xl md:text-2xl font-bold
                                            text-cyan-500 dark:text-cyan-400
                                        ">
                                            {exp.company}
                                        </h3>

                                        <p className="
                                            text-gray-600 dark:text-gray-400 mt-2
                                        ">
                                            📍 {exp.location}
                                        </p>

                                        <p className="
                                            text-lg font-semibold
                                            text-gray-800 dark:text-gray-200 mt-2
                                        ">
                                            {exp.role}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="
                                            bg-cyan-100 text-cyan-700
                                            dark:bg-cyan-500/20 dark:text-cyan-300
                                            px-4 py-2 rounded-full text-sm
                                            font-medium
                                        ">
                                            {exp.duration}
                                        </span>

                                        {exp.current && (
                                            <span className="
                                                bg-green-100 text-green-700
                                                dark:bg-green-500/20 dark:text-green-400
                                                px-3 py-2 rounded-full text-sm
                                                font-medium
                                            ">
                                                Current
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="
                                    text-gray-700 dark:text-gray-300
                                    leading-relaxed mb-6
                                ">
                                    {exp.description}
                                </p>

                                {/* Responsibilities */}
                                <h4 className="
                                    text-lg font-semibold mb-4
                                    text-gray-900 dark:text-white
                                ">
                                    Key Responsibilities & Contributions
                                </h4>

                                <div className="
                                    space-y-3
                                    text-gray-700 dark:text-gray-300
                                ">
                                    {exp.responsibilities.map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="
                                                text-cyan-500 mt-1
                                            ">
                                                ✓
                                            </span>

                                            <p className="leading-relaxed">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Technologies */}
                                <div className="mt-8">
                                    <h4 className="
                                        text-sm font-semibold mb-3
                                        text-gray-600 dark:text-gray-400
                                    ">
                                        Technologies & Skills
                                    </h4>

                                    <div className="flex flex-wrap gap-3">
                                        {exp.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="
                                                    bg-cyan-100 text-cyan-700
                                                    dark:bg-cyan-500/20 dark:text-cyan-300
                                                    px-3 py-1.5 rounded-full
                                                    text-sm font-medium
                                                "
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* Professional Training */}
                    <div className="
                        bg-white dark:bg-slate-900
                        border border-gray-300 dark:border-slate-700
                        rounded-2xl p-6 md:p-8
                        shadow-md hover:shadow-xl
                        hover:border-cyan-400
                        transition duration-300
                        mt-8
                    ">

                        <div className="
                            flex flex-col md:flex-row
                            md:items-center md:justify-between
                            gap-4 mb-6
                        ">
                            <div>
                                <h3 className="
                                    text-xl md:text-2xl font-bold
                                    text-cyan-500 dark:text-cyan-400
                                ">
                                    JSpiders Training & Development Center
                                </h3>

                                <p className="
                                    text-gray-600 dark:text-gray-400 mt-2
                                ">
                                    📍 Bengaluru, Karnataka, India
                                </p>

                                <p className="
                                    text-lg font-semibold
                                    text-gray-800 dark:text-gray-200 mt-2
                                ">
                                    Java Full Stack Trainee
                                </p>
                            </div>

                            <span className="
                                bg-cyan-100 text-cyan-700
                                dark:bg-cyan-500/20 dark:text-cyan-300
                                px-4 py-2 rounded-full text-sm
                                h-fit
                            ">
                                Jun 2024 - Apr 2025
                            </span>
                        </div>

                        <p className="
                            text-gray-700 dark:text-gray-300
                            leading-relaxed mb-6
                        ">
                            Completed practical training in Java Full Stack
                            Development, covering frontend and backend
                            technologies, database management, REST APIs,
                            and enterprise application development.
                        </p>

                        <div className="
                            space-y-3 text-gray-700 dark:text-gray-300
                        ">
                            <p>✓ Learned Core Java, JDBC, Servlets, JSP, and SQL.</p>
                            <p>✓ Developed web applications using Spring Boot, Hibernate, and React.</p>
                            <p>✓ Worked with MySQL databases, REST APIs, and MVC architecture.</p>
                            <p>✓ Developed Hospital Management, Student Management, and Banking applications.</p>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-8">
                            {[
                                "Java",
                                "JDBC",
                                "Servlet",
                                "Spring Boot",
                                "Hibernate",
                                "React",
                                "MySQL"
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="
                                        bg-cyan-100 text-cyan-700
                                        dark:bg-cyan-500/20 dark:text-cyan-300
                                        px-3 py-1.5 rounded-full text-sm
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
