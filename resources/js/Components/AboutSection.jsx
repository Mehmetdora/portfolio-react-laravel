import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/Components/components/ui/card";
import { Button } from "@/Components/components/ui/button";
import { Download, User, Code, Coffee, Heart } from "lucide-react";

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const stats = [
        { icon: Code, value: "3+", label: "Years Coding Experience" },
        { icon: Coffee, value: "12+", label: "Projects Completed" },
        { icon: Heart, value: "3+", label: "Happy Clients" },
    ];

    const handleDownload = () => {
        // Show toast notification
        toast({
            title: "Resume downloaded",
            description: "Thank you for your interest in my resume!",
            duration: 3000,
        });
    };

    return (
        <section
            id="about"
            className="py-8 sm:py-12 md:py-16 bg-muted/30 dark:bg-muted/10"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    className="text-center mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                        About Me
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
                    <motion.div
                        className="lg:col-span-2 flex justify-center"
                        initial={{ opacity: 0, x: -30 }}
                        animate={
                            isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -30 }
                        }
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative w-full max-w-sm">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-lg transform rotate-3 scale-105 opacity-20 blur-sm"></div>
                            <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm overflow-hidden h-full">
                                <div className="relative aspect-[4/5] w-full overflow-hidden">
                                    <img
                                        src="/profile_pictures/IMG_2469.JPG?height=500&width=400"
                                        alt="John Doe"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </Card>
                        </div>
                    </motion.div>

                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: 30 }}
                        animate={
                            isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 30 }
                        }
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm h-full">
                            <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col h-full">
                                <div className="flex items-center mb-4 sm:mb-6">
                                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary mr-4">
                                        <User className="h-5 w-5 sm:h-6 sm:w-6" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                                        Mehmet Dora
                                    </h3>
                                </div>

                                <div className="text-sm sm:text-base text-muted-foreground space-y-4 mb-6 flex-grow">
                                    <p>
                                        Hello! I'm a passionate software
                                        developer with over 3+ years of coding
                                        experience in mobile, backend and
                                        frontend technologies.
                                    </p>
                                    <p>
                                        My journey in tech began at{" "}
                                        <b>Çukurova University</b>, where I
                                        started my Bachelor's degree in Computer
                                        Science.
                                    </p>
                                    <p>
                                        I specialize in backend development with
                                        Laravel, but I'm also learning in
                                        backend technologies like Node.js and
                                        Golang. I believe in writing clean,
                                        algoritmic and creating intuitive user
                                        experiences.
                                    </p>
                                    <p>
                                        When I'm not coding, you can find me
                                        swimming, playing guitar, or
                                        experimenting with new technologies. I'm
                                        always eager to learn and take on new
                                        challenges.
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6">
                                    {stats.map((stat, index) => (
                                        <div
                                            key={index}
                                            className="bg-muted/50 rounded-lg p-3 sm:p-4 text-center flex flex-col items-center"
                                        >
                                            <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary mb-1 sm:mb-2" />
                                            <span className="text-lg sm:text-2xl font-bold text-foreground">
                                                {stat.value}
                                            </span>
                                            <span className="text-xs sm:text-sm text-muted-foreground">
                                                {stat.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="/documents/mehmet_dora_cv.pdf"
                                    download="mehmet_dora_cv.pdf"
                                    onClick={handleDownload}
                                    className="inline-block"
                                >
                                    <Button
                                        variant="gradient"
                                        className="w-full sm:w-auto group relative overflow-hidden"
                                    >
                                        <span className="flex items-center justify-center relative z-10">
                                            <Download className="h-4 w-4 mr-2 transition-transform group-hover:translate-y-1" />
                                            Download Resume
                                        </span>
                                        <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </Button>
                                </a>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
