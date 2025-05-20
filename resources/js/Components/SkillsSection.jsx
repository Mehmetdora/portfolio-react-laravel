import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/Components/components/ui/card';

export default function SkillsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'HTML', level: 90 },
                { name: 'CSS', level: 85 },
                { name: 'JavaScript', level: 88 },
                { name: 'React', level: 82 },
            ],
        },
        {
            title: 'Backend',
            skills: [
                { name: 'PHP (Laravel)', level: 85 },
                { name: 'Python', level: 75 },
                { name: 'Node.js', level: 80 },
            ],
        },
        {
            title: 'Databases',
            skills: [
                { name: 'MySQL', level: 85 },
                { name: 'PostgreSQL', level: 78 },
                { name: 'MongoDB', level: 70 },
            ],
        },
        {
            title: 'Other Tools',
            skills: [
                { name: 'Git', level: 88 },
                { name: 'Docker', level: 75 },
                { name: 'Selenium', level: 70 },
                { name: 'OpenGL (Blender)', level: 65 },
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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

    const progressVariants = {
        hidden: { width: 0 },
        visible: (level) => ({
            width: `${level}%`,
            transition: {
                duration: 1,
                ease: 'easeOut',
            },
        }),
    };

    return (
        <section id="skills" className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-foreground">Skills</h2>
                    <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Card className="overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-sm">
                                <div className="bg-gradient-to-r from-primary to-purple-600 py-3 px-6">
                                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                                </div>
                                <CardContent className="p-6">
                                    <div className="space-y-4">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div key={skillIndex}>
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                                                    <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                                                </div>
                                                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
                                                        custom={skill.level}
                                                        variants={progressVariants}
                                                        initial="hidden"
                                                        animate={isInView ? 'visible' : 'hidden'}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-12"
                    variants={cardVariants}
                    custom={4}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-4 text-foreground">Project Management & Communication</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {['Agile', 'Scrum', 'Git', 'GitHub'].map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-primary/10 rounded-lg p-4 text-center"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <span className="font-medium text-primary">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
