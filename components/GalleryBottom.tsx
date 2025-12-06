"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, animate } from "framer-motion";
import photo1 from "@/assets/gallery/photo_01.jpg";
import photo2 from "@/assets/gallery/photo_02.jpg";
import photo3 from "@/assets/gallery/photo_03.jpg";
import photo4 from "@/assets/gallery/photo_04.jpg";
import photo5 from "@/assets/gallery/photo_05.jpg";
import photo6 from "@/assets/gallery/photo_06.jpg";
import photo7 from "@/assets/gallery/photo_07.jpg";
import photo8 from "@/assets/gallery/photo_08.jpg";
import photo9 from "@/assets/gallery/photo_09.jpg";

export default function GalleryBottom() {
    const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9];
    const [index, setIndex] = useState<number>(0);
    const [isOpen, setIsOpen] = useState(false);
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const openLightbox = (i: number) => {
        setIndex(i);
        setIsOpen(true);
        x.set(0);
    };
    const closeLightbox = () => setIsOpen(false);

    const getIndex = (i: number) => {
        // Handle negative and positive overflow
        return (i + images.length) % images.length;
    };

    const handleDragEnd = () => {
        const currentX = x.get();
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const threshold = containerWidth * 0.25; // 25% drag to swipe

        if (currentX < -threshold) {
            // Swipe Left -> Next
            animate(x, -containerWidth, { type: "spring", stiffness: 300, damping: 30 }).then(() => {
                setIndex((prev) => getIndex(prev + 1));
                x.set(0);
            });
        } else if (currentX > threshold) {
            // Swipe Right -> Prev
            animate(x, containerWidth, { type: "spring", stiffness: 300, damping: 30 }).then(() => {
                setIndex((prev) => getIndex(prev - 1));
                x.set(0);
            });
        } else {
            // Snap back
            animate(x, 0, { type: "spring", stiffness: 300, damping: 30 });
        }
    };

    // Images to show: Prev (-1), Current (0), Next (1)
    const prevImage = images[getIndex(index - 1)];
    const currentImage = images[images.length > 0 ? getIndex(index) : 0]; // Safety check
    const nextImage = images[getIndex(index + 1)];

    return (
        <section className="bg-white py-16 px-4">
            <h2 className="text-3xl font-serif text-[#2F4F2F] mb-8 tracking-widest text-center">
                GALLERY
            </h2>

            {/* Grid Layout: 3 Columns, Square Aspect Ratio */}
            <div className="grid grid-cols-3 gap-2 container mx-auto max-w-[1000px]">
                {images.map((src, i) => (
                    <div
                        key={i}
                        onClick={() => openLightbox(i)}
                        className="relative aspect-square w-full bg-gray-200 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                    >
                        <Image
                            src={src}
                            alt={`Gallery Bottom Photo ${i + 1}`}
                            fill
                            className="object-cover"
                            placeholder="blur"
                            sizes="(max-width: 768px) 33vw, 33vw"
                        />
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm"
                        onClick={closeLightbox}
                    >
                        {/* Container */}
                        <div
                            ref={containerRef}
                            className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div
                                className="relative w-full h-full flex"
                                style={{ x }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }} // Elastic drag
                                dragElastic={0.8}
                                onDragEnd={handleDragEnd}
                            >
                                {/* Previous Image */}
                                <div className="absolute top-0 left-[-100%] w-full h-full p-4 flex items-center justify-center">
                                    <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
                                        <Image src={prevImage} alt="Previous" fill className="object-contain pointer-events-none" />
                                    </div>
                                </div>

                                {/* Current Image */}
                                <div className="absolute top-0 left-0 w-full h-full p-4 flex items-center justify-center">
                                    <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
                                        <Image src={currentImage} alt="Current" fill className="object-contain pointer-events-none" priority />
                                    </div>
                                </div>

                                {/* Next Image */}
                                <div className="absolute top-0 left-[100%] w-full h-full p-4 flex items-center justify-center">
                                    <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
                                        <Image src={nextImage} alt="Next" fill className="object-contain pointer-events-none" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white p-2 z-50 hover:bg-white/20 rounded-full"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

