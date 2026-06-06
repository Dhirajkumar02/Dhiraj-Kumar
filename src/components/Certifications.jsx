import azureImg from "../assets/certificates/azure-ai.png";
import aiImg from "../assets/certificates/generative-ai.jpg";
import javaImg from "../assets/certificates/java-basic.jpg";
import jdbcImg from "../assets/certificates/jdbc.png";
import oracleImg from "../assets/certificates/oracle-oci.jpg";
import problemImg from "../assets/certificates/problem-solving.jpg";
import reactImg from "../assets/certificates/react-basic.jpg";
import springImg from "../assets/certificates/spring-boot.jpg";
import sqlImg from "../assets/certificates/sql-intermediate.jpg";
import youngTurksImg from "../assets/certificates/young-turks.jpg";
import FadeInSection from "./FadeInSection";

const certifications = [
    {
        title: "Microsoft Azure AI Fundamentals",
        issuer: "Microsoft",
        image: azureImg,
    },
    {
        title: "Oracle OCI Certificate",
        issuer: "Oracle",
        image: oracleImg,
    },
    {
        title: "Generative AI",
        issuer: "LinkedIn Learning",
        image: aiImg,
    },
    {
        title: "Learning Spring with Spring Boot",
        issuer: "LinkedIn Learning",
        image: springImg,
    },
    {
        title: "Learning JDBC",
        issuer: "LinkedIn Learning",
        image: jdbcImg,
    },
    {
        title: "Java (Basic)",
        issuer: "HackerRank",
        image: javaImg,
    },
    {
        title: "React (Basic)",
        issuer: "HackerRank",
        image: reactImg,
    },
    {
        title: "SQL (Intermediate)",
        issuer: "HackerRank",
        image: sqlImg,
    },
    {
        title: "Problem Solving (Basic)",
        issuer: "HackerRank",
        image: problemImg,
    },
];

const Certifications = () => {
    return (
        <FadeInSection delay={0.6}>
            <section
                id="certifications"
                className="py-24 px-6 bg-white text-gray-900 dark:bg-slate-900 dark:text-white transition-colors duration-500"
            >
                <div className="max-w-7xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Certifications &{" "}
                            <span className="text-cyan-500 dark:text-cyan-400">
                                Achievements
                            </span>
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 mt-4">
                            Professional certifications and technical achievements.
                        </p>
                    </div>

                    {/* Achievement Card */}
                    <div
                        className="
                        bg-white dark:bg-slate-800
                        border border-gray-300 dark:border-slate-700
                        rounded-2xl overflow-hidden mb-10
                        shadow-md hover:shadow-xl
                        hover:border-cyan-400
                        transition-all duration-300
                    "
                    >
                        <div className="overflow-hidden">
                            <a
                                href={youngTurksImg}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={youngTurksImg}
                                    alt="Young Turks Achievement"
                                    className="w-full h-64 object-cover hover:scale-105 transition duration-500"
                                />
                            </a>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-cyan-500 dark:text-cyan-400">
                                Young Turks - India's Largest Skill Contest
                            </h3>

                            <p className="text-gray-700 dark:text-gray-300 mt-3">
                                Achieved 98.32 Percentile among 5.13 Lakh participants
                                with an All India Rank of 8589.
                            </p>

                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                Issued by Naukri Campus
                            </p>
                        </div>
                    </div>

                    {/* Certifications Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="
                                bg-white dark:bg-slate-800
                                border border-gray-300 dark:border-slate-700
                                rounded-xl overflow-hidden
                                shadow-md hover:shadow-xl
                                hover:border-cyan-400
                                hover:-translate-y-2
                                transition-all duration-300
                            "
                            >
                                {cert.image && (
                                    <a
                                        href={cert.image}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block overflow-hidden"
                                    >
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                                        />
                                    </a>
                                )}

                                <div className="p-5">
                                    <h3 className="font-bold text-cyan-500 dark:text-cyan-400">
                                        {cert.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                                        Issued by {cert.issuer}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* View All Certificates Button */}
                    <div className="text-center mt-12">
                        <a
                            href="https://drive.google.com/drive/folders/1qP681uZECWhty3jlH8b2ap93dhPDowUd?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition"
                        >
                            View All Certificates
                        </a>
                    </div>

                </div>
            </section>
        </FadeInSection>
    );
};

export default Certifications;