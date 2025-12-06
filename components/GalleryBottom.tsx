"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);

    const paginate = (newDirection: number) => {
        if (selectedIndex === null) return;
        let newIndex = selectedIndex + newDirection;
        if (newIndex < 0) newIndex = images.length - 1;
        if (newIndex >= images.length) newIndex = 0;
        setSelectedIndex(newIndex);
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <section className="bg-white py-16 px-4">
            <h2 className="text-3xl font-serif text-[#2F4F2F] mb-8 tracking-widest text-center">
                GALLERY
            </h2>

            {/* Grid Layout: 3 Columns, Square Aspect Ratio */}
            <div className="grid grid-cols-3 gap-2 container mx-auto max-w-[1000px]">
                {images.map((src, index) => (
                    <div
                        key={index}
                        onClick={() => openLightbox(index)}
                        className="relative aspect-square w-full bg-gray-200 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                    >
                        <Image
                            src={src}
                            alt={`Gallery Bottom Photo ${index + 1}`}
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
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center backdrop-blur-sm"
                        onClick={closeLightbox}
                    >
                        <div
                            className="relative w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()} // Prevent close on image click
                        >
                            <motion.div
                                key={selectedIndex}
                                custom={selectedIndex}
                                initial={{ opacity: 0, x: 1000 }} // Simple implementation, can be refined
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -1000 }}
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);

                                    if (swipe < -swipeConfidenceThreshold) {
                                        paginate(1);
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        paginate(-1);
                                    }
                                }}
                                className="relative w-full h-full max-w-4xl max-h-[80vh] mx-4"
                            >
                                <Image
                                    src={images[selectedIndex]}
                                    alt="Lightbox Image"
                                    fill
                                    className="object-contain pointer-events-none" // pointer-events-none ensures drag works cleanly
                                    priority
                                />
                            </motion.div>

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
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
