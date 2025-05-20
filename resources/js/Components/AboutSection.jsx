import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/Components/components/ui/card";
import { Badge } from "@/Components/components/ui/badge";

export default function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const technologies = [
        "PHP",
        "Laravel",
        "Livewire",
        "React",
        "Bootstarp",
        "Swift-UIKit",
        "Python",
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
            },
        }),
    };

    return (
        <section id="about" className="py-16 bg-muted/30 dark:bg-muted/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-foreground">
                        About Me
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div custom={0} variants={cardVariants}>
                        <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4 text-foreground">
                                    Professional Background
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    I am a passionate software developer with a
                                    strong background in web and mobile
                                    application development. With several years
                                    of experience in the industry, I have worked
                                    on a variety of projects ranging from small
                                    business websites to complex enterprise
                                    applications.
                                </p>
                                <p className="text-muted-foreground mb-6">
                                    My educational background in Computer
                                    Science has provided me with a solid
                                    foundation in software development
                                    principles and practices. I am currently
                                    focused on expanding my knowledge in cloud
                                    technologies and microservices architecture.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {technologies.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div custom={1} variants={cardVariants}>
                        <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4 text-foreground">
                                    Goals & Interests
                                </h3>
                                <div className="mb-6">
                                    <h4 className="font-medium text-foreground mb-2">
                                        Career Goals
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Short-term: I want to specialize in
                                        backend and API development, focusing on
                                        scalable and maintainable solutions.
                                    </p>
                                    <p className="text-muted-foreground mt-2">
                                        Long-term: I aim to lead development
                                        teams and contribute to open-source
                                        projects that make a positive impact.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-medium text-foreground mb-2">
                                        Hobbies & Interests
                                    </h4>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                        <li>Photography and digital art</li>
                                        <li>Hiking and outdoor adventures</li>
                                        <li>
                                            Reading science fiction and
                                            technical books
                                        </li>
                                        <li>
                                            Contributing to open-source projects
                                        </li>
                                        <li>
                                            Playing chess and strategy games
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
