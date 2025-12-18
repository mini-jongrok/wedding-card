"use client";

import React, { useEffect } from "react";

const KakaoShareButton = () => {
    useEffect(() => {
        // Kakao SDK가 로드되었는지 확인 - KakaoScript.tsx에서 로드됨
    }, []);

    const handleShare = () => {
        // if (typeof window === "undefined" || !window.Kakao) {
        //     alert("카카오톡 SDK가 로드되지 않았습니다.");
        //     return;
        // }

        if (!window.Kakao || !window.Kakao.isInitialized()) {
            alert("카카오톡 SDK가 아직 초기화되지 않았습니다. 잠시 후 다시 시도해주세요.");
            console.error("Kakao SDK not initialized. Check if KakaoScript loaded correctly.");
            return;
        }

        const currentUrl = window.location.href;
        const currentOrigin = window.location.origin;

        console.log("[Kakao Share Debug] Attempting to share...");
        console.log("[Kakao Share Debug] Current Origin (Must be registered in Kakao Console):", currentOrigin);
        console.log("[Kakao Share Debug] Link URL:", currentUrl);

        window.Kakao.Share.sendDefault({
            objectType: "feed",
            content: {
                title: "서상민 ♥ 백종록 결혼합니다",
                description: "2026년 4월 5일 11시 30분, 라비두스\n소중한 분들을 초대합니다.",
                imageUrl: "https://sangminjongrok.cards/og-image.png",
                link: {
                    mobileWebUrl: window.location.href,
                    webUrl: window.location.href,
                },
            },
            buttons: [
                {
                    title: "청첩장 보러가기",
                    link: {
                        mobileWebUrl: window.location.href,
                        webUrl: window.location.href,
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
