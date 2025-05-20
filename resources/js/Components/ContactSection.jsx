import { useState, useRef } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/Components/components/ui/card';
import { Input } from '@/Components/components/ui/input';
import { Textarea } from '@/Components/components/ui/textarea';
import { Button } from '@/Components/components/ui/button';
import { useToast } from '@/Components/components/ui/toast';

export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast({
            title: 'Message sent!',
            description: "Thank you for your message. I'll get back to you soon.",
        });

        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
        setIsSubmitting(false);
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
        <section id="contact" className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-foreground">Contact</h2>
                    <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-purple-600 mx-auto"></div>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Feel free to reach out to me for job opportunities, collaborations, or just to say hello!
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <motion.div className="lg:col-span-2" custom={0} variants={cardVariants}>
                        <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm h-full">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-4 text-foreground">Send Me a Message</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                                                Your Name
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                                className="bg-background/50 border-primary/20 focus:border-primary"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                                                Your Email
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                required
                                                className="bg-background/50 border-primary/20 focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                                            Subject
                                        </label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="How can I help you?"
                                            required
                                            className="bg-background/50 border-primary/20 focus:border-primary"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your message here..."
                                            rows={6}
                                            required
                                            className="bg-background/50 border-primary/20 focus:border-primary"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500 transition-colors"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center">
                                                <svg
                                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center">
                                                <Send className="h-4 w-4 mr-2" />
                                                Send Message
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div custom={1} variants={cardVariants}>
                        <Card className="h-full border-none shadow-lg bg-card/50 backdrop-blur-sm">
                            <CardContent className="p-6 flex flex-col h-full">
                                <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>

                                <div className="space-y-6 flex-grow">
                                    <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                        <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 p-3 rounded-full mr-4">
                                            <MapPin className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-foreground">Location</h4>
                                            <p className="text-muted-foreground">San Francisco, CA</p>
                                        </div>
                                    </motion.div>

                                    <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                        <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 p-3 rounded-full mr-4">
                                            <Mail className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-foreground">Email</h4>
                                            <a
                                                href="mailto:contact@example.com"
                                                className="text-primary hover:text-primary/80 hover:underline transition-colors"
                                            >
                                                contact@example.com
                                            </a>
                                        </div>
                                    </motion.div>

                                    <motion.div className="flex items-start" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                        <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 p-3 rounded-full mr-4">
                                            <Phone className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-foreground">Phone</h4>
                                            <a
                                                href="tel:+11234567890"
                                                className="text-primary hover:text-primary/80 hover:underline transition-colors"
                                            >
                                                +1 (123) 456-7890
                                            </a>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-border">
                                    <h4 className="font-medium text-foreground mb-4">Connect With Me</h4>
                                    <div className="flex space-x-4">
                                        {[
                                            { icon: 'linkedin', url: 'https://linkedin.com' },
                                            { icon: 'github', url: 'https://github.com' },
                                            { icon: 'twitter', url: 'https://twitter.com' },
                                        ].map((social, i) => (
                                            <motion.a
                                                key={i}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-gradient-to-br from-primary/20 to-purple-600/20 p-3 rounded-full text-primary hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-purple-600 transition-all duration-300"
                                                whileHover={{
                                                    scale: 1.1,
                                                    rotate: [0, -10, 10, -5, 5, 0],
                                                    transition: { duration: 0.5 },
                                                }}
                                            >
                                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                    {social.icon === 'linkedin' && (
                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                    )}
                                                    {social.icon === 'github' && (
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                            clipRule="evenodd"
                                                        />
                                                    )}
                                                    {social.icon === 'twitter' && (
                                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                    )}
                                                </svg>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
