import Image from "next/image";
import background from "@/app/assets/background.png";
import mainPhotoComponent from "@/app/assets/main_photo_components.png";
import FadeInSection from "@/components/FadeInSection";

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-transparent">
            {/* Title */}
            <div className="absolute top-[4%] w-full z-20 pointer-events-none px-6">
                <h1
                    className="text-[#5A4D4D] w-full flex justify-between"
                    style={{
                        fontFamily: 'AtSign, cursive',
                        fontSize: 'clamp(1rem, 6vw, 1rem)'
                    }}
                >
                    {"save the date".split("").map((char, index) => (
                        <span key={index}>{char === " " ? "\u00A0" : char}</span>
                    ))}
                </h1>
            </div>

            {/* Background */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    backgroundImage: `url(${background.src})`,
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'repeat-y',
                    backgroundPosition: 'top center'
                }}
            />

            {/* Content Image */}
            <FadeInSection className="relative z-10 w-full h-full flex justify-center items-center p-4">
                <Image
                    src={mainPhotoComponent}
                    alt="메인 웨딩 사진"
                    className="w-auto h-auto max-w-full max-h-[90vh]"
                    priority
                />
            </FadeInSection>
        </section>
    );
}
