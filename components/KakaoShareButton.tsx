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

        // Masked Key Check
        const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY || "";
        const maskedKey = kakaoKey.slice(0, 1) + "****" + kakaoKey.slice(-1);

        // Hardcode the verified domain to ensure consistent sharing behavior
        const shareUrl = "https://sangminjongrok.cards";

        const templateId = Number(process.env.NEXT_PUBLIC_KAKAO_TEMPLATE_ID);

        if (!templateId) {
            alert("카카오 메시지 템플릿 ID가 설정되지 않았습니다. .env.local 파일을 확인해주세요.");
            console.error("Missing NEXT_PUBLIC_KAKAO_TEMPLATE_ID");
            return;
        }

        console.log("[Kakao Share Debug] Using Template ID:", templateId);

        window.Kakao.Share.sendCustom({
            templateId: templateId,
            templateArgs: {
                title: "서상민 ♥ 백종록 결혼합니다",
                description: "2026년 4월 5일 11시 30분, 라비두스\n소중한 분들을 초대합니다.",
                url: shareUrl,
                locationUrl: "https://place.map.kakao.com/11135706", // Wedding Hall Kakao Map URL,
                button2_domain: "https://kko.to",
            },
        });
    };

    return (
        <div className="flex items-center justify-center gap-3 mx-auto">
            <button
                onClick={handleShare}
                aria-label="카카오톡으로 공유하기"
                className="group relative flex items-center justify-center w-11 h-11 bg-[#FDF5E6] rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 active:scale-95"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#3A1D1D"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform transition-transform group-hover:rotate-12"
                >
                    <path d="M12 3C7.58 3 4 5.79 4 9.24C4 11.22 5.21 12.98 7.15 14.12L6.37 17.06C6.31 17.29 6.57 17.48 6.78 17.34L10.33 14.99C10.87 15.08 11.43 15.13 12 15.13C16.42 15.13 20 12.34 20 8.89C20 5.44 16.42 3 12 3Z" />
                </svg>
            </button>
            <span className="text-[#3A1D1D] font-medium text-base" style={{ fontFamily: 'Mapo, serif' }}>
                카카오톡으로 공유하기
            </span>
        </div>
    );
};

export default KakaoShareButton;
