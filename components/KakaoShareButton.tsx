"use client";

import React, { useEffect } from "react";

const KakaoShareButton = () => {
    useEffect(() => {
        // Kakao SDK가 로드되었는지 확인
        if (typeof window !== "undefined" && window.Kakao) {
            // 이미 초기화되어 있는지 확인
            if (!window.Kakao.isInitialized()) {
                // 환경변수에서 키를 가져옴
                const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
                if (kakaoKey) {
                    window.Kakao.init(kakaoKey);
                } else {
                    console.warn("Kakao JS Key is missing in .env.local");
                }
            }
        }
    }, []);

    const handleShare = () => {
        // DEBUGGING ALERT
        const status = {
            origin: typeof window !== 'undefined' ? window.location.origin : 'undefined',
            key: process.env.NEXT_PUBLIC_KAKAO_API_KEY ? process.env.NEXT_PUBLIC_KAKAO_API_KEY.slice(0, 5) + '...' : 'MISSING',
            isInit: typeof window !== 'undefined' && window.Kakao ? window.Kakao.isInitialized() : 'Kakao Missing'
        };
        alert(`Debug Info:\nDomain: ${status.origin}\nKey: ${status.key}\nInit: ${status.isInit}`);

        console.log("Share button clicked");
        console.log("Window.Kakao:", window.Kakao);

        if (typeof window === "undefined" || !window.Kakao) {
            alert("카카오톡 SDK가 로드되지 않았습니다.");
            return;
        }

        if (!window.Kakao.isInitialized()) {
            console.log("Attempting late initialization...");
            const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
            if (kakaoKey) {
                try {
                    window.Kakao.init(kakaoKey);
                    console.log("Late initialization successful");
                } catch (e) {
                    console.error("Late initialization failed", e);
                }
            }
        }

        if (!window.Kakao.isInitialized()) {
            alert("카카오톡 SDK가 초기화되지 않았습니다. API 키를 확인해주세요.");
            return;
        }
        window.Kakao.Share.sendDefault({
            objectType: "feed",
            content: {
                title: "서상민 ♥ 백종록 결혼합니다",
                description: "2026년 4월 5일 11시 30분, 라비두스\n소중한 분들을 초대합니다.",
                imageUrl:
                    // 실제 배포된 이미지 URL을 넣어야 가장 잘 나옵니다.
                    // 현재는 상대 경로로 넣지만, 배포 후에는 절대 경로(https://...)를 권장합니다.
                    window.location.origin + "/og-image.png",
                link: {
                    mobileWebUrl: window.location.origin,
                    webUrl: window.location.origin,
                },
            },
            buttons: [
                {
                    title: "청첩장 보러가기",
                    link: {
                        mobileWebUrl: window.location.origin,
                        webUrl: window.location.origin,
                    },
                },
            ],
        });
    };

    return (
        <button
            onClick={handleShare}
            className="bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3 px-8 rounded-full border border-gray-200 shadow-sm transition-all hover:shadow-md active:scale-95 flex items-center gap-2 mx-auto"
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#3A1D1D"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12 3C7.58 3 4 5.79 4 9.24C4 11.22 5.21 12.98 7.15 14.12L6.37 17.06C6.31 17.29 6.57 17.48 6.78 17.34L10.33 14.99C10.87 15.08 11.43 15.13 12 15.13C16.42 15.13 20 12.34 20 8.89C20 5.44 16.42 3 12 3Z" />
            </svg>
            카카오톡 공유하기
        </button>
    );
};

export default KakaoShareButton;
