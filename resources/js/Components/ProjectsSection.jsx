import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/Components/components/ui/card';
import { Badge } from '@/Components/components/ui/badge';
import { Button } from '@/Components/components/ui/button';

export default function ProjectsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const projects = [
        {
            title: 'Blog Platform',
            description: 'A full-featured blog platform with user authentication, markdown support, and comment system.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
            image: '/images/placeholder-project1.jpg',
            liveLink: 'https://example.com/blog-project',
            githubLink: 'https://github.com/username/blog-project',
            challenge:
                'Implementing real-time comment updates was challenging. I solved it using Socket.io for instant notifications and updates without page refresh.',
        },
        {
            title: 'API Management System',
            description: 'A system for managing and monitoring API endpoints, with analytics and documentation features.',
            technologies: ['Laravel', 'MySQL', 'Vue.js', 'Docker'],
            image: '/images/placeholder-project2.jpg',
            liveLink: 'https://example.com/api-system',
            githubLink: 'https://github.com/username/api-system',
            challenge:
                'Handling rate limiting and caching for high-traffic APIs was complex. I implemented a Redis-based solution with fallback mechanisms for reliability.',
        },
        {
            title: 'Audio Analysis Tool',
            description: 'A tool for analyzing audio files, visualizing frequencies, and extracting metadata.',
            technologies: ['Python', 'TensorFlow', 'Flask', 'Web Audio API'],
            image: '/images/placeholder-project3.jpg',
            liveLink: 'https://example.com/audio-tool',
            githubLink: 'https://github.com/username/audio-tool',
            challenge:
                'Processing large audio files efficiently was difficult. I implemented a chunking algorithm that processes segments in parallel while maintaining context.',
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
        <section id="projects" className="py-16 bg-muted/30 dark:bg-muted/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-foreground">Projects</h2>
                    <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="overflow-hidden flex flex-col h-full border-none shadow-lg bg-card/50 backdrop-blur-sm">
                                <div className="relative h-48 w-full overflow-hidden group">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                                        <div className="flex space-x-3">
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                                            >
                                                <a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center"
                                                >
                                                    <ExternalLink className="h-4 w-4 mr-1" />
                                                    Live Demo
                                                </a>
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                                            >
                                                <a
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center"
                                                >
                                                    <Github className="h-4 w-4 mr-1" />
                                                    Code
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                                    <p className="text-muted-foreground mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <Badge
                                                key={techIndex}
                                                variant="secondary"
                                                className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="mt-auto">
                                        <h4 className="font-medium text-foreground mb-2">Challenge & Solution</h4>
                                        <p className="text-sm text-muted-foreground mb-4">{project.challenge}</p>
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
