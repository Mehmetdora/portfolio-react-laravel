import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/Components/components/ui/card";
import { Badge } from "@/Components/components/ui/badge";
import { Calendar, Briefcase, MapPin } from 'lucide-react';

export default function ExperienceSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const experiences = [
        {
            title: "Intern - Backend Developing",
            company: "SEYTİM",
            location: "Adana, TR",
            period: "July 2024 - August 2024",
            description:
                "Bu stajımda backend için laravel kullanarak çok kullanıcılı bir blog platformunun yapımına ortak oldum.",
            responsibilities: [
                "Hazır temalar ve bootstarp üzerinde uygun araçları kullandım",
                "Laravel ile verilerin işlenmesi ve veritabanı işlemlerini gerçekleştirdim",
                "Eloquent-ORM kullanarak ilişkili verilerin MySQL de tutulmasını sağladım",
            ],
            technologies: [
                "PHP-Laravel",
                "MySQL",
                "Bootstrap",
                "JQuery",
                "Ajax",
            ],
        }
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

    return (
        <section
            id="experience"
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
                        Experience
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
                    <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
                        My professional journey and the companies I've had the
                        pleasure to work with.
                    </p>
                </motion.div>

                <motion.div
                    className="space-y-6 sm:space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                        >
                            <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm overflow-hidden">
                                <div className="h-2 bg-gradient-to-r from-primary to-purple-600"></div>
                                <CardContent className="p-4 sm:p-6 md:p-8">
                                    <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6">
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 text-primary">
                                            <Briefcase className="h-6 w-6 sm:h-8 sm:w-8" />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 sm:mb-3">
                                                <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                                                    {experience.title}
                                                </h3>
                                                <div className="flex items-center text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-0">
                                                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                                    <span>
                                                        {experience.period}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-3 sm:mb-4">
                                                <div className="text-base sm:text-lg font-medium text-primary">
                                                    {experience.company}
                                                </div>
                                                <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                                                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                                    <span>
                                                        {experience.location}
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="text-sm sm:text-base text-muted-foreground mb-4">
                                                {experience.description}
                                            </p>

                                            <div className="mb-4">
                                                <h4 className="text-sm sm:text-base font-medium text-foreground mb-2">
                                                    Key Responsibilities:
                                                </h4>
                                                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-muted-foreground">
                                                    {experience.responsibilities.map(
                                                        (responsibility, i) => (
                                                            <li key={i}>
                                                                {responsibility}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {experience.technologies.map(
                                                    (tech, i) => (
                                                        <Badge
                                                            key={i}
                                                            variant="secondary"
                                                            className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-xs"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
