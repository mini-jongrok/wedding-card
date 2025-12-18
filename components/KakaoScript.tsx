"use client";

import { useEffect } from "react";

export default function KakaoScript() {
    useEffect(() => {
        if (document.getElementById("kakao-sdk")) {
            return;
        }

        const script = document.createElement("script");
        script.id = "kakao-sdk";
        script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js";
        script.async = true;

        script.onload = () => {
            if (window.Kakao && !window.Kakao.isInitialized()) {
                const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
                if (kakaoKey) {
                    try {
                        window.Kakao.init(kakaoKey);
                        console.log("Kakao SDK Initialized successfully");
                    } catch (error) {
                        console.error("Failed to initialize Kakao SDK:", error);
                    }
                } else {
                    console.warn("NEXT_PUBLIC_KAKAO_API_KEY is missing in environment variables");
                }
            }

            // Localhost domain warning
            if (window.location.hostname === 'localhost') {
                console.info(
                    "%c[Kakao Share Debug] If you see error 4019, please ensure 'http://localhost:3000' is registered in Kakao Developers > My App > Platform > Web > Site Domain.",
                    "color: #FEE500; background: #3c1e1e; font-size: 12px; padding: 4px;"
                );
            }
        };

        script.onerror = (error) => {
            console.error("Kakao Script Failed to Load", error);
        };

        document.body.appendChild(script);

    }, []);

    return null;
}
