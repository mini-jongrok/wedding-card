export default function Account() {
    return (
        <section className="py-20 bg-[#F9F9F4] text-center">
            <div className="container mx-auto px-4 max-w-md">
                <h2 className="text-3xl font-serif text-[#2F4F2F] mb-8 tracking-widest">
                    마음 전하실 곳
                </h2>
                <p className="text-gray-600 mb-10 text-sm leading-relaxed">
                    참석하지 못하시더라도 축하의 마음을<br />
                    전달해 주시면 감사하겠습니다.
                </p>

                <div className="space-y-4">
                    {/* 신랑측 계좌번호 */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <details className="group">
                            <summary className="flex justify-between items-center p-4 cursor-pointer list-none">
                                <span className="font-bold text-lg text-[#2F4F2F]">신랑측 계좌번호</span>
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <div className="p-4 border-t border-gray-100 text-left space-y-3 bg-gray-50">
                                <div>
                                    <p className="text-xs text-gray-500">신랑 아버지</p>
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold text-lg">국민 000-00-0000-000</p>
                                        <span className="text-sm text-gray-700">김아빠</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">신랑 어머니</p>
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold text-lg">신한 111-11-111111</p>
                                        <span className="text-sm text-gray-700">박엄마</span>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 신부측 계좌번호 */}
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <details className="group">
                            <summary className="flex justify-between items-center p-4 cursor-pointer list-none">
                                <span className="font-bold text-lg text-[#2F4F2F]">신부측 계좌번호</span>
                                <span className="transition group-open:rotate-180">▼</span>
                            </summary>
                            <div className="p-4 border-t border-gray-100 text-left space-y-3 bg-gray-50">
                                <div>
                                    <p className="text-xs text-gray-500">신부 아버지</p>
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold text-lg">우리 222-22-222222</p>
                                        <span className="text-sm text-gray-700">이아빠</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">신부 어머니</p>
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold text-lg">농협 333-3333-3333-33</p>
                                        <span className="text-sm text-gray-700">최엄마</span>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    );
}
