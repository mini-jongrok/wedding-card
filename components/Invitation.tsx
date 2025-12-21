"use client";
import Image from "next/image";
import background from "@/app/assets/background.png";
import middleSectionComponent from "@/app/assets/middle_section_components.png";
import FadeInSection from "@/components/FadeInSection";

export default function Invitation() {
    return (
        <section className="relative w-full py-20 overflow-hidden">
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
            <FadeInSection className="relative z-10 flex flex-col items-center justify-center w-full">
                <div className="relative w-[120%] -ml-[5%] max-w-4xl">
                    {/* Component Image */}
                    <Image
                        src={middleSectionComponent}
                        alt="Wedding Invitation Paper"
                        className="w-full h-auto"
                        priority
                    />

                    {/* Invitation Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[75%] text-center space-y-8 translate-x-4 -translate-y-4">
                            <p className="not_sans text-[#5A4D4D] text-base leading-relaxed tracking-widest font-serif font-bold" style={{ fontFamily: 'Mapo, serif' }}>
                                친구에서 연인으로<br />
                                함께한 지 6년<br />
                                서로를 통해<br />
                                아름다운 세상을 보았습니다.
                            </p>
                            <p className="not_sans text-[#5A4D4D] text-base leading-relaxed tracking-widest font-serif font-bold" style={{ fontFamily: 'Mapo, serif' }}>
                                이제는 환히 사랑을 외치는<br />
                                동반자로 함께하려 합니다.
                            </p>
                            <p className="not_sans text-[#5A4D4D] text-base leading-relaxed tracking-widest font-serif font-bold" style={{ fontFamily: 'Mapo, serif' }}>
                                귀한 걸음으로 오셔서<br />
                                축복해 주시고 함께해 주세요.
                            </p>
                        </div>
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
}
