"use client";
import React from "react";
import Header from "../components/Header";
import BottomNav2 from "../components/BottomNav2";
import LoadingBar from "../components/LoadingBar";

export default function Wait1() {
  return (
    <div
      className="min-h-screen bg-white flex flex-col relative"
      style={{
        transform: "scale(0.55,0.4427)", // 288 / 709
        transformOrigin: "top left", // 스케일 기준점 설정
        width: "709px", // 스케일로 인해 잘리는 부분 방지
        height: "1463px", // 높이 비율 조정
        overflow: "hidden",
      }}
    >
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
            backgroundColor: "rgba(255, 255, 255, 0.9)", // 흰색 배경
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
            I want my drinkmate
          </p>
        </div>

        {/* 이미지 섹션 */}
        <div
          style={{
            width: "350px",
            height: "350px",
            flexShrink: 0,
            borderRadius: "15px",
            background: 'url(/images/wait_nup.jpg) lightgray 50% / cover no-repeat',
            marginTop: "-300px",
          }}
        ></div>

        <LoadingBar />
      </main>

      <BottomNav2 />
    </div>
  );
}
