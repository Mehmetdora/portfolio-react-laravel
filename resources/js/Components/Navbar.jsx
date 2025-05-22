import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";
import { Button } from "@/Components/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/Components/ThemeProvider";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "/projects/index" },
    { name: "Bio", href: "#bio" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        if (isOpen) {
            const handleClickOutside = (e) => {
                if (!e.target.closest("nav") && !e.target.closest("button")) {
                    setIsOpen(false);
                }
            };
            document.addEventListener("click", handleClickOutside);
            return () =>
                document.removeEventListener("click", handleClickOutside);
        }
    }, [isOpen]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const navbarVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
            },
        },
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * i,
                duration: 0.3,
            },
        }),
    };

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-background/90 backdrop-blur-md shadow-md dark:shadow-primary/5"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-3 sm:py-4">
                    <Link
                        href="/"
                        className="text-lg sm:text-xl font-bold text-foreground transition-colors duration-200"
                    >
                        Portfolio
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-4 lg:space-x-6">
                        {navItems.map((item, i) => (
                            <motion.div
                                key={item.name}
                                custom={i}
                                initial="hidden"
                                animate="visible"
                                variants={navItemVariants}
                            >
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-2">
                        {mounted && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleTheme}
                                className="text-foreground hover:text-primary transition-colors"
                            >
                                {theme === "dark" ? (
                                    <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
                                ) : (
                                    <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
                                )}
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        )}

                        {/* Mobile Navigation Toggle */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <X className="h-5 w-5 sm:h-6 sm:w-6" />
                            ) : (
                                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <motion.div
                    className="md:hidden bg-background/95 backdrop-blur-md border-b border-border max-h-[70vh] overflow-y-auto"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05, duration: 0.2 }}
                            >
                                <Link
                                    href={item.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-primary/10 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
