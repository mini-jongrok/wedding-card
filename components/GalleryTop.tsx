import Image from "next/image";
import photo1 from "@/assets/gallery/photo_01.jpg";
import photo2 from "@/assets/gallery/photo_02.jpg";
import photo3 from "@/assets/gallery/photo_03.jpg";

export default function GalleryTop() {
    const images = [photo1, photo2, photo3];

    return (
        <section className="relative w-full overflow-x-auto flex snap-x snap-mandatory scrollbar-hide">
            {/* 가로 스크롤 컨테이너 */}
            {images.map((src, index) => (
                <div key={index} className="relative w-full h-[80vh] flex-shrink-0 snap-center">
                    <Image
                        src={src}
                        alt={`Gallery Top Photo ${index + 1}`}
                        fill
                        className="object-cover"
                        placeholder="blur"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* 스크롤 힌트 (선택사항) */}
            <div className="absolute bottom-4 right-4 bg-black/30 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm z-10">
                SCROLL &rarr;
            </div>
        </section>
    );
}
