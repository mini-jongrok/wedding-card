import Link from "next/link";

export default function Map() {
    return (
        <section className="py-20 bg-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-serif text-[#2F4F2F] mb-8 tracking-widest">
                    오시는 길
                </h2>

                <div className="mb-8">
                    <p className="text-2xl font-bold mb-2 text-black">그랜드 웨딩홀</p>
                    <p className="text-gray-600">서울시 강남구 웨딩로 123</p>
                    <p className="text-gray-600">02-1234-5678</p>
                </div>

                {/* 지도 표시 영역 */}
                <div className="relative w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden mb-8 flex items-center justify-center">
                    <p className="text-gray-500">
                        지도 영역 (카카오/네이버 지도 연동)
                        <br />
                        <span className="text-sm">
                            * 여기에 지도 iframe이나 API 코드를 넣으시면 됩니다.
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
