import Image from "next/image";
import mainPhoto from "@/app/assets/main_photo.jpg";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* 
        배경 이미지 설정
        - Static Import를 사용하여 빌드 타임에 이미지를 최적화하고 Blur Placeholder를 생성합니다.
      */}
            <div className="absolute inset-0">
                <Image
                    src={mainPhoto}
                    alt="메인 웨딩 사진"
                    fill
                    className="object-cover object-[50%_75%]"
                    priority
                    placeholder="blur"
                />
                {/* 텍스트 가독성을 위한 어두운 오버레이 (그라데이션) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            {/* 텍스트 내용 */}
            <div className="relative z-10 flex h-full flex-col items-center justify-start pt-[50vh] text-center text-white">

                <p className="mb-32 text-4xl" style={{ fontFamily: 'Allura, cursive' }}>We're getting married!</p>

                <h3 className="mb-6 text-5xl font-bold font-serif" style={{ fontFamily: 'Mapo, serif', fontSize: '2rem' }}>
                    서상민 백종록
                </h3>
                <p className="text-xl font-light" style={{ fontFamily: 'Mapo, sans-serif' }}>
                    2026년 4월 5일 일요일 오전 11시 30분
                </p>
                <p className="mt-2 text-sm opacity-80" style={{ fontFamily: 'Mapo, sans-serif' }}>
                    서울 라비두스
                </p>

                {/* 스크롤 유도 화살표 */}
                <div className="absolute bottom-10 animate-bounce">
                    <p className="text-xs tracking-widest opacity-70" style={{ fontFamily: 'Mapo, sans-serif' }}>아래로 스크롤</p>
                </div>
            </div>
        </section>
    );
}
