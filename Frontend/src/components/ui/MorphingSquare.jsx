import { memo } from "react";
import { motion as Motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { morphingSquareVariants } from "./MorphingSquareVariants";

export const MorphingSquare = memo(({
  className,
  message,
  messagePlacement = "bottom",
  ...props
}) => {
  return (
    <div className={cn(morphingSquareVariants({ messagePlacement }))}>
      <Motion.div
        className={cn("w-12 h-12 bg-[var(--hds-color-primary)] shadow-lg shadow-[var(--hds-color-primary)]/20", className)}
        animate={{
          borderRadius: ["20%", "50%", "20%"],
          rotate: [0, 180, 360],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        {...props} />
      {message && (
        <div className="text-[var(--hds-color-primary)] font-bold tracking-tight text-xs uppercase mt-6 animate-pulse select-none">
          {message}
        </div>
      )}
    </div>
  );
});
