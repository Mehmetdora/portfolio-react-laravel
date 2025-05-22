import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "@inertiajs/react";
import { Search, Filter, ExternalLink, Github } from "lucide-react";
import AppLayout from "@/Layouts/AppLayout";
import { Card, CardContent } from "@/Components/components/ui/card";
import { Badge } from "@/Components/components/ui/badge";
import { Button } from "@/Components/components/ui/button";
import { Input } from "@/Components/components/ui/input";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function Index({ projects }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [showFilters, setShowFilters] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    // Extract unique categories
    const categories = [
        "All",
        ...new Set(projects.map((project) => project.category)),
    ];

    // Filter projects based on search term and category
    const filteredProjects = projects.filter((project) => {
        const matchesSearch =
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            project.technologies.some((tech) =>
                tech.toLowerCase().includes(searchTerm.toLowerCase())
            );

        const matchesCategory =
            selectedCategory === "All" || project.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

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
        <AppLayout title="Mehmet Dora | Projects">
            <Navbar />
            <main className="pt-24">
                <section className="py-8 sm:py-12 md:py-16 bg-muted/30 dark:bg-muted/10">
                    <div
                        className="container mx-auto px-4 sm:px-6 lg:px-8"
                        ref={ref}
                    >
                        <motion.div
                            className="text-center mb-8 sm:mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                isInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                                My Projects
                            </h1>
                            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
                            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto px-4">
                                Explore my portfolio of projects spanning web
                                applications, developer tools, and more. Each
                                project represents a different challenge and
                                solutions.
                            </p>
                        </motion.div>

                        <motion.div
                            className="mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                isInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            {/* Mobile Search and Filter */}
                            <div className="md:hidden space-y-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                    <Input
                                        type="text"
                                        placeholder="Search projects..."
                                        className="pl-10"
                                        value={searchTerm}
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="flex justify-between items-center">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() =>
                                            setShowFilters(!showFilters)
                                        }
                                        className="flex items-center"
                                    >
                                        <Filter className="h-4 w-4 mr-2" />
                                        {showFilters
                                            ? "Hide Filters"
                                            : "Show Filters"}
                                    </Button>
                                    <span className="text-sm text-muted-foreground">
                                        {filteredProjects.length} project
                                        {filteredProjects.length !== 1
                                            ? "s"
                                            : ""}
                                    </span>
                                </div>

                                {showFilters && (
                                    <div className="p-4 bg-background rounded-md shadow-sm border border-border">
                                        <h3 className="font-medium mb-2">
                                            Categories
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {categories.map(
                                                (category, index) => (
                                                    <Badge
                                                        key={index}
                                                        variant={
                                                            selectedCategory ===
                                                            category
                                                                ? "default"
                                                                : "outline"
                                                        }
                                                        className="cursor-pointer"
                                                        onClick={() =>
                                                            setSelectedCategory(
                                                                category
                                                            )
                                                        }
                                                    >
                                                        {category}
                                                    </Badge>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Desktop Search and Filter */}
                            <div className="hidden md:flex md:flex-row justify-between items-center gap-4">
                                <div className="w-full md:w-1/2 relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                                    <Input
                                        type="text"
                                        placeholder="Search projects by name, description, or technology..."
                                        className="pl-10"
                                        value={searchTerm}
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="w-full md:w-auto flex flex-wrap gap-2">
                                    {categories.map((category, index) => (
                                        <Badge
                                            key={index}
                                            variant={
                                                selectedCategory === category
                                                    ? "default"
                                                    : "outline"
                                            }
                                            className="cursor-pointer"
                                            onClick={() =>
                                                setSelectedCategory(category)
                                            }
                                        >
                                            {category}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {filteredProjects.length > 0 ? (
                                filteredProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        custom={index}
                                        variants={cardVariants}
                                        whileHover={{ y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Card className="overflow-hidden flex flex-col h-full border-none shadow-lg bg-card/50 backdrop-blur-sm">
                                            <div className="relative h-48 w-full overflow-hidden group">
                                                <img
                                                    src={
                                                        project.image ||
                                                        "/placeholder.svg"
                                                    }
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
                                                                href={
                                                                    project.liveLink
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center"
                                                            >
                                                                <ExternalLink className="h-4 w-4 mr-1" />
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
                                                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                                                        >
                                                            <a
                                                                href={
                                                                    project.githubLink
                                                                }
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center"
                                                            >
                                                                <Github className="h-4 w-4 mr-1" />
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
                                                        .slice(0, 3)
                                                        .map(
                                                            (
                                                                tech,
                                                                techIndex
                                                            ) => (
                                                                <Badge
                                                                    key={
                                                                        techIndex
                                                                    }
                                                                    variant="secondary"
                                                                    className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-xs"
                                                                >
                                                                    {tech}
                                                                </Badge>
                                                            )
                                                        )}
                                                    {project.technologies
                                                        .length > 3 && (
                                                        <Badge
                                                            variant="outline"
                                                            className="text-xs"
                                                        >
                                                            +
                                                            {project
                                                                .technologies
                                                                .length - 3}
                                                        </Badge>
                                                    )}
                                                </div>

                                                <div className="mt-auto">
                                                    <Badge className="mb-4 text-xs">
                                                        {project.category}
                                                    </Badge>
                                                    <Link
                                                        href={route(
                                                            "projects.detail",
                                                            project.slug
                                                        )}
                                                        className="w-full"
                                                    >
                                                        <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500 transition-colors text-sm">
                                                            View Details
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-12">
                                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                                        No projects found
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Try adjusting your search or filter
                                        criteria.
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </AppLayout>
    );
}
