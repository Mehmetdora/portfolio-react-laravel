import { useState, useRef } from "react";
import {
    Github,
    Linkedin,
    Twitter,
    Send,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/Components/components/ui/card";
import { Input } from "@/Components/components/ui/input";
import { Textarea } from "@/Components/components/ui/textarea";
import { Button } from "@/Components/components/ui/button";
import { useToast } from "@/Components/components/ui/toast";
import SectionHeader from "@/Components/components/ui/section-header";

export default function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
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
            title: "Message sent!",
            description:
                "Thank you for your message. I'll get back to you soon.",
        });

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
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

    const contactInfo = [
        {
            icon: MapPin,
            title: "Location",
            details: "Mersin, TR",
            color: "bg-emerald-100 dark:bg-emerald-900/30",
            iconColor: "text-emerald-600 dark:text-emerald-400",
        },
        {
            icon: Mail,
            title: "Email",
            details: "mehmetdora333@gmail.com",
            color: "bg-green-100 dark:bg-green-900/30",
            iconColor: "text-green-600 dark:text-green-400",
        },
        {
            icon: Phone,
            title: "Phone",
            details: "+90 (537) 824 4539",
            color: "bg-teal-100 dark:bg-teal-900/30",
            iconColor: "text-teal-600 dark:text-teal-400",
        },
    ];

    return (
        <section id="contact" className="py-8 sm:py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
                <SectionHeader
                    title="Contact"
                    description="Feel free to reach out to me for job opportunities, collaborations, or just to say hello!"
                />

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Contact Form */}
                    <motion.div
                        className="lg:col-span-2"
                        custom={0}
                        variants={cardVariants}
                    >
                        <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm h-full overflow-hidden">
                            <div className="h-1.5 bg-gradient-to-r from-primary to-emerald-500"></div>
                            <CardContent className="p-4 sm:p-6 md:p-8">
                                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-foreground">
                                    Send Me a Message
                                </h3>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-4 sm:space-y-6"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2"
                                            >
                                                Your Name
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                                className="bg-background/50 border-primary/20 focus:border-primary text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2"
                                            >
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
                                                className="bg-background/50 border-primary/20 focus:border-primary text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2"
                                        >
                                            Subject
                                        </label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="How can I help you?"
                                            required
                                            className="bg-background/50 border-primary/20 focus:border-primary text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2"
                                        >
                                            Message
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your message here..."
                                            rows={5}
                                            required
                                            className="bg-background/50 border-primary/20 focus:border-primary text-sm resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="gradient"
                                        className="w-full sm:w-auto"
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

                    {/* Contact Info */}
                    <motion.div custom={1} variants={cardVariants}>
                        <div className="space-y-4 sm:space-y-6">
                            {/* Contact Info Cards */}
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm overflow-hidden">
                                        <CardContent className="p-4 sm:p-6">
                                            <div className="flex items-start">
                                                <div
                                                    className={`flex-shrink-0 p-3 rounded-full ${item.color} mr-4`}
                                                >
                                                    <item.icon
                                                        className={`h-5 w-5 sm:h-6 sm:w-6 ${item.iconColor}`}
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-sm sm:text-base text-muted-foreground">
                                                        {item.details}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}

                            {/* Map or Additional Info */}
                            <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="aspect-video w-full bg-muted/50 relative overflow-hidden rounded-b-lg">
                                        <img
                                            src="/placeholder.svg?height=300&width=500"
                                            alt="Map location"
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                                            <div className="p-4 sm:p-6 text-white">
                                                <h4 className="text-base sm:text-lg font-semibold mb-1">
                                                    Find Me Here
                                                </h4>
                                                <p className="text-xs sm:text-sm text-white/80">
                                                    Mersin, Türkiye
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Social Media Links - Mobile Only */}
                            <div className="block sm:hidden">
                                <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
                                    <CardContent className="p-4">
                                        <h4 className="text-base font-semibold text-foreground mb-3">
                                            Connect With Me
                                        </h4>
                                        <div className="flex justify-around">
                                            {[
                                                {
                                                    icon: Mail,
                                                    href: "mailto:mehmetdora333@gmail.com",
                                                    label: "Email",
                                                },
                                                {
                                                    icon: Github,
                                                    href: "https://github.com/Mehmetdora",
                                                    label: "GitHub",
                                                },
                                                {
                                                    icon: Linkedin,
                                                    href: "www.linkedin.com/in/mehmet-dora-699a02226",
                                                    label: "LinkedIn",
                                                },
                                            ].map((social, i) => (
                                                <motion.a
                                                    key={i}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary"
                                                    aria-label={social.label}
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{
                                                        duration: 0.3,
                                                    }}
                                                >
                                                    <social.icon className="h-5 w-5" />
                                                </motion.a>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Availability Notice */}
                <motion.div
                    className="mt-8 sm:mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Card className="border-none shadow-lg bg-gradient-to-r from-primary/10 to-emerald-500/10 backdrop-blur-sm inline-block max-w-2xl mx-auto">
                        <CardContent className="p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                                <div className="p-2 sm:p-3 rounded-full bg-primary/20">
                                    <div className="h-3 w-3 rounded-full bg-primary animate-pulse"></div>
                                </div>
                                <div className="text-center sm:text-left">
                                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1">
                                        Currently Available for Work
                                    </h3>
                                    <p className="text-xs sm:text-sm text-muted-foreground">
                                        <b>
                                            I'm open to freelance projects,
                                            full-time positions, and
                                            collaborations.
                                        </b>
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
