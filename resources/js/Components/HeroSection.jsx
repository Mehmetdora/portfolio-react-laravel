import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/Components/components/ui/button";
import { GreenGradientText } from "./components/ui/green-gradient";

export default function HeroSection() {
    const scrollToContact = () => {
        document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/10 z-0"></div>

            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden z-0">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-br from-primary/20 to-emerald-500/20 blur-3xl"
                        style={{
                            width: `${Math.random() * 400 + 200}px`,
                            height: `${Math.random() * 400 + 200}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-4 sm:mb-6"
                    >
                        <div className="inline-block relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-emerald-500 rounded-full blur-md opacity-70 scale-110"></div>
                            <img
                                src="/profile_pictures/IMG_1467.JPG?height=150&width=150"
                                alt="Mehmet Dora"
                                className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-background"
                            />
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6"
                    >
                        Hi, I'm{" "}
                        <GreenGradientText>Mehmet Dora</GreenGradientText>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative mb-6 sm:mb-8"
                    >
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground">
                            I'm a{" "}
                            <span className="text-foreground font-semibold">
                                Backend Developer
                            </span>
                        </h2>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-12 sm:w-16 bg-gradient-to-r from-primary to-emerald-500 rounded-full"></div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mb-8 sm:mb-10"
                    >
                        Specializing in creating functional, secure and
                        user-friendly digital experiences. With expertise in
                        PHP-Laravel, React, Node.js-Express.js, and modern web
                        technologies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
                    >
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-400 transition-colors"
                            onClick={scrollToContact}
                        >
                            Contact Me
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary/10"
                        >
                            View Projects
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex space-x-4 sm:space-x-6"
                    >
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
                                href: "mailto:mehmetdora@gmail.com",
                                label: "Email",
                            },
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                                aria-label={social.label}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: [0, -10, 10, -5, 5, 0],
                                    transition: { duration: 0.5 },
                                }}
                            >
                                <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                    ></motion.div>
                </motion.div>
            </div>
        </section>
    );
}
