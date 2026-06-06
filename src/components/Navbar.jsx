import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const links = [
        { id: 1, name: "Home", href: "#hero" },
        { id: 2, name: "About", href: "#about" },
        { id: 3, name: "Experience", href: "#experience" },
        { id: 4, name: "Projects", href: "#projects" },
        { id: 5, name: "Skills", href: "#skills" },
        { id: 6, name: "Certifications", href: "#certifications" },
        { id: 7, name: "Contact", href: "#contact" },
    ];

    // Load saved theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("darkMode");

        if (savedTheme !== null) {
            const isDark = JSON.parse(savedTheme);
            setDarkMode(isDark);

            if (isDark) {
                document.documentElement.classList.add("dark");
            }
        }
    }, []);

    // Toggle theme
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    };

    return (
        <nav className="fixed w-full top-0 left-0 z-50 bg-white/80 text-gray-900 dark:bg-slate-900/60 dark:text-white
                        backdrop-blur-xl border-b border-white/10 shadow-lg transition-all duration-500">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <a href="#hero" className="text-2xl font-bold text-cyan-400 dark:text-cyan-500">
                    Dhiraj <span className="text-gray dark:text-white-900"> Kumar</span>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-lg font-medium items-center">
                    {links.map(({ id, name, href }) => (
                        <li key={id}>
                            <a
                                href={href}
                                className="hover:text-cyan-400 dark:hover:text-cyan-500 transition-colors"
                            >
                                {name}
                            </a>
                        </li>
                    ))}

                    <li>
                        <a
                            href="/Dhiraj_Kumar_Resume_2026.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg text-white transition"
                        >
                            Resume
                        </a>
                    </li>

                    {/* Dark/Light Toggle */}
                    <li>
                        <button
                            onClick={toggleDarkMode}
                            className="ml-4 p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-300 transition"
                        >
                            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
                        </button>
                    </li>
                </ul>

                {/* Mobile Hamburger */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleDarkMode}
                        className="md:hidden p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-300 transition"
                    >
                        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-2xl focus:outline-none"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 text-gray-900 dark:bg-slate-950/95 dark:text-white flex flex-col items-center gap-6 py-8 transition-colors duration-500">
                    {links.map(({ id, name, href }) => (
                        <a
                            key={id}
                            href={href}
                            className="hover:text-cyan-400 relative transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {name}
                        </a>
                    ))}

                    <a
                        href="/Dhiraj_Kumar_Resume_2026.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-cyan-500 px-4 py-2 rounded-lg text-white"
                    >
                        Download Resume
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
