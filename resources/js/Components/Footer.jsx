"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

import { Tooltip } from "./components/ui/tooltip";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <motion.div
                        className="md:col-span-2"
                        variants={itemVariants}
                    >
                        <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                            Mehmet Dora
                        </h3>
                        <p className="text-gray-400 mb-4 max-w-md">
                            A passionate backend developer specializing in web
                            and mobile application with background development. Always eager to
                            learn new technologies and solve complex problems.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                {
                                    icon: Github,
                                    href: "https://github.com/Mehmetdora",
                                    label: "GitHub",
                                },
                                {
                                    icon: Linkedin,
                                    href: "https://linkedin.com/in/mehmet-dora-699a02226",
                                    label: "LinkedIn",
                                },
                                {
                                    icon: Mail,
                                    href: "mailto:mehmetdora333@gmail.com",
                                    label: "Email",
                                },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label={social.label}
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: [0, -10, 10, -5, 5, 0],
                                        transition: { duration: 0.5 },
                                    }}
                                >
                                    <social.icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold mb-4 text-gray-200">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {[
                                { name: "Home", href: "#home" },
                                { name: "About", href: "#about" },
                                { name: "Projects", href: "#projects" },
                                { name: "Blog", href: "#blog" },
                                { name: "Contact", href: "#contact" },
                            ].map((link, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <h4 className="text-lg font-semibold mb-4 text-gray-200">
                            Contact Info
                        </h4>
                        <ul className="space-y-2 text-gray-400">
                            <motion.li
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                Mersin, TR
                            </motion.li>
                            <motion.li
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                mehmetdora333@gmail.com
                            </motion.li>
                            <motion.li
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                +90 537 824 4539
                            </motion.li>
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <p>© {currentYear} Mehmet Dora. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
}
