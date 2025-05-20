import { useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/Components/components/ui/card';
import { Badge } from '@/Components/components/ui/badge';

export default function EducationSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const education = [
        {
            degree: 'Master of Science in Computer Science',
            institution: 'University of Technology',
            period: '2016 - 2018',
            description: 'Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.',
            courses: ['Advanced Algorithms', 'Machine Learning', 'Software Architecture', 'Distributed Systems'],
        },
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'State University',
            period: '2012 - 2016',
            description: 'Focused on programming fundamentals, data structures, and web development.',
            courses: ['Data Structures and Algorithms', 'Database Systems', 'Web Development', 'Operating Systems'],
        },
    ];

    const events = [
        {
            title: 'Web Development Summit',
            organizer: 'TechConf',
            year: '2023',
            description: 'Participated in workshops on modern web development practices and emerging technologies.',
        },
        {
            title: 'AI and Machine Learning Conference',
            organizer: 'AI Global',
            year: '2022',
            description: 'Attended sessions on the latest advancements in AI and their applications in software development.',
        },
        {
            title: 'Open Source Contributors Meetup',
            organizer: 'OSS Community',
            year: '2021',
            description: 'Collaborated with other developers on open-source projects and shared experiences.',
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

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
            },
        }),
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
            },
        }),
    };

    return (
        <section id="education" className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-foreground">Education</h2>
                    <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.div custom={0} variants={sectionVariants}>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center text-foreground">
                            <GraduationCap className="h-6 w-6 mr-2 text-primary" />
                            Academic Education
                        </h3>

                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    variants={cardVariants}
                                    whileHover={{ x: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm overflow-hidden">
                                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-purple-600"></div>
                                        <CardContent className="p-6 pl-8">
                                            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                                                <div>
                                                    <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                                                    <p className="text-lg text-primary">{edu.institution}</p>
                                                </div>
                                                <div className="mt-2 md:mt-0">
                                                    <Badge variant="outline" className="text-sm font-medium border-primary/50 text-primary">
                                                        {edu.period}
                                                    </Badge>
                                                </div>
                                            </div>

                                            <p className="text-muted-foreground mb-4">{edu.description}</p>

                                            <div>
                                                <h5 className="font-medium text-foreground mb-2">Key Courses:</h5>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {edu.courses.map((course, courseIndex) => (
                                                        <div key={courseIndex} className="bg-primary/10 rounded-md p-2 text-sm text-primary">
                                                            {course}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div custom={1} variants={sectionVariants}>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center text-foreground">
                            <Calendar className="h-6 w-6 mr-2 text-primary" />
                            Conferences & Events
                        </h3>

                        <div className="space-y-6">
                            {events.map((event, index) => (
                                <motion.div
                                    key={index}
                                    custom={index}
                                    variants={cardVariants}
                                    whileHover={{ x: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm overflow-hidden">
                                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-purple-600"></div>
                                        <CardContent className="p-6 pl-8">
                                            <div className="flex justify-between items-start mb-3">
                                                <h4 className="text-lg font-semibold text-foreground">{event.title}</h4>
                                                <Badge className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
                                                    {event.year}
                                                </Badge>
                                            </div>
                                            <p className="text-primary mb-2">{event.organizer}</p>
                                            <p className="text-muted-foreground">{event.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div className="mt-8" custom={4} variants={cardVariants}>
                            <h3 className="text-2xl font-semibold mb-6 flex items-center text-foreground">
                                <Award className="h-6 w-6 mr-2 text-primary" />
                                Additional Certifications
                            </h3>

                            <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
                                <CardContent className="p-6">
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="bg-primary/20 p-2 rounded-full mr-3">
                                                <Award className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-foreground">GitHub Student Pack</h4>
                                                <p className="text-sm text-muted-foreground">GitHub Education</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-primary/20 p-2 rounded-full mr-3">
                                                <Award className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-foreground">AI with Python Certification</h4>
                                                <p className="text-sm text-muted-foreground">Python Institute</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-primary/20 p-2 rounded-full mr-3">
                                                <Award className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-foreground">Google Developer Certification</h4>
                                                <p className="text-sm text-muted-foreground">Google</p>
                                            </div>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
