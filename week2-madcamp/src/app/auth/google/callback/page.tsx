"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GoogleCallbackPage = () => {
  const router = useRouter();

  useEffect(() => {
    console.log("=== Google Callback Started ===");

    const params = new URLSearchParams(window.location.search);
    console.log("Auth Token:", params.get("accessToken"));
    console.log("Is New User:", params.get("isNewUser"));

    const encodedToken = params.get("accessToken");
    if (encodedToken) {
      const accessToken = decodeURIComponent(encodedToken);
      localStorage.setItem("accessToken", accessToken);
      const isNewUser = params.get("isNewUser");

      console.log(
        "Navigation Target:",
        isNewUser === "true" ? "/signup" : "/meeting_list"
      );
      router.push(isNewUser === "true" ? "/signup" : "/meeting_list");
    } else {
      console.error("No token found in URL");
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
