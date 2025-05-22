import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/Components/components/ui/card";
import SectionHeader from "@/Components/components/ui/section-header";

/*
    iconlar için;
    https://simpleicons.org/?q=raect
    https://www.svgrepo.com/vectors/docker/
    https://worldvectorlogo.com

*/

export default function SkillsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    // Technology categories with their respective icons/logos
    const skillCategories = [
        {
            name: "Backend",
            description:
                "Technologies I use to build robust server-side applications",
            skills: [
                { name: "Laravel", image: "/skills/laravel.svg" },
                { name: "Node.js", image: "/skills/nodejs.svg" },
                { name: "Python", image: "/skills/python.svg" },
                { name: "Express", image: "/skills/express.svg" },
                { name: "MySQL", image: "/skills/mysql.svg" },
            ],
        },
        {
            name: "DevOps & Tools",
            description:
                "Tools and technologies I use for development and deployment",
            skills: [
                { name: "Git", image: "/skills/git.svg" },
                { name: "Docker", image: "/skills/docker.svg" },
                { name: "GitHub", image: "/skills/github.svg" },
                { name: "VS Code", image: "/skills/vscode.svg" },
            ],
        },
        {
            name: "Frontend",
            description:
                "Technologies I use to build interactive user interfaces and build fast.",
            skills: [
                { name: "React", image: "/skills/react.svg" },
                { name: "Livewire", image: "/skills/livewire.png" },
                { name: "JavaScript", image: "/skills/javascript.svg" },
                { name: "HTML5", image: "/skills/html.svg" },
                { name: "CSS3", image: "/skills/css.svg" },
                { name: "Bootstarp CSS", image: "/skills/bootstrap.svg" },
                { name: "Tailwind CSS", image: "/skills/tailwind.svg" },
            ],
        },
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
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            },
        }),
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3 },
        },
    };

    return (
        <section
            id="skills"
            className="py-8 sm:py-12 md:py-16 bg-muted/30 dark:bg-muted/10"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <SectionHeader
                    title="Skills"
                    description="Technologies and tools I've worked with throughout my career"
                />

                <motion.div
                    className="space-y-8 sm:space-y-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            custom={categoryIndex}
                            variants={cardVariants}
                        >
                            <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm overflow-hidden">
                                <div className="h-1 bg-gradient-to-r from-primary to-emerald-500"></div>
                                <CardContent className="p-6 sm:p-8">
                                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm sm:text-base text-muted-foreground mb-6">
                                        {category.description}
                                    </p>

                                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
                                        {category.skills.map(
                                            (skill, skillIndex) => (
                                                <motion.div
                                                    key={skillIndex}
                                                    className="flex flex-col items-center"
                                                    variants={itemVariants}
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                                                        {/* Fallback for demo purposes - in production, use actual logos */}
                                                        {skill.image ? (
                                                            <img
                                                                src={
                                                                    skill.image ||
                                                                    "/placeholder.svg"
                                                                }
                                                                alt={`${skill.name} logo`}
                                                                className="max-w-full max-h-full object-contain"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-emerald-500/20 rounded flex items-center justify-center">
                                                                <span className="text-primary font-bold text-lg">
                                                                    {skill.name.charAt(
                                                                        0
                                                                    )}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <span className="text-xs sm:text-sm font-medium text-center">
                                                        {skill.name}
                                                    </span>
                                                </motion.div>
                                            )
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Additional Skills */}
                <motion.div
                    className="mt-8 sm:mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-6 sm:p-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 text-center">
                                Other Skills
                            </h3>
                            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                                {[
                                    "Swift",
                                    "BeautifulSoup-Python",
                                    "RESTful APIs",
                                    "Responsive Design",
                                    "Performance Optimization",
                                    "JQuery",
                                    "Eloqunet ORM - Laravel",
                                ].map((skill, index) => (
                                    <motion.span
                                        key={index}
                                        className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={
                                            isInView
                                                ? { opacity: 1, scale: 1 }
                                                : { opacity: 0, scale: 0.8 }
                                        }
                                        transition={{
                                            delay: 0.7 + index * 0.05,
                                            duration: 0.3,
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            backgroundColor:
                                                "rgba(var(--primary), 0.2)",
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
