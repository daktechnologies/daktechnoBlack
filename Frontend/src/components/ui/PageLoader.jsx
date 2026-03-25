import { MorphingSquare } from "./MorphingSquare";
import { motion as Motion } from "framer-motion";

const PageLoader = () => {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-xl">
            <div className="relative">
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-[var(--hds-color-primary)] blur-[60px] opacity-10 rounded-full" />

                <MorphingSquare
                    message="DAK Technologies"
                    className="w-16 h-16"
                />
            </div>

            {/* Brand logo or text watermark at bottom */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 overflow-hidden">
                <Motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-[var(--hds-color-text)]/40"
                >
                    Engineering the Digital Future
                </Motion.p>
            </div>
        </div>
    );
};

export default PageLoader;
