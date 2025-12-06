'use client';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// 갤러리 이미지들 (임시 이미지)
const images = [
  "/gallery/photo_01.jpg",
  "/gallery/photo_02.jpg",
  "/gallery/photo_03.jpg",
  "/gallery/photo_04.jpg",
  "/gallery/photo_05.jpg",
  "/gallery/photo_06.jpg",
  "/gallery/photo_07.jpg",
  "/gallery/photo_08.jpg",
  "/gallery/photo_09.jpg",
];

export default function Gallery() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#F9F9F4]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-10 left-0 right-0 z-10 text-center">
          <h2 className="text-xl tracking-widest text-[#2F4F2F] mb-2">GALLERY</h2>
          <p className="text-xs text-gray-400 animate-bounce">Scroll Down ↓</p>
        </div>
        <motion.div style={{ x }} className="flex gap-4 pl-4">
          {images.map((src, index) => (
            <div key={index} className="relative h-[60vh] w-[80vw] flex-shrink-0 overflow-hidden rounded-xl shadow-lg bg-gray-200">
              <Image src={src} alt={`Photo ${index}`} fill className="object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}