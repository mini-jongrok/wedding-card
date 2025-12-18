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
        script.integrity = "sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2txfDWgyqVyhm1utNCce1a";
        script.crossOrigin = "anonymous";
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

    }, []);

    return null;
}
