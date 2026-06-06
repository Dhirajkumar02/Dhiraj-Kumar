import FadeInSection from "./FadeInSection";

const About = () => {
    return (
        <FadeInSection delay={0.2}>
            <section
                id="about"
                className="
                py-24 px-6
                bg-white text-gray-900
                dark:bg-slate-900 dark:text-white
                transition-colors duration-500
            "
            >
                <div className="max-w-6xl mx-auto">

                    {/* Section Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            About <span className="text-cyan-500 dark:text-cyan-400">Me</span>
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-3xl mx-auto">
                            Passionate Software Engineer with experience in
                            Radar Technology, Qt Development, Networking,
                            and Full Stack Web Development.
                        </p>
                    </div>

                    {/* About Content */}
                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Professional Summary */}
                        <div>
                            <h3 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-4">
                                Professional Summary
                            </h3>

                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                                I am currently working as an Apprentice Trainee
                                at LRDE-DRDO, contributing to Radar Technology
                                Projects. My work involves developing Real-Time
                                Log Analyzer and Radar Display Applications using
                                Qt, C++, Networking, and Multithreading.
                            </p>

                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mt-4">
                                Along with embedded and desktop software
                                development, I have strong experience in Java
                                Full Stack Development using Spring Boot,
                                React.js, JDBC, Hibernate, MySQL, and REST APIs.
                                I enjoy solving real-world engineering problems
                                and building scalable software solutions.
                            </p>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <div className="bg-gray-100 dark:bg-slate-800 p-5 rounded-xl border border-gray-300 dark:border-slate-700 hover:border-cyan-400 transition">
                                <h4 className="text-cyan-500 dark:text-cyan-400 font-bold text-lg">
                                    LRDE-DRDO
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    Radar Software Development
                                </p>
                            </div>

                            <div className="bg-gray-100 dark:bg-slate-800 p-5 rounded-xl border border-gray-300 dark:border-slate-700 hover:border-cyan-400 transition">
                                <h4 className="text-cyan-500 dark:text-cyan-400 font-bold text-lg">
                                    Qt & C++
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    Desktop Application Development
                                </p>
                            </div>

                            <div className="bg-gray-100 dark:bg-slate-800 p-5 rounded-xl border border-gray-300 dark:border-slate-700 hover:border-cyan-400 transition">
                                <h4 className="text-cyan-500 dark:text-cyan-400 font-bold text-lg">
                                    Java Full Stack
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    Spring Boot + React
                                </p>
                            </div>

                            <div className="bg-gray-100 dark:bg-slate-800 p-5 rounded-xl border border-gray-300 dark:border-slate-700 hover:border-cyan-400 transition">
                                <h4 className="text-cyan-500 dark:text-cyan-400 font-bold text-lg">
                                    Networking
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300 mt-2">
                                    TCP / UDP Communication
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Education */}
                    <div className="mt-16">
                        <h3 className="text-2xl font-semibold text-cyan-500 dark:text-cyan-400 mb-6">
                            Education
                        </h3>

                        <div className="space-y-6">

                            {/* B.Tech */}
                            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl border border-gray-300 dark:border-slate-700 hover:border-cyan-400 transition">
                                <h4 className="text-xl font-bold">
                                    Bachelor of Technology (B.Tech)
                                </h4>

                                <p className="text-gray-700 dark:text-gray-300">
                                    Electronics & Communication Engineering
                                </p>

                                <a
                                    href="https://technocratsgroup.edu.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-500 dark:text-cyan-400 hover:underline"
                                >
                                    Technocrats Institute of Technology, Bhopal
                                </a>

                                <p className="text-cyan-500 dark:text-cyan-400 font-semibold mt-2">
                                    CGPA: 8.70
                                </p>
                            </div>

                            {/* 12th */}
                            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl border border-gray-300 dark:border-slate-700 hover:border-cyan-400 transition">
                                <h4 className="text-xl font-bold">
                                    Intermediate (12th)
                                </h4>

                                <p className="text-gray-600 dark:text-gray-400">
                                    R.N. College, Hajipur, Vaishali, Bihar
                                </p>

                                <p className="text-cyan-500 dark:text-cyan-400 font-semibold mt-2">
                                    82.80%
                                </p>
                            </div>

                            {/* 10th */}
                            <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl border border-gray-300 dark:border-slate-700 hover:border-cyan-400 transition">
                                <h4 className="text-xl font-bold">
                                    Matriculation (10th)
                                </h4>

                                <p className="text-gray-600 dark:text-gray-400">
                                    G.A. Inter School, Hajipur, Vaishali, Bihar
                                </p>

                                <p className="text-cyan-500 dark:text-cyan-400 font-semibold mt-2">
                                    72.40%
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </FadeInSection>
    );
};

export default About;
