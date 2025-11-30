import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* 
        배경 이미지 설정
        - '/hero-bg.jpg' 부분을 실제 이미지 경로(public 폴더 기준)로 변경하세요.
        - 또는 아래처럼 외부 URL을 사용할 수도 있습니다.
      */}
            <div className="absolute inset-0">
                <Image
                    src="https://picsum.photos/id/42/1920/1080" // 예시 이미지
                    alt="메인 웨딩 사진"
                    fill
                    className="object-cover"
                    priority
                />
                {/* 텍스트 가독성을 위한 어두운 오버레이 */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* 텍스트 내용 */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
                <p className="mb-4 text-lg tracking-[0.2em] uppercase">저희 결혼합니다</p>
                <h1 className="mb-6 text-5xl font-bold font-serif">
                    김철수 & 이영희
                </h1>
                <p className="text-xl font-light">
                    2025년 10월 25일 토요일 오후 12시
                </p>
                <p className="mt-2 text-sm opacity-80">
                    서울 그랜드 웨딩홀
                </p>

                {/* 스크롤 유도 화살표 */}
                <div className="absolute bottom-10 animate-bounce">
                    <p className="text-xs tracking-widest opacity-70">아래로 스크롤</p>
                </div>
            </div>
        </section>
    );
}
