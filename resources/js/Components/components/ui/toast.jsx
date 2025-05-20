import { cn } from '@/lib/utils';
import { createContext, forwardRef, useContext, useEffect, useState } from 'react';

const ToastContext = createContext({
    toasts: [],
    addToast: () => {},
    removeToast: () => {},
});

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const addToast = (toast) => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, ...toast }]);
        return id;
    };

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
            <Toaster />
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);

    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider');
    }

    return {
        toast: (props) => {
            context.addToast(props);
        },
        dismiss: (id) => {
            context.removeToast(id);
        },
    };
}

const Toast = forwardRef(({ className, title, description, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
                className
            )}
            {...props}
        >
            <div className="grid gap-1">
                {title && <div className="text-sm font-semibold">{title}</div>}
                {description && <div className="text-sm opacity-90">{description}</div>}
            </div>
        </div>
    );
});
Toast.displayName = "Toast";

function Toaster() {
    const { toasts, removeToast } = useContext(ToastContext);

    return (
        <div className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]">
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    className="bg-background border-border mb-2"
                    title={toast.title}
                    description={toast.description}
                    onMouseEnter={() => clearTimeout(toast.timeout)}
                    onMouseLeave={() => {
                        const timeout = setTimeout(() => {
                            removeToast(toast.id);
                        }, 5000);
                        toast.timeout = timeout;
                    }}
                />
            ))}
        </div>
    );
}

export { Toast, Toaster };
