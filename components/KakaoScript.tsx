"use client";

import { useEffect } from "react";

export default function KakaoScript() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
        script.async = true;

        script.onload = () => {
            console.log("Kakao Script Loaded Manually");
            if (window.Kakao && !window.Kakao.isInitialized()) {
                const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
                if (kakaoKey) {
                    window.Kakao.init(kakaoKey);
                    console.log("Kakao SDK Initialized");
                }
            }
        };

        script.onerror = (error) => {
            console.error("Kakao Script Failed to Load", error);
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
}
