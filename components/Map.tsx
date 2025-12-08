import Link from "next/link";

export default function Map() {
    return (
        <section className="py-20 bg-white text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-serif text-[#2F4F2F] mb-8 tracking-widest" style={{ fontFamily: 'Mapo, serif' }}>
                    오시는 길
                </h2>

                <div className="mb-8">
                    <p className="text-2xl font-bold mb-2 text-black" style={{ fontFamily: 'Mapo, sans-serif' }}>라비두스</p>
                    <p className="text-gray-600" style={{ fontFamily: 'Mapo, sans-serif' }}>서울특별시 중구 필동로 5길7</p>
                    <p className="text-gray-600">02-2265-7000</p>
                </div>

                <div className="text-center space-y-8 mt-12">
                    <div>
                        <h3 className="font-bold text-[#2F4F2F] text-lg mb-2" style={{ fontFamily: 'Mapo, sans-serif' }}>지하철</h3>
                        <p className="text-gray-600" style={{ fontFamily: 'Mapo, sans-serif' }}>3,4호선 충무로역 1번 출구 (도보 약 5분)</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-[#2F4F2F] text-lg mb-2" style={{ fontFamily: 'Mapo, sans-serif' }}>셔틀버스</h3>
                        <p className="text-gray-600" style={{ fontFamily: 'Mapo, sans-serif' }}>충무로역 1번 출구 뒤 BHC 치킨집 앞</p>
                        <p className="text-sm text-gray-500 mt-1" style={{ fontFamily: 'Mapo, sans-serif' }}>* 예식 1시간 전부터 예식 시작 시간까지 운행 (3분 간격)</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-[#2F4F2F] text-lg mb-2" style={{ fontFamily: 'Mapo, sans-serif' }}>주차</h3>
                        <p className="text-gray-600" style={{ fontFamily: 'Mapo, sans-serif' }}>라비두스 별관 주차장</p>
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

                    <div className="flex gap-4 justify-center">
                        <a
                            href="https://map.naver.com/p/search/라비두스"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-[#03C75A] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                            aria-label="Naver Map"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.0367 21H20.25V3H16.0367V12.7533L7.96331 3H3.75V21H7.96331V11.2467L16.0367 21Z" fill="white" />
                            </svg>
                        </a>
                        <a
                            href="https://map.kakao.com/link/to/라비두스,37.55620,126.99640"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-[#FAE100] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
                            aria-label="Kakao Map"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.58172 3 4 5.91015 4 9.5C4 11.7578 5.33333 13.7812 7.42578 14.9453C7.30078 15.3438 6.87109 16.8047 6.48047 18.1328C6.34766 18.5938 6.84375 18.9102 7.20703 18.6758C9.28125 17.332 11.457 15.8984 12 15.8984H12.0234C12.0156 15.8984 12.0078 15.8984 12 15.8984C16.4183 15.8984 20 12.9883 20 9.39844C20 5.80859 16.4183 3 12 3Z" fill="#3B1E1E" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}
