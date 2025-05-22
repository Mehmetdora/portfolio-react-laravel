import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

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
        <footer className="bg-gradient-to-r from-emerald-900 to-green-800 text-white py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <motion.div
                        className="md:col-span-2"
                        variants={itemVariants}
                    >
                        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-100">
                            Mehmet Dora
                        </h3>
                        <p className="text-sm sm:text-base text-green-100/80 mb-4 max-w-md">
                            A passionate software developer specializing in web
                            and mobile application development. Always eager to
                            learn new technologies and solve complex problems.
                        </p>
                        <div className="flex space-x-3 sm:space-x-4">
                            {[
                                {
                                    icon: Github,
                                    href: "https://github.com/Mehmetdora",
                                    label: "GitHub",
                                },
                                {
                                    icon: Linkedin,
                                    href: "www.linkedin.com/in/mehmet-dora-699a02226",
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
                                    className="text-green-200 hover:text-white transition-colors"
                                    aria-label={social.label}
                                    whileHover={{
                                        scale: 1.2,
                                        rotate: [0, -10, 10, -5, 5, 0],
                                        transition: { duration: 0.5 },
                                    }}
                                >
                                    <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-6 sm:mt-0"
                    >
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-green-100">
                            Quick Links
                        </h4>
                        <ul className="grid grid-cols-2 sm:grid-cols-1 gap-1 sm:gap-2 text-sm sm:text-base">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About", href: "/#about" },
                                { name: "Projects", href: "/projects/index" },
                                { name: "Bio", href: "/#bio" },
                                { name: "Contact", href: "/#contact" },
                            ].map((link, i) => (
                                <motion.li
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-green-200/80 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="mt-6 sm:mt-0"
                    >
                        <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-green-100">
                            Contact Info
                        </h4>
                        <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-green-200/80">
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
                                +90 (537) 824 4539
                            </motion.li>
                        </ul>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="border-t border-green-700 mt-6 sm:mt-10 pt-4 sm:pt-6 text-center text-green-200/60 text-xs sm:text-sm"
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
