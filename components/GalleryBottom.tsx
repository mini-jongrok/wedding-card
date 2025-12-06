import Image from "next/image";
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

    return (
        <section className="bg-[#F9F9F4] py-16 px-4">
            <h2 className="text-center text-xl tracking-widest text-[#2F4F2F] mb-8">GALLERY</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 container mx-auto max-w-[1000px]">
                {images.map((src, index) => (
                    <div key={index} className="relative aspect-[3/4] w-full bg-gray-200 overflow-hidden rounded-md">
                        <Image
                            src={src}
                            alt={`Gallery Bottom Photo ${index + 4}`}
                            fill
                            className="object-cover"
                            placeholder="blur"
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
