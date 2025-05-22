import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/Components/components/ui/card";
import { Badge } from "@/Components/components/ui/badge";
import { Button } from "@/Components/components/ui/button";
import { Link } from "@inertiajs/react";
import SectionHeader from "@/Components/components/ui/section-header";

export default function ProjectsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const projects = [
        {
            id: 1,
            slug: "blog-platform",
            title: "Blog Platform",
            description:
                "A full-featured blog platform with user authentication, markdown support, and comment system.",
            technologies: ["Laravel", "Bootstrap", "MYSQL", "Livewire"],
            image: "/images/placeholder-project1.jpg",
            liveLink: "https://example.com/blog-project",
            githubLink: "https://github.com/username/blog-project",
            challenge:
                "Implementing real-time comment updates was challenging. I solved it using Socket.io for instant notifications and updates without page refresh.",
        },
        {
            id: 2,
            slug: "api-management-system",
            title: "API Management System",
            description:
                "A system for managing and monitoring API endpoints, with analytics and documentation features.",
            technologies: ["Laravel", "MySQL", "Vue.js", "Docker"],
            image: "/images/placeholder-project2.jpg",
            liveLink: "https://example.com/api-system",
            githubLink: "https://github.com/username/api-system",
            challenge:
                "Handling rate limiting and caching for high-traffic APIs was complex. I implemented a Redis-based solution with fallback mechanisms for reliability.",
        },
        {
            id: 3,
            slug: "audio-analysis-tool",
            title: "Audio Analysis Tool",
            description:
                "A tool for analyzing audio files, visualizing frequencies, and extracting metadata.",
            technologies: ["Python", "TensorFlow", "Flask", "Web Audio API"],
            image: "/images/placeholder-project3.jpg",
            liveLink: "https://example.com/audio-tool",
            githubLink: "https://github.com/username/audio-tool",
            challenge:
                "Processing large audio files efficiently was difficult. I implemented a chunking algorithm that processes segments in parallel while maintaining context.",
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
        <section
            id="projects"
            className="py-8 sm:py-12 md:py-16 bg-muted/30 dark:bg-muted/10"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <SectionHeader title="Projects" />

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
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
                                <div className="relative h-40 sm:h-48 w-full overflow-hidden group">
                                    <img
                                        src={
                                            project.image || "/placeholder.svg"
                                        }
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                                        <div className="flex space-x-2 sm:space-x-3">
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-xs sm:text-sm"
                                            >
                                                <a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center"
                                                >
                                                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                                    <span className="hidden sm:inline">
                                                        Live Demo
                                                    </span>
                                                    <span className="sm:hidden">
                                                        Demo
                                                    </span>
                                                </a>
                                            </Button>
                                            <Button
                                                variant="secondary"
                                                size="sm"
                                                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-xs sm:text-sm"
                                            >
                                                <a
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center"
                                                >
                                                    <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                                                    <span className="hidden sm:inline">
                                                        Code
                                                    </span>
                                                    <span className="sm:hidden">
                                                        Code
                                                    </span>
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <CardContent className="p-4 sm:p-6 flex-grow flex flex-col">
                                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies
                                            .slice(0, 2)
                                            .map((tech, techIndex) => (
                                                <Badge
                                                    key={techIndex}
                                                    variant="secondary"
                                                    className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-xs"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        {project.technologies.length > 2 && (
                                            <Badge
                                                variant="outline"
                                                className="text-xs"
                                            >
                                                +
                                                {project.technologies.length -
                                                    2}
                                            </Badge>
                                        )}
                                    </div>

                                    <div className="mt-auto">
                                        <h4 className="font-medium text-foreground mb-2 text-sm sm:text-base">
                                            Challenge & Solution
                                        </h4>
                                        <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-2">
                                            {project.challenge}
                                        </p>
                                        <Link
                                            href={route(
                                                "projects.detail",
                                                project.slug
                                            )}
                                        >
                                            <Button className="w-full bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-400 transition-colors text-xs sm:text-sm">
                                                View Details
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center mt-8 sm:mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link href={route("projects.index")}>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary/10"
                        >
                            View All Projects
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
