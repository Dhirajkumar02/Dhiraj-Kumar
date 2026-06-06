import { motion } from "framer-motion";
import { FaCode, FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import profileImage from "../assets/profile_pic.jpeg";

const Hero = () => {
    return (
        <section
            id="hero"
            className="
            relative
            min-h-screen
            bg-gray-50 text-gray-900
            dark:bg-slate-950 dark:text-white
            transition-colors duration-500
        "
        >
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-28">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="
                    md:w-1/2
                    text-center md:text-left
                    text-gray-900
                    dark:text-white
                "
                >
                    {/* Badge */}
                    <div
                        className="
                        inline-block
                        bg-cyan-100 text-cyan-700
                        dark:bg-cyan-500/20 dark:text-cyan-300
                        px-4 py-2 rounded-full mb-6
                    "
                    >
                        🚀 Apprentice Trainee @ LRDE-DRDO
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                        Hi, I'm{" "}
                        <span className="text-cyan-500 dark:text-cyan-400">
                            Dhiraj Kumar
                        </span>
                    </h1>

                    {/* Roles */}
                    <div className="mb-6 space-y-2">

                        <p className="text-cyan-500 dark:text-cyan-400 text-xl md:text-2xl font-semibold">
                            Software Engineer
                        </p>

                        <p className="text-gray-800 dark:text-white text-xl md:text-2xl font-semibold">
                            Qt & C++ Developer
                        </p>

                        <p className="text-gray-600 dark:text-gray-300 text-xl md:text-2xl font-semibold">
                            Java Full Stack Developer
                        </p>

                    </div>

                    {/* Description */}
                    <p
                        className="
                        text-lg md:text-xl
                        text-gray-700
                        dark:text-gray-400
                        max-w-2xl mb-6
                    "
                    >
                        Currently working at LRDE-DRDO on Radar Technology
                        Projects, developing Real-Time Log Analyzer and Radar
                        Display Applications using Qt, C++, Networking, and
                        Multithreading.
                    </p>

                    {/* Location */}
                    <p className="text-gray-600 dark:text-gray-500 mt-2">
                        📍 Bengaluru, India
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">

                        <a
                            href="#projects"
                            className="
                            bg-cyan-500
                            hover:bg-cyan-600
                            text-white
                            px-6 py-3
                            rounded-lg
                            font-semibold
                            transition
                        "
                        >
                            View Projects
                        </a>

                        <a
                            href="/Dhiraj_Kumar_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            border
                            border-gray-900
                            text-gray-900
                            hover:bg-gray-900
                            hover:text-white

                            dark:border-white
                            dark:text-white
                            dark:hover:bg-white
                            dark:hover:text-black

                            px-6 py-3
                            rounded-lg
                            font-semibold
                            transition
                        "
                        >
                            Download Resume
                        </a>

                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-start gap-5 text-2xl mt-6">

                        <a
                            href="https://www.linkedin.com/in/dhirajkumar02/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            text-gray-700
                            dark:text-white
                            hover:text-cyan-400
                            hover:scale-110
                            transition-all duration-300
                        "
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://leetcode.com/u/dhirajkumar02/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            text-gray-700
                            dark:text-white
                            hover:text-cyan-400
                            hover:scale-110
                            transition-all duration-300
                        "
                        >
                            <FaCode />
                        </a>

                        <a
                            href="mailto:dhirajkumarsaah@gmail.com"
                            className="
                            text-gray-700
                            dark:text-white
                            hover:text-cyan-400
                            hover:scale-110
                            transition-all duration-300
                        "
                        >
                            <FaEnvelope />
                        </a>

                        <a
                            href="https://github.com/Dhirajkumar02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            text-gray-700
                            dark:text-white
                            hover:text-cyan-400
                            hover:scale-110
                            transition-all duration-300
                        "
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://twitter.com/Dhiraj_kumar_02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            text-gray-700
                            dark:text-white
                            hover:text-cyan-400
                            hover:scale-110
                            transition-all duration-300
                        "
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href="https://www.instagram.com/er.dhirajkumar02/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            text-gray-700
                            dark:text-white
                            hover:text-cyan-400
                            hover:scale-110
                            transition-all duration-300
                        "
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.facebook.com/Er.dhirajkumar02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            text-gray-700
                            dark:text-white
                            hover:text-cyan-400
                            hover:scale-110
                            transition-all duration-300
                        "
                        >
                            <FaFacebook />
                        </a>

                    </div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
                >
                    <img
                        src={profileImage}
                        alt="Dhiraj Kumar"
                        className="
                        w-72 h-72
                        sm:w-80 sm:h-80
                        md:w-[450px] md:h-[450px]
                        rounded-full
                        border-4 border-cyan-500
                        shadow-[0_0_30px_rgba(6,182,212,0.4)]
                        dark:shadow-[0_0_40px_rgba(6,182,212,0.7)]
                        object-cover
                    "
                    />
                </motion.div>
            </div>

            {/* Scroll Indicator */}

        </section>
    );
};

export default Hero;