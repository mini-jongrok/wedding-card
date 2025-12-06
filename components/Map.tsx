import Link from "next/link";

export default function Map() {
    return (
        <section className="py-20 bg-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-serif text-[#2F4F2F] mb-8 tracking-widest">
                    오시는 길
                </h2>

                <div className="mb-8">
                    <p className="text-2xl font-bold mb-2 text-black">라비두스</p>
                    <p className="text-gray-600">서울특별시 중구 필동로 5길7</p>
                    <p className="text-gray-600">02-2265-7000</p>
                </div>

                <div className="text-center space-y-8 mt-12">
                    <div>
                        <h3 className="font-bold text-[#2F4F2F] text-lg mb-2">지하철</h3>
                        <p className="text-gray-600">3,4호선 충무로역 1번 출구 (도보 약 5분)</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-[#2F4F2F] text-lg mb-2">셔틀버스</h3>
                        <p className="text-gray-600">충무로역 1번 출구 뒤 BHC 치킨집 앞</p>
                        <p className="text-sm text-gray-500 mt-1">* 예식 1시간 전부터 예식 시작 시간까지 운행 (3분 간격)</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-[#2F4F2F] text-lg mb-2">주차</h3>
                        <p className="text-gray-600">라비두스 별관 주차장</p>
                    </div>
                </div>

                {/* 지도 표시 영역 */}
                <div className="mb-8 mt-12">
                    {/* 카카오맵 - 지도퍼가기 (Iframe 방식) */}
                    <div className="w-full h-[240px] mb-4 bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                        <iframe
                            src="/map.html"
                            width="100%"
                            height="100%"
                            className="border-0 w-full h-full"
                            title="라비두스 오시는 길"
                        />
                    </div>

                    <div className="flex gap-3">
                        <a
                            href="https://map.naver.com/p/search/라비두스"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#03C75A] text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                            네이버 지도
                        </a>
                        <a
                            href="https://map.kakao.com/link/to/라비두스,37.55620,126.99640"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#FAE100] text-[#3b1e1e] py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                            카카오맵
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}
