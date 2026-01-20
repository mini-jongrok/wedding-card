"use client";

import { useEffect, useState } from "react";

interface Sparkle {
    id: number;
    left: number;
    delay: number;
    duration: number;
    size: number;
}

export default function SparkleEffect() {
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);

    useEffect(() => {
        // Generate sparkles on client side only to match hydration
        const count = 15; // Number of sparkles
        const newSparkles = Array.from({ length: count }).map((_, i) => ({
            id: i,
            left: Math.random() * 100, // 0-100%
            delay: Math.random() * 5, // 0-5s delay
            duration: 12 + Math.random() * 8, // 12-20s duration
            size: 1 + Math.random() * 3, // 1-4px size
        }));
        setSparkles(newSparkles);
    }, []);

    return (
        <div className="fixed inset-0 w-full max-w-[430px] mx-auto pointer-events-none overflow-hidden z-20" aria-hidden="true">
            {sparkles.map((sparkle) => (
                <div
                    key={sparkle.id}
                    className="absolute top-[-20px] rounded-full bg-white opacity-0 animate-sparkle"
                    style={{
                        left: `${sparkle.left}%`,
                        width: `${sparkle.size}px`,
                        height: `${sparkle.size}px`,
                        animationDelay: `${sparkle.delay}s`,
                        animationDuration: `${sparkle.duration}s`,
                        boxShadow: `0 0 ${sparkle.size * 1.5}px ${sparkle.size / 2}px rgba(255, 255, 255, 0.8)`,
                    }}
                />
            ))}
        </div>
    );
}
