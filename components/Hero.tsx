import Image from "next/image";
import mainPhotoComponent from "@/app/assets/main_photo_components.png";

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-transparent">
            {/* Title */}
            <div className="absolute top-[4%] w-full text-center z-20 pointer-events-none">
                <h1
                    className="text-[#5A4D4D] tracking-[0.2em] whitespace-nowrap px-4"
                    style={{
                        fontFamily: 'AtSign, cursive',
                        fontSize: 'clamp(1.2rem, 4vw, 3rem)'
                    }}
                >
                    s a v e &nbsp; t h e &nbsp; d a t e
                </h1>
            </div>

            {/* Content Image */}
            <div className="relative z-10 w-full h-full flex justify-center items-center p-4">
                <Image
                    src={mainPhotoComponent}
                    alt="메인 웨딩 사진"
                    className="w-auto h-auto max-w-full max-h-[90vh]"
                    priority
                />
            </div>
        </section>
    );
}
