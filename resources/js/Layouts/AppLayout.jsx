import { ThemeProvider } from "@/Components/ThemeProvider";
import { ToastProvider } from "@/Components/components/ui/toast";
import { Head } from "@inertiajs/react";

export default function AppLayout({ children, title }) {
    return (
        <ThemeProvider defaultTheme="system">
            <ToastProvider>
                <Head title={title || "Portfolio"} />
                <div className="min-h-screen bg-background">{children}</div>
            </ToastProvider>
        </ThemeProvider>
    );
}
