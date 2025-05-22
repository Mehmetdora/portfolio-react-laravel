import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AppLayout from "@/Layouts/AppLayout";
import Navbar from "@/Components/Navbar";
import HeroSection from "@/Components/HeroSection";
import AboutSection from "@/Components/AboutSection";
import SkillsSection from "@/Components/SkillsSection";
import ProjectsSection from "@/Components/ProjectsSection";
import BioSection from "@/Components/BioSection";
import ExperienceSection from "@/Components/ExperienceSection";
import EducationSection from "@/Components/EducationSection";
import ContactSection from "@/Components/ContactSection";
import Footer from "@/Components/Footer";
import BackgroundAnimation from "@/Components/BackgroundAnimation";

export default function Portfolio() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <AppLayout title="Mehmet Dora | Backend Developer">
            <BackgroundAnimation />
            <Navbar />

            <main>
                <HeroSection />
                <AboutSection />
                <motion.div
                    className="flex justify-center my-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                ></motion.div>
                <SkillsSection />
                <ProjectsSection />
                <BioSection />
                <ExperienceSection />
                <EducationSection />
                <ContactSection />
            </main>
            <Footer />
        </AppLayout>
    );
}
