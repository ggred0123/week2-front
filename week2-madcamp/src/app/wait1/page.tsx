"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import BottomNav2 from "../components/BottomNav2";
import LoadingBar from "../components/LoadingBar";

export default function Wait1() {
  const router = useRouter();
  const [, setMatchData] = useState(null);

  useEffect(() => {
    const checkMatchStatus = async () => {
      // localStorage에서 현재 로그인한 사용자 ID 가져오기
      const currentUserId = localStorage.getItem("userId");

      if (!currentUserId) {
        console.error("User not logged in");
        return;
      }

      try {
        // URL에 직접 쿼리 파라미터 추가
        const url = new URL(
          "https://week-madcampai-563002410556.asia-northeast3.run.app/api/v1/match/recommend",
          window.location.origin
        );
        url.searchParams.append("category_id", "1");

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "x-user-id": currentUserId,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMatchData(data);
          localStorage.setItem("matchData", JSON.stringify(data));
          router.push("/result1");
        }
      } catch (error) {
        console.error("Error fetching match data:", error);
      }
    };

    const pollInterval = setInterval(checkMatchStatus, 5000);

    return () => clearInterval(pollInterval);
  }, [router]);

  // 기존의 return 부분은 그대로 유지
  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <Header title="Matching System" />

      {/* 콘텐츠 영역 */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 space-y-6">
        {/* 텍스트 박스 */}
        <div
          style={{
            width: "550px",
            height: "200px",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Heebo",
              fontSize: "30px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "26px",
              letterSpacing: "0.5px",
              color: "#000",
              marginTop: "-150px",
            }}
          >
            I want my teammate
          </p>
        </div>

        {/* 이미지 섹션 */}
        <div
          style={{
            width: "350px",
            height: "350px",
            flexShrink: 0,
            borderRadius: "15px",
            background:
              "url(/images/wait_nup.jpg) lightgray 50% / cover no-repeat",
            marginTop: "-300px",
          }}
        ></div>

        <LoadingBar />
      </main>
      <BottomNav2 />
    </div>
  );
}
