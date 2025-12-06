"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import photo1 from "@/assets/gallery/photo_10.jpg";

export default function Envelope() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // 1. Zoom out/Fade in effect for the whole section (optional polish)

    // 2. Flap opens
    // 0.0 -> 0.2: Envelope enters/settles (optional)
    // 0.2 -> 0.4: Flap opens
    const flapRotate = useTransform(scrollYProgress, [0.1, 0.35], [0, 180]);
    const flapZIndex = useTransform(scrollYProgress, [0, 0.34, 0.35], [30, 30, 0]);

    // 3. Photo slides up
    // 0.35 -> 0.65
    const photoY = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "-130%"]);
    // Slight ease-out scale as it rises
    const photoScale = useTransform(scrollYProgress, [0.3, 0.7], [0.95, 1.05]);

    // 4. Text fades in
    const textOpacity = useTransform(scrollYProgress, [0.65, 0.85], [0, 1]);

    // Colors - Warm Beige Wedding Theme
    const cMain = "#F3F0E9";  // Lightest beige
    const cShadow = "#E6E2D6"; // Slightly darker for depth
    const cDark = "#DAD5C5";   // Darker for inside/contrast

    return (
        <section ref={containerRef} className="relative h-[250vh] bg-white">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* Envelope Container */}
                <div className="relative w-[340px] h-[240px] sm:w-[440px] sm:h-[300px] drop-shadow-2xl">

                    {/* [Layer 1] Inside Back of Envelope (Visible when photo slides out) */}
                    <div className="absolute inset-0 bg-[#EAE6DB] rounded-b-md" />

                    {/* [Layer 2] Photo Card */}
                    <motion.div
                        style={{ y: photoY, scale: photoScale, rotate: 0 }}
                        className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[220px] h-[330px] origin-bottom flex items-center justify-center z-10"
                    >
                        <div className="relative w-full h-full overflow-hidden">
                            <Image
                                src={photo1}
                                alt="Invitation Photo"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* [Layer 3] Front Pocket (The "V" shape holding the content) */}
                    <div className="absolute inset-0 z-20 pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 440 300" preserveAspectRatio="none" className="drop-shadow-sm">
                            <defs>
                                <linearGradient id="pocketGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor={cMain} />
                                    <stop offset="100%" stopColor={cShadow} />
                                </linearGradient>
                            </defs>
                            {/* Pocket Shape: Left, Right, Bottom triangles merged */}
                            {/* Tips meet at center (220, 160) approx to match flap */}
                            <path
                                d="M0 300 L0 0 L220 160 L440 0 L440 300 Z"
                                fill="url(#pocketGradient)"
                                stroke={cDark}
                                strokeWidth="0.5"
                            />
                        </svg>
                    </div>

                    {/* [Layer 4] Flap (The top triangle that rotates) */}
                    {/* Origin is top edge. Height is 160 to meet the pocket center. */}
                    <motion.div
                        style={{ rotateX: flapRotate, zIndex: flapZIndex }}
                        className="absolute top-0 inset-x-0 h-[160px] origin-top z-30"
                    >
                        <svg width="100%" height="100%" viewBox="0 0 440 160" preserveAspectRatio="none" className="drop-shadow-md">
                            <path
                                d="M0 0 L220 160 L440 0 Z"
                                fill={cMain}
                                stroke={cDark}
                                strokeWidth="0.5"
                            />
                        </svg>
                    </motion.div>
                </div>

                {/* Invitation Text */}
                <motion.div
                    style={{ opacity: textOpacity }}
                    className="absolute bottom-[8%] sm:bottom-[10%] text-center z-50 px-6 w-full max-w-lg"
                >
                    <div className="space-y-6">
                        <p className="not_sans text-[#5A4D4D] text-base leading-8 tracking-widest font-serif">
                            친구에서 연인으로 함께한 지 6년<br />
                            서로를 통해 아름다운 세상을 보았습니다.
                        </p>
                        <p className="not_sans text-[#5A4D4D] text-base leading-8 tracking-widest font-serif">
                            이제는 환히 사랑을 외치는<br />
                            동반자로 함께하려 합니다.
                        </p>
                        <p className="not_sans text-[#5A4D4D] text-base leading-8 tracking-widest font-serif">
                            귀한 걸음으로 오셔서<br />
                            축복해 주시고 함께해 주세요.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
