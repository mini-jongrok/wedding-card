import Image from "next/image";
import mainPhoto from "@/app/assets/main_photo.png";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-white">
            {/* 
        배경 이미지 설정
        - Static Import를 사용하여 빌드 타임에 이미지를 최적화하고 Blur Placeholder를 생성합니다.
        - object-contain: 이미지 비율 유지, object-top: 이미지가 맨 위부터 표시
        - 가로가 너무 커지면 좌우에 흰색 배경이 표시됨
      */}
            <div className="absolute inset-0 flex justify-center">
                <Image
                    src={mainPhoto}
                    alt="메인 웨딩 사진"
                    fill
                    className="object-contain object-top"
                    priority
                    placeholder="blur"
                />
                {/* 텍스트 가독성을 위한 어두운 오버레이 (그라데이션) */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent" /> */}
            </div>
        </section>
    );
}
