import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/Components/components/ui/card';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export default function BioSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const bioEvents = [
        
        {
            year: '2024',
            title: 'İlk gönüllü staj deneyimimi yaptım',
            description: 'SEYTİM de ilk staj deneyimimi Laravel üzerinde yaptım.',
            icon: Briefcase,
        },
        {
            year: '2021-2022',
            title: `Çukurova üniversitesine başlama-hazırlık sınıfı`,
            description: 'Alanım ve işim için gerekli ingilizce eğitimini asgari seviyeye çıkardım.',
            icon: GraduationCap,
        },
        {
            year: '2017',
            title: 'Starting high scholl',
            description: 'Alan seçimi ve kişisel gelişim.',
            icon: Award,
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

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            },
        }),
    };

    return (
        <section id="bio" className="py-8 sm:py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    className="text-center mb-8 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Bio</h2>
                    <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
                    <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
                        A timeline of my professional journey and key milestones.
                    </p>
                </motion.div>

                <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-4 sm:p-6 md:p-8">
                        <motion.div
                            className="relative"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                        >
                            {/* Timeline line */}
                            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-primary/30 hidden sm:block"></div>

                            {/* Mobile timeline line */}
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-primary/30 sm:hidden"></div>

                            {/* Timeline events */}
                            <div className="space-y-6 sm:space-y-8">
                                {bioEvents.map((event, index) => (
                                    <motion.div
                                        key={index}
                                        custom={index}
                                        variants={itemVariants}
                                        className="flex flex-col sm:flex-row"
                                    >
                                        {/* Year - Mobile */}
                                        <div className="flex items-center mb-2 sm:hidden">
                                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white mr-3">
                                                <event.icon className="h-4 w-4" />
                                            </div>
                                            <span className="text-sm font-semibold text-primary">{event.year}</span>
                                        </div>

                                        {/* Year - Desktop */}
                                        <div className="w-20 sm:w-24 hidden sm:block">
                                            <div className="flex items-center">
                                                <span className="text-sm sm:text-base font-semibold text-primary">{event.year}</span>
                                            </div>
                                        </div>

                                        {/* Icon - Desktop */}
                                        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white relative z-10">
                                            <event.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                        </div>

                                        {/* Content */}
                                        <div className="ml-11 sm:ml-6 flex-1">
                                            <div className="bg-muted/30 dark:bg-muted/10 p-3 sm:p-4 rounded-lg">
                                                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">{event.title}</h3>
                                                <p className="text-sm sm:text-base text-muted-foreground">{event.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
