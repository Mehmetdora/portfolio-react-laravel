import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/Components/components/ui/card';
import { Badge } from '@/Components/components/ui/badge';
import { Heart, Coffee, Book, Camera, Plane, Music, Code, Bike } from 'lucide-react';

export default function BioSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

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

    const lifeEvents = [
        {
            year: '2012',
            title: 'Started Computer Science Degree',
            description: 'Began my journey in technology at State University',
        },
        {
            year: '2016',
            title: 'First Developer Role',
            description: 'Started as a junior web developer at a local agency',
        },
        {
            year: '2018',
            title: 'Moved to San Francisco',
            description: 'Relocated to pursue opportunities in the tech industry',
        },
        {
            year: '2020',
            title: 'Started Remote Work',
            description: 'Embraced the digital nomad lifestyle, working from various locations',
        },
        {
            year: '2022',
            title: 'Launched First Major Project',
            description: 'Released my first open-source project with over 1,000 stars on GitHub',
        },
    ];

    const interests = [
        { icon: Heart, label: 'Health & Fitness', color: 'from-red-400 to-pink-500' },
        { icon: Coffee, label: 'Coffee Enthusiast', color: 'from-amber-600 to-yellow-500' },
        { icon: Book, label: 'Reading', color: 'from-blue-400 to-cyan-500' },
        { icon: Camera, label: 'Photography', color: 'from-purple-400 to-indigo-500' },
        { icon: Plane, label: 'Traveling', color: 'from-sky-400 to-blue-500' },
        { icon: Music, label: 'Playing Guitar', color: 'from-green-400 to-emerald-500' },
        { icon: Code, label: 'Open Source', color: 'from-violet-400 to-purple-500' },
        { icon: Bike, label: 'Cycling', color: 'from-orange-400 to-red-500' },
    ];

    return (
        <section id="bio" className="py-16 bg-muted/30 dark:bg-muted/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-foreground">My Story</h2>
                    <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.div custom={0} variants={itemVariants}>
                        <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm h-full">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4 text-foreground">Who I Am</h3>
                                <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground">
                                    <p>
                                        I'm John Doe, a passionate software developer with a love for creating elegant solutions to complex
                                        problems. Born and raised in a small town, I discovered my passion for technology at an early age
                                        when I got my first computer.
                                    </p>
                                    <p className="mt-4">
                                        After completing my education in Computer Science, I embarked on a journey that has taken me through
                                        various roles and technologies. What drives me is not just writing code, but creating experiences
                                        that make a difference in people's lives.
                                    </p>
                                    <p className="mt-4">
                                        When I'm not in front of a computer, you'll find me exploring the outdoors, experimenting with
                                        photography, or diving into a good book. I believe in continuous learning and pushing my boundaries,
                                        both professionally and personally.
                                    </p>
                                    <p className="mt-4">
                                        My philosophy is simple: approach every challenge with curiosity, creativity, and a commitment to
                                        excellence. I believe that the best solutions come from collaboration, open-mindedness, and a
                                        willingness to think differently.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div custom={1} variants={itemVariants}>
                        <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm overflow-hidden h-full">
                            <div className="relative h-64 w-full">
                                <img
                                    src="/images/placeholder-bio.jpg"
                                    alt="John Doe working"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">Life Timeline</h3>
                                    <p className="text-white/80">Key moments in my journey</p>
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    {lifeEvents.map((event, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="flex-shrink-0 w-16 text-primary font-semibold">{event.year}</div>
                                            <div className="flex-grow pl-4 border-l-2 border-primary/30 pb-4">
                                                <h4 className="font-medium text-foreground">{event.title}</h4>
                                                <p className="text-sm text-muted-foreground">{event.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="mt-12"
                    variants={itemVariants}
                    custom={2}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold mb-6 text-foreground">Interests & Hobbies</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {interests.map((interest, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex flex-col items-center justify-center p-4 rounded-lg bg-background/50"
                                        whileHover={{ y: -5, scale: 1.03 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className={`p-3 rounded-full bg-gradient-to-r ${interest.color} mb-3`}>
                                            <interest.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <span className="text-sm font-medium text-foreground text-center">{interest.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <motion.div
                    className="mt-12"
                    variants={itemVariants}
                    custom={3}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-4 text-foreground">My Values</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Continuous learning and growth",
                                        "Attention to detail and quality",
                                        "Open communication and collaboration",
                                        "Work-life balance and well-being",
                                        "Innovation and creative problem-solving",
                                        "Ethical approach to technology",
                                    ].map((value, index) => (
                                        <li key={index} className="flex items-start">
                                            <Badge className="mt-1 mr-2 bg-primary/20 text-primary hover:bg-primary/30">0{index + 1}</Badge>
                                            <span className="text-muted-foreground">{value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="relative h-full min-h-[300px]">
                                <img
                                    src="/images/placeholder-portrait.jpg"
                                    alt="John Doe portrait"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent md:from-transparent md:via-transparent md:bg-gradient-to-t md:from-background/80 md:to-transparent"></div>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
