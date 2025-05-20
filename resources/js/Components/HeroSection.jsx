import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/Components/components/ui/button";

export default function HeroSection() {
    const [typedText, setTypedText] = useState("");
    const fullText = "I Am A Backend Developer.";

    useEffect(() => {
        if (typedText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setTypedText(fullText.slice(0, typedText.length + 1));
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [typedText]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.6,
            },
        },
    };

    const socialVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i) => ({
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                delay: 1 + i * 0.1,
            },
        }),
    };

    return (
        <section
            id="home"
            className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-between gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="md:w-1/2">
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
                            variants={itemVariants}
                        >
                            Hello, I'm Mehmet Dora.
                        </motion.h1>
                        <motion.h2
                            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/80 mb-6 h-10"
                            variants={itemVariants}
                        >
                            {typedText}
                            <span className="animate-pulse">|</span>
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground mb-8 max-w-lg"
                            variants={itemVariants}
                        >
                            I am a backend developer specializing in web and
                            mobile application's background process.
                        </motion.p>

                        <motion.div
                            className="flex space-x-4"
                            variants={itemVariants}
                        >
                            {[
                                {
                                    icon: Github,
                                    url: "https://github.com/Mehmetdora",
                                },
                                {
                                    icon: Linkedin,
                                    url: "https://linkedin.com/in/mehmet-dora-699a02226",
                                },
                                {
                                    icon: Mail,
                                    url: "mailto:mehmetdora333@gmail.com",
                                },
                            ].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    custom={i}
                                    variants={socialVariants}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: [0, -10, 10, -5, 5, 0],
                                        transition: { duration: 0.5 },
                                    }}
                                    href={Icon.url || "https://www.google.com"}

                                >
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                                    >
                                        <Icon.icon className="h-5 w-5 text-primary" />
                                    </Button>
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        className="md:w-1/2 flex justify-center"
                        variants={imageVariants}
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-600 blur-xl opacity-30 animate-pulse"></div>
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                                <img
                                    src="{/images/placeholder.jpg}"
                                    alt="Mehmet Dora"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
