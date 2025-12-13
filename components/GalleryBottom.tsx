"use client";
import { useState, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import photo1 from "@/assets/gallery/photo_01.jpg";
import photo2 from "@/assets/gallery/photo_02.jpg";
import photo3 from "@/assets/gallery/photo_03.jpg";
import photo4 from "@/assets/gallery/photo_04.jpg";
import photo5 from "@/assets/gallery/photo_05.jpg";
import photo6 from "@/assets/gallery/photo_06.jpg";
import photo7 from "@/assets/gallery/photo_07.jpg";
import photo8 from "@/assets/gallery/photo_08.jpg";
import photo9 from "@/assets/gallery/photo_09.jpg";
import photo10 from "@/assets/gallery/photo_10.jpg";
import photo11 from "@/assets/gallery/photo_11.jpg";
import photo12 from "@/assets/gallery/photo_12.jpg";
import photo13 from "@/assets/gallery/photo_13.jpg";
import photo14 from "@/assets/gallery/photo_14.jpg";
import photo15 from "@/assets/gallery/photo_15.jpg";
import cameraGif from "@/app/assets/camera_photo.gif";

import galleryWrapper from "@/app/assets/gallery_wrap_each_photo.png";

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export default function GalleryBottom() {
    const images = [
        photo1, photo2, photo3, photo4, photo5,
        photo6, photo7, photo8, photo9, photo10,
        photo11, photo12, photo13, photo14, photo15
    ];
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const openLightbox = (i: number) => {
        setIndex(i);
        setIsOpen(true);
    };

    const closeLightbox = () => setIsOpen(false);

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        // Use functional state update to ensure latest index
        setIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = images.length - 1;
            if (nextIndex >= images.length) nextIndex = 0;
            return nextIndex;
        });
    };

    const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
        }
    };

    return (
        <section className="py-16">
            {/* Camera GIF */}
            <div className="flex justify-center mb-4">
                <Image
                    src={cameraGif}
                    alt="Camera Animation"
                    width={50}
                    height={50}
                    unoptimized
                />
            </div>

            {/* Title */}
            <h2 className="text-3xl tracking-[0.2em] text-[#2F4F2F] mb-12 font-light select-none text-center" style={{ fontFamily: 'AtSign, cursive' }}>
                GALLERY
            </h2>

            {/* Grid Layout */}
            <div className="grid grid-cols-3 gap-12 container mx-auto max-w-[1000px] px-8">
                {images.map((src, i) => (
                    <div
                        key={i}
                        onClick={() => openLightbox(i)}
                        className="relative aspect-[428/720] w-full cursor-pointer hover:scale-105 transition-transform duration-300 rounded-xl overflow-hidden"
                    >
                        {/* Wrapper Image (Frame) */}
                        <div className="absolute inset-0 z-20 pointer-events-none">
                            <Image
                                src={galleryWrapper}
                                alt="Frame"
                                fill
                                className="object-fill"
                            />
                        </div>

                        {/* Photo */}
                        <div className="absolute top-[8%] bottom-[15%] left-[5%] right-[5%] z-10">
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src={src}
                                    alt={`Gallery Bottom Photo ${i + 1}`}
                                    fill
                                    className="object-cover"
                                    placeholder="blur"
                                    sizes="(max-width: 768px) 33vw, 33vw"
                                />
                            </div>
                        </div>
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
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm touch-none"
                        onClick={closeLightbox}
                    >
                        <div
                            className="relative w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={index}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={1}
                                    onDragEnd={handleDragEnd}
                                    className="absolute w-full h-full max-w-4xl max-h-[80vh] flex items-center justify-center p-4"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={images[index]}
                                            alt={`Gallery Image ${index + 1}`}
                                            fill
                                            className="object-contain pointer-events-none"
                                            priority
                                            sizes="100vw"
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
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
