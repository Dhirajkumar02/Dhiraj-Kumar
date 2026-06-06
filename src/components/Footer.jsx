import {
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            className="
            bg-white text-gray-900
            dark:bg-slate-900 dark:text-white

            border-t border-gray-300
            dark:border-slate-700

            py-10
            transition-colors duration-500
        "
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-cyan-500 dark:text-cyan-400">
                            Dhiraj Kumar
                        </h3>

                        <p className="mt-3 text-gray-600 dark:text-gray-400">
                            Software Engineer | Qt & C++ Developer |
                            Java Full Stack Developer
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Quick Links
                        </h4>

                        <div className="flex flex-col gap-2">

                            <a
                                href="#hero"
                                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
                            >
                                Home
                            </a>

                            <a
                                href="#about"
                                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
                            >
                                About
                            </a>

                            <a
                                href="#experience"
                                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
                            >
                                Experience
                            </a>

                            <a
                                href="#projects"
                                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
                            >
                                Projects
                            </a>

                            <a
                                href="#contact"
                                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
                            >
                                Contact
                            </a>

                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Connect
                        </h4>

                        <div className="flex gap-5">

                            <a
                                href="https://github.com/Dhirajkumar02"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                text-2xl
                                text-gray-600 dark:text-gray-400
                                hover:text-cyan-500 dark:hover:text-cyan-400
                                hover:scale-110
                                transition-all duration-300
                            "
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/dhirajkumar02/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                text-2xl
                                text-gray-600 dark:text-gray-400
                                hover:text-cyan-500 dark:hover:text-cyan-400
                                hover:scale-110
                                transition-all duration-300
                            "
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="mailto:dhirajkumarsaah@gmail.com"
                                className="
                                text-2xl
                                text-gray-600 dark:text-gray-400
                                hover:text-cyan-500 dark:hover:text-cyan-400
                                hover:scale-110
                                transition-all duration-300
                            "
                            >
                                <FaEnvelope />
                            </a>
                            <a
                                href="https://twitter.com/Dhiraj_kumar_02"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                text-2xl
                                text-gray-600 dark:text-gray-400
                                hover:text-cyan-500 dark:hover:text-cyan-400
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
                                text-2xl
                                text-gray-600 dark:text-gray-400
                                hover:text-cyan-500 dark:hover:text-cyan-400
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
                                text-2xl
                                text-gray-600 dark:text-gray-400
                                hover:text-cyan-500 dark:hover:text-cyan-400
                                hover:scale-110
                                transition-all duration-300
                            "
                            >
                                <FaFacebook />
                            </a>

                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-300 dark:border-slate-700 mt-8 pt-6 text-center">
                    <p className="text-gray-500 dark:text-gray-500">
                        © 2026 Dhiraj Kumar. All Rights Reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;