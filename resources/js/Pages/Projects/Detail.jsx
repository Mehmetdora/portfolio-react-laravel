import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "@inertiajs/react";
import {
    ExternalLink,
    Github,
    ChevronLeft,
    ChevronRight,
    Calendar,
    Code,
    CheckCircle,
    Quote,
} from "lucide-react";
import AppLayout from "@/Layouts/AppLayout";
import { Card, CardContent } from "@/Components/components/ui/card";
import { Badge } from "@/Components/components/ui/badge";
import { Button } from "@/Components/components/ui/button";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

export default function Detail({ project, relatedProjects }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prev) =>
                (prev - 1 + project.gallery.length) % project.gallery.length
        );
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <AppLayout title={`${project.title} | Mehmet Dora`}>
            <Navbar />
            <main className="pt-24">
                <section className="py-8 sm:py-12 md:py-16">
                    <div
                        className="container mx-auto px-4 sm:px-6 lg:px-8"
                        ref={ref}
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6 sm:mb-8"
                        >
                            <Link
                                href={route("projects.index")}
                                className="flex items-center text-primary hover:underline"
                            >
                                <ChevronLeft className="h-4 w-4 mr-1" />
                                Back to Projects
                            </Link>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                            <motion.div
                                className="lg:col-span-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="relative overflow-hidden rounded-lg shadow-lg mb-6 aspect-video">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentImageIndex}
                                            src={
                                                project.gallery[
                                                    currentImageIndex
                                                ]
                                            }
                                            alt={`${project.title} screenshot ${
                                                currentImageIndex + 1
                                            }`}
                                            className="w-full h-full object-cover"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </AnimatePresence>

                                    {project.gallery.length > 1 && (
                                        <>
                                            <Button
                                                onClick={prevImage}
                                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 sm:p-2 rounded-full"
                                                aria-label="Previous image"
                                            >
                                                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
                                            </Button>
                                            <Button
                                                onClick={nextImage}
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 sm:p-2 rounded-full"
                                                aria-label="Next image"
                                            >
                                                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
                                            </Button>
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                {project.gallery.map(
                                                    (_, index) => (
                                                        <Button
                                                            key={index}
                                                            onClick={() =>
                                                                setCurrentImageIndex(
                                                                    index
                                                                )
                                                            }
                                                            className={`w-2 h-2 rounded-full ${
                                                                index ===
                                                                currentImageIndex
                                                                    ? "bg-white"
                                                                    : "bg-white/50"
                                                            }`}
                                                            aria-label={`Go to image ${
                                                                index + 1
                                                            }`}
                                                        />
                                                    )
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                >
                                    <motion.h1
                                        className="text-2xl sm:text-3xl font-bold text-foreground mb-4"
                                        variants={itemVariants}
                                    >
                                        {project.title}
                                    </motion.h1>

                                    <motion.div
                                        className="flex flex-wrap gap-2 mb-6"
                                        variants={itemVariants}
                                    >
                                        {project.technologies.map(
                                            (tech, index) => (
                                                <Badge
                                                    key={index}
                                                    variant="secondary"
                                                    className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-xs"
                                                >
                                                    {tech}
                                                </Badge>
                                            )
                                        )}
                                    </motion.div>

                                    <motion.div
                                        className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none mb-8"
                                        variants={itemVariants}
                                    >
                                        <p className="text-muted-foreground">
                                            {project.full_description}
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8"
                                        variants={itemVariants}
                                    >
                                        <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
                                            <CardContent className="p-4 sm:p-6">
                                                <div className="flex items-center mb-4">
                                                    <div className="p-2 rounded-full bg-primary/20 mr-3">
                                                        <Code className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                                                    </div>
                                                    <h3 className="text-lg sm:text-xl font-semibold">
                                                        Challenge
                                                    </h3>
                                                </div>
                                                <p className="text-sm sm:text-base text-muted-foreground">
                                                    {project.challenge}
                                                </p>
                                            </CardContent>
                                        </Card>

                                        <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
                                            <CardContent className="p-4 sm:p-6">
                                                <div className="flex items-center mb-4">
                                                    <div className="p-2 rounded-full bg-primary/20 mr-3">
                                                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                                                    </div>
                                                    <h3 className="text-lg sm:text-xl font-semibold">
                                                        Solution
                                                    </h3>
                                                </div>
                                                <p className="text-sm sm:text-base text-muted-foreground">
                                                    {project.solution}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>

                                    <motion.div variants={itemVariants}>
                                        <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center">
                                            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary" />
                                            Key Features
                                        </h3>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                            {project.features.map(
                                                (feature, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start"
                                                    >
                                                        <div className="bg-primary/20 p-1 rounded-full mr-2 mt-1">
                                                            <CheckCircle className="h-3 w-3 text-primary" />
                                                        </div>
                                                        <span className="text-sm sm:text-base text-muted-foreground">
                                                            {feature}
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </motion.div>

                                    {project.testimonial && (
                                        <motion.div
                                            className="mb-8 bg-muted/30 dark:bg-muted/10 p-4 sm:p-6 rounded-lg border-l-4 border-primary"
                                            variants={itemVariants}
                                        >
                                            <div className="flex items-center mb-4">
                                                <Quote className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2" />
                                                <h3 className="text-lg sm:text-xl font-semibold">
                                                    Client Testimonial
                                                </h3>
                                            </div>
                                            <p className="text-sm sm:text-base text-muted-foreground italic mb-4">
                                                "{project.testimonial.text}"
                                            </p>
                                            <div>
                                                <p className="font-medium text-foreground">
                                                    {project.testimonial.author}
                                                </p>
                                                <p className="text-xs sm:text-sm text-muted-foreground">
                                                    {
                                                        project.testimonial
                                                            .company
                                                    }
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            </motion.div>

                            {/* Project Details Sidebar - Mobile Version */}
                            <motion.div
                                className="lg:hidden mb-8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
                                    <CardContent className="p-4 sm:p-6">
                                        <h3 className="text-lg sm:text-xl font-semibold mb-4 pb-2 border-b">
                                            Project Details
                                        </h3>

                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div>
                                                <h4 className="text-xs sm:text-sm font-medium text-muted-foreground">
                                                    Category
                                                </h4>
                                                <p className="font-medium text-sm sm:text-base">
                                                    {project.category}
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="text-xs sm:text-sm font-medium text-muted-foreground">
                                                    Completed
                                                </h4>
                                                <p className="font-medium text-sm sm:text-base flex items-center">
                                                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-primary" />
                                                    {project.date_completed}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <Button
                                                className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500 transition-colors"
                                                asChild
                                            >
                                                <a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center"
                                                >
                                                    <ExternalLink className="h-4 w-4 mr-2" />
                                                    View Live Demo
                                                </a>
                                            </Button>

                                            <Button
                                                variant="outline"
                                                className="w-full"
                                                asChild
                                            >
                                                <a
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center"
                                                >
                                                    <Github className="h-4 w-4 mr-2" />
                                                    View Source Code
                                                </a>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Project Details Sidebar - Desktop Version */}
                            <motion.div
                                className="hidden lg:block"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm sticky top-24">
                                    <CardContent className="p-6">
                                        <h3 className="text-xl font-semibold mb-6 pb-4 border-b">
                                            Project Details
                                        </h3>

                                        <div className="space-y-4 mb-6">
                                            <div>
                                                <h4 className="text-sm font-medium text-muted-foreground">
                                                    Category
                                                </h4>
                                                <p className="font-medium">
                                                    {project.category}
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-medium text-muted-foreground">
                                                    Completed
                                                </h4>
                                                <p className="font-medium flex items-center">
                                                    <Calendar className="h-4 w-4 mr-1 text-primary" />
                                                    {project.date_completed}
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="text-sm font-medium text-muted-foreground">
                                                    Technologies
                                                </h4>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {project.technologies.map(
                                                        (tech, index) => (
                                                            <Badge
                                                                key={index}
                                                                variant="outline"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <Button
                                                className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500 transition-colors"
                                                asChild
                                            >
                                                <a
                                                    href={project.liveLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center"
                                                >
                                                    <ExternalLink className="h-4 w-4 mr-2" />
                                                    View Live Demo
                                                </a>
                                            </Button>

                                            <Button
                                                variant="outline"
                                                className="w-full"
                                                asChild
                                            >
                                                <a
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center"
                                                >
                                                    <Github className="h-4 w-4 mr-2" />
                                                    View Source Code
                                                </a>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>

                        {relatedProjects.length > 0 && (
                            <motion.div
                                className="mt-8 sm:mt-12 lg:mt-16"
                                initial={{ opacity: 0, y: 20 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 20 }
                                }
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                                    Related Projects
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                                    {relatedProjects.map((relatedProject) => (
                                        <Card
                                            key={relatedProject.id}
                                            className="overflow-hidden border-none shadow-lg bg-card/50 backdrop-blur-sm"
                                        >
                                            <div className="relative h-32 sm:h-40 w-full overflow-hidden">
                                                <img
                                                    src={
                                                        relatedProject.image ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={relatedProject.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                                <div className="absolute bottom-0 left-0 p-3 sm:p-4">
                                                    <h3 className="text-base sm:text-lg font-semibold text-white">
                                                        {relatedProject.title}
                                                    </h3>
                                                    <Badge className="mt-2 bg-white/20 text-white text-xs">
                                                        {
                                                            relatedProject.category
                                                        }
                                                    </Badge>
                                                </div>
                                            </div>
                                            <CardContent className="p-3 sm:p-4">
                                                <Link
                                                    href={route(
                                                        "projects.detail",
                                                        relatedProject.slug
                                                    )}
                                                >
                                                    <Button className="w-full text-sm">
                                                        View Project
                                                    </Button>
                                                </Link>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </AppLayout>
    );
}
