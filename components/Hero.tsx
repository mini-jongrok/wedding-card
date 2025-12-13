import Image from "next/image";
import mainPhotoComponent from "@/app/assets/main_photo_components.png";

export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-transparent">
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
