"use client";
import Image from "next/image";
import photo10 from "@/assets/gallery/photo_10.jpg";

export default function Invitation() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 flex flex-col items-center">
                {/* Original Photo */}
                <div className="relative w-full max-w-sm aspect-[3/4] mb-12">
                    <div className="relative w-full h-full overflow-hidden">
                        <Image
                            src={photo10}
                            alt="Wedding Invitation Photo"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Invitation Text */}
                <div className="text-center space-y-6">
                    <p className="not_sans text-[#5A4D4D] text-base leading-8 tracking-widest font-serif">
                        친구에서 연인으로 함께한 지 6년<br />
                        서로를 통해 아름다운 세상을 보았습니다.
                    </p>
                    <p className="not_sans text-[#5A4D4D] text-base leading-8 tracking-widest font-serif">
                        이제는 환히 사랑을 외치는<br />
                        동반자로 함께하려 합니다.
                    </p>
                    <p className="not_sans text-[#5A4D4D] text-base leading-8 tracking-widest font-serif">
                        귀한 걸음으로 오셔서<br />
                        축복해 주시고 함께해 주세요.
                    </p>
                </div>
            </div>
        </section>
    );
}
