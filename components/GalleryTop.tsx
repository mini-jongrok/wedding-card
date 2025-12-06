import Image from "next/image";
import photo1 from "@/assets/gallery/photo_01.jpg";
import photo2 from "@/assets/gallery/photo_02.jpg";
import photo3 from "@/assets/gallery/photo_03.jpg";

export default function GalleryTop() {
    const images = [photo1, photo2, photo3];

    return (
        <section className="bg-white py-10 px-4 flex flex-col items-center gap-8">
            {images.map((src, index) => (
                <div key={index} className="w-full max-w-[500px] shadow-lg rounded-xl overflow-hidden">
                    <Image
                        src={src}
                        alt={`Gallery Top Photo ${index + 1}`}
                        placeholder="blur"
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                    />
                </div>
            ))}
        </section>
    );
}
