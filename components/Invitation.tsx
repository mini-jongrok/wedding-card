"use client";
import Image from "next/image";
import middleSectionComponent from "@/app/assets/middle_section_components.png";

export default function Invitation() {
    return (
        <section className="relative w-full py-20 overflow-hidden">
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] p-4">
                <div className="relative w-[80%]">
                    {/* Component Image */}
                    <Image
                        src={middleSectionComponent}
                        alt="Wedding Invitation Paper"
                        className="w-full h-auto"
                        priority
                    />

                    {/* Invitation Text Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-6 pb-32 pl-12">
                        <p className="not_sans text-[#5A4D4D] text-base leading-8 tracking-widest font-serif font-bold" style={{ fontFamily: 'Mapo, serif' }}>
                            친구에서 연인으로 함께한 지 6년<br />
                            서로를 통해 아름다운 세상을 보았습니다.
                        </p>
                        <p className="not_sans text-[#5A4D4D] text-base leading-8 tracking-widest font-serif font-bold" style={{ fontFamily: 'Mapo, serif' }}>
                            이제는 환히 사랑을 외치는<br />
                            동반자로 함께하려 합니다.
                        </p>
                        <p className="not_sans text-[#5A4D4D] text-base leading-8 tracking-widest font-serif font-bold" style={{ fontFamily: 'Mapo, serif' }}>
                            귀한 걸음으로 오셔서<br />
                            축복해 주시고 함께해 주세요.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
