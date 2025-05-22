import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/Components/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export default function EducationSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const education = [
        {
            degree: "Bachelor of Science in Computer Engineering",
            institution: "Çukurova University",
            location: "Adana, Turkey",
            period: "2021 - Present",
            description:
                "Currently pursuing a bachelor's degree in Computer Engineering. Completed the preparatory year in 2021 and currently in the 3rd year of study.",
            achievements: [
                "Completed core courses such as Object-Oriented Programming, Data Structures, SQL, and Computer Networking",
                "Actively involved in hands-on projects and academic coursework",
            ],
        },
    ];

    const certifications = [
        {
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "Dec 2021",
            description:
                "Professional certification validating expertise in designing distributed systems on AWS.",
        },
        {
            name: "Google Professional Cloud Developer",
            issuer: "Google Cloud",
            date: "Aug 2021",
            description:
                "Advanced certification for building scalable and reliable applications using Google Cloud.",
        },
        {
            name: "React Advanced Patterns",
            issuer: "Frontend Masters",
            date: "Mar 2021",
            description:
                "In-depth course on advanced React patterns, performance optimization, and best practices.",
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

    return (
        <section id="education" className="py-8 sm:py-12 md:py-16">
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
                        Education
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
                    <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
                        My academic background and professional certifications.
                    </p>
                </motion.div>

                <motion.div
                    className="space-y-6 sm:space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 flex items-center">
                        <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-primary" />
                        Academic Education
                    </h3>

                    {education.map((item, index) => (
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
                                            <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8" />
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 sm:mb-3">
                                                <h4 className="text-lg sm:text-xl font-semibold text-foreground">
                                                    {item.degree}
                                                </h4>
                                                <div className="flex items-center text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-0">
                                                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                                    <span>{item.period}</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-3 sm:mb-4">
                                                <div className="text-base sm:text-lg font-medium text-primary">
                                                    {item.institution}
                                                </div>
                                                <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                                                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                                    <span>{item.location}</span>
                                                </div>
                                            </div>

                                            <p className="text-sm sm:text-base text-muted-foreground mb-4">
                                                {item.description}
                                            </p>

                                            <div>
                                                <h5 className="text-sm sm:text-base font-medium text-foreground mb-2">
                                                    Key Achievements:
                                                </h5>
                                                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-muted-foreground">
                                                    {item.achievements.map(
                                                        (achievement, i) => (
                                                            <li key={i}>
                                                                {achievement}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}

                    {/* <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 mt-8 sm:mt-12 flex items-center">
                        <Award className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-primary" />
                        Certifications
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                custom={index + education.length}
                                variants={cardVariants}
                            >
                                <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm h-full">
                                    <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                                        <div className="flex items-start mb-3 sm:mb-4">
                                            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary mr-3">
                                                <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-base sm:text-lg font-semibold text-foreground">
                                                    {cert.name}
                                                </h4>
                                                <div className="flex items-center text-xs sm:text-sm text-muted-foreground mt-1">
                                                    <span>{cert.issuer}</span>
                                                    <span className="mx-2">
                                                        •
                                                    </span>
                                                    <span>{cert.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs sm:text-sm text-muted-foreground mt-auto">
                                            {cert.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div> */}
                </motion.div>
            </div>
        </section>
    );
}
