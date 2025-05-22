import { motion } from 'framer-motion';

export default function SectionHeader({ title, description, className = "" }) {
    return (
        <motion.div
            className={`text-center mb-8 sm:mb-12 ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h2>
            <div className="mt-2 h-1 w-20 bg-gradient-to-r from-primary to-emerald-500 mx-auto"></div>
            {description && (
                <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
                    {description}
                </p>
            )}
        </motion.div>
    );
}
