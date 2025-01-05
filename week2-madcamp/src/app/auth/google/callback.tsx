"use client";

import { JSX, useEffect } from "react";
import { useRouter } from "next/navigation";

const GoogleCallback = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async (): Promise<void> => {
      try {
        // URL에서 토큰과 isNewUser 정보를 가져옵니다
        const urlParams = new URLSearchParams(window.location.search);
        const isNewUser = urlParams.get("isNewUser") === "true";

        if (isNewUser) {
          // 새로운 사용자면 회원가입 폼으로 이동
          router.push("/signup");
        } else {
          // 기존 사용자면 메인 페이지로 이동
          router.push("/");
        }
      } catch (error) {
        console.error("Callback handling error:", error);
        router.push("/"); // 에러 발생 시 메인 페이지로 이동
      }
    };

    handleCallback();
  }, [router]);

  // 로딩 상태를 표시
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  );
};

export default GoogleCallback;
