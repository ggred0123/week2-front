"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GoogleCallbackPage = () => {
  const router = useRouter();

  useEffect(() => {
    console.log("=== Google Callback Started ===");

    const params = new URLSearchParams(window.location.search);
    const userId = params.get("userId");

    // 디버깅을 위한 로그 추가
    console.log("URL Parameters:", {
      userId: params.get("userId"),
      accessToken: params.get("accessToken"),
      isNewUser: params.get("isNewUser"),
    });

    const encodedToken = params.get("accessToken");

    if (encodedToken && userId) {
      const accessToken = decodeURIComponent(encodedToken);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userId", userId);

      // 저장 직후 확인을 위한 로그
      console.log("Stored in localStorage:", {
        userId: localStorage.getItem("userId"),
        accessToken: localStorage.getItem("accessToken"),
      });

      const isNewUser = params.get("isNewUser");
      router.push(isNewUser === "true" ? "/signup" : "/meeting_list");
    } else {
      console.error("Missing required parameters:", {
        hasToken: !!encodedToken,
        hasUserId: !!userId,
      });
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500" />
      <div className="ml-4 text-purple-500">처리중...</div>
    </div>
  );
};

export default GoogleCallbackPage;
