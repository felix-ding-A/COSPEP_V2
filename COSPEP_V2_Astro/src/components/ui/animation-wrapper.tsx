"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface AnimationWrapperProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    animation?: "fade-up" | "fade-in" | "scale" | "slide-left" | "slide-right";
    once?: boolean;
}

const animations: Record<string, Variants> = {
    "fade-up": {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    "fade-in": {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    },
    "slide-left": {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0 },
    },
};

export function AnimationWrapper({
    children,
    className = "",
    delay = 0,
    duration = 0.6,
    animation = "fade-up",
    once = true,
}: AnimationWrapperProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={animations[animation]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
