"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GoogleCallbackPage = () => {
  const router = useRouter();

  useEffect(() => {
    console.log("Current URL:", window.location.href);

    // URL 파라미터 확인
    const params = new URLSearchParams(window.location.search);
    const encodedToken = params.get("accessToken");
    const isNewUser = params.get("isNewUser");

    // 토큰 디코딩
    const accessToken = encodedToken ? decodeURIComponent(encodedToken) : null;

    console.log("Parsed parameters:", {
      originalToken: encodedToken,
      decodedToken: accessToken,
      isNewUser,
    });

    if (accessToken) {
      // 디코딩된 토큰 저장
      localStorage.setItem("accessToken", accessToken);

      if (isNewUser === "true") {
        console.log("Redirecting to signup...");
        router.push("/signup");
      } else {
        console.log("Redirecting to meeting_list...");
        router.push("/meeting_list");
      }
    } else {
      console.error("No access token found in URL parameters");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
      <div className="ml-4 text-purple-500">Processing login...</div>
    </div>
  );
};

export default GoogleCallbackPage;
