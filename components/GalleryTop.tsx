'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import photo1 from "@/assets/gallery/photo_01.jpg";
import photo2 from "@/assets/gallery/photo_02.jpg";
import photo3 from "@/assets/gallery/photo_03.jpg";

export default function GalleryTop() {
    const targetRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // 3 images = 3 sections.
    // We want the horizontal scroll to move from 0% to -200% (to show the 3rd image fully).
    // Adjust logic:
    // 0% -> show image 1
    // 50% -> show image 2
    // 100% -> show image 3
    // But actually we have a container of width 300vw (3 images).
    // The viewport is 100vw.
    // To show the last image (which starts at 200vw), we need to translate by -200vw.
    // 200vw / 300vw = 2/3 ≈ 66.666%
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

    const images = [photo1, photo2, photo3];

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex w-[300%] h-full">
                    {images.map((src, index) => (
                        <div key={index} className="relative w-full h-full flex-shrink-0">
                            <Image
                                src={src}
                                alt={`Gallery Top Photo ${index + 1}`}
                                fill
                                className="object-cover"
                                placeholder="blur"
                                priority={index === 0}
                            />
                            {/* Creative overlay */}
                            <div className="absolute bottom-10 left-10 text-white/50 text-6xl font-serif z-10 opacity-50 mix-blend-difference">
                                0{index + 1}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Scroll Hint */}
                <div className="absolute bottom-8 w-full text-center text-white/80 z-20 animate-pulse pointer-events-none mix-blend-difference">
                    Scroll Down to View More
                </div>
            </div>
        </section>
    );
}
