import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/Components/components/ui/card';
import { Badge } from '@/Components/components/ui/badge';

export default function ExperienceSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const experiences = [
        {
            title: 'Senior Software Developer',
            company: 'Tech Innovations Inc.',
            period: '2021 - Present',
            description:
                'Leading the development of web applications using React and Node.js. Implementing CI/CD pipelines and mentoring junior developers.',
            responsibilities: [
                'Architecting scalable web applications',
                'Code reviews and quality assurance',
                'Implementing new features and maintaining existing codebase',
                'Collaborating with product and design teams',
            ],
            technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
        },
        {
            title: 'Full Stack Developer',
            company: 'Digital Solutions Ltd.',
            period: '2018 - 2021',
            description:
                'Developed and maintained web applications for clients in various industries. Worked on both frontend and backend development.',
            responsibilities: [
                'Building responsive user interfaces',
                'Developing RESTful APIs',
                'Database design and optimization',
                'Troubleshooting and debugging',
            ],
            technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'AWS'],
        },
        {
            title: 'Freelance Web Developer',
            company: 'Self-employed',
            period: '2016 - 2018',
            description:
                'Worked with clients to design and develop websites and web applications. Managed projects from concept to deployment.',
            responsibilities: [
                'Client consultation and requirement gathering',
                'Website design and development',
                'E-commerce implementation',
                'Maintenance and support',
            ],
            technologies: ['WordPress', 'PHP', 'JavaScript', 'HTML/CSS', 'MySQL'],
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
        hidden: { opacity: 0, y: 50 },
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
        <section id="experience" className="py-16 bg-muted/30 dark:bg-muted/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-foreground">Experience</h2>
                    <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
                </motion.div>

                <motion.div
                    className="space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {experiences.map((exp, index) => (
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
                                            <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                                            <p className="text-lg text-primary">{exp.company}</p>
                                        </div>
                                        <div className="mt-2 md:mt-0">
                                            <Badge variant="outline" className="text-sm font-medium border-primary/50 text-primary">
                                                {exp.period}
                                            </Badge>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                                    <div className="mb-4">
                                        <h4 className="font-medium text-foreground mb-2">Key Responsibilities:</h4>
                                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                            {exp.responsibilities.map((resp, respIndex) => (
                                                <li key={respIndex}>{resp}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <Badge
                                                key={techIndex}
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
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
