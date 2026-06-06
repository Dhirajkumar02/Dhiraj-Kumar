import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import {
    FaEnvelope,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaMapMarkerAlt,
    FaUser,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_0q8qbd3",
                "template_cma57zf",
                formRef.current,
                "85R3a-B_fsKnLZl6i"
            )
            .then(
                () => {
                    setLoading(false);
                    formRef.current.reset();
                    toast.success("Message sent successfully!");
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    toast.error("Failed to send message.");
                }
            );
    };

    return (
        <section
            id="contact"
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
                        Get In{" "}
                        <span className="text-cyan-500 dark:text-cyan-400">
                            Touch
                        </span>
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mt-4">
                        Open to Software Engineering opportunities,
                        collaborations, and professional networking.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">

                    {/* Contact Info */}
                    <div className="space-y-6">

                        <div className="bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-xl p-5 shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <FaUser className="text-cyan-500 dark:text-cyan-400 text-2xl" />

                                <div>
                                    <h3 className="font-semibold">Name</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Dhiraj Kumar
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-xl p-5 shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-cyan-500 dark:text-cyan-400 text-2xl" />

                                <div>
                                    <h3 className="font-semibold">Location</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Bengaluru, Karnataka, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-xl p-5 shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-cyan-500 dark:text-cyan-400 text-2xl" />

                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        dhirajkumarsaah@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-8">

                            <a
                                href="https://github.com/Dhirajkumar02"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 p-4 rounded-xl shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300"
                            >
                                <FaGithub className="text-2xl" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/dhirajkumar02/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 p-4 rounded-xl shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300"
                            >
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a
                                href="https://www.instagram.com/er.dhirajkumar02/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 p-4 rounded-xl shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300"
                            >
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a
                                href="https://www.facebook.com/Er.dhirajkumar02"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 p-4 rounded-xl shadow-md hover:shadow-lg hover:border-cyan-400 transition-all duration-300"
                            >
                                <FaFacebook className="text-2xl" />
                            </a>

                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="
                        bg-white dark:bg-slate-900
                        border border-gray-300 dark:border-slate-700
                        rounded-2xl p-8 space-y-5
                        shadow-md
                    "
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="
                            w-full
                            bg-gray-100 dark:bg-slate-800
                            text-gray-900 dark:text-white
                            border border-gray-300 dark:border-slate-700
                            rounded-lg p-3
                            focus:outline-none
                            focus:border-cyan-400
                        "
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="
                            w-full
                            bg-gray-100 dark:bg-slate-800
                            text-gray-900 dark:text-white
                            border border-gray-300 dark:border-slate-700
                            rounded-lg p-3
                            focus:outline-none
                            focus:border-cyan-400
                        "
                        />

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            className="
                            w-full
                            bg-gray-100 dark:bg-slate-800
                            text-gray-900 dark:text-white
                            border border-gray-300 dark:border-slate-700
                            rounded-lg p-3
                            focus:outline-none
                            focus:border-cyan-400
                        "
                        />

                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Your Message"
                            required
                            className="
                            w-full
                            bg-gray-100 dark:bg-slate-800
                            text-gray-900 dark:text-white
                            border border-gray-300 dark:border-slate-700
                            rounded-lg p-3
                            focus:outline-none
                            focus:border-cyan-400
                        "
                        ></textarea>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>

                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                theme="colored"
            />
        </section>
    );
};

export default Contact;
