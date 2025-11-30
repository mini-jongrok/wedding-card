'use client'; // 이 파일은 애니메이션 때문에 클라이언트에서 작동해야 합니다.

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// 갤러리에 들어갈 사진들 (나중에 public 폴더에 photo1.jpg 처럼 넣으시면 됩니다)
// 지금은 테스트를 위해 임시 이미지(Lorem Picsum)를 넣어뒀습니다.
const images = [
    "https://picsum.photos/id/10/800/1200", // 사진 1
    "https://picsum.photos/id/11/800/1200", // 사진 2
    "https://picsum.photos/id/12/800/1200", // 사진 3
    "https://picsum.photos/id/13/800/1200", // 사진 4
    "https://picsum.photos/id/14/800/1200", // 사진 5
];

export default function Gallery() {
    const targetRef = useRef<HTMLDivElement>(null);

    // 스크롤 진행도 (0 ~ 1) 감지
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // 스크롤을 내리면(vertical), 이미지는 옆으로(horizontal) 이동
    // ["1%", "-95%"] 수치는 사진 개수에 따라 조절 필요 (마지막 사진이 보일 때까지 이동)
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#F9F9F4]">
            {/* h-[300vh]는 스크롤할 거리를 의미합니다. 숫자가 클수록 천천히 지나갑니다. */}

            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* 안내 문구 (사진 위쪽에 고정) */}
                <div className="absolute top-10 left-0 right-0 z-10 text-center">
                    <h2 className="text-xl tracking-widest text-[#2F4F2F] mb-2">GALLERY</h2>
                    <p className="text-xs text-gray-400 animate-bounce">Scroll Down ↓</p>
                </div>

                {/* 옆으로 움직이는 이미지 트랙 */}
                <motion.div style={{ x }} className="flex gap-4 pl-4">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="relative h-[60vh] w-[80vw] flex-shrink-0 overflow-hidden rounded-xl shadow-lg bg-gray-200"
                        >
                            <Image
                                src={src}
                                alt={`Wedding Photo ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}