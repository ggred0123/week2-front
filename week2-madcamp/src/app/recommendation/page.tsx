"use client";
import React from "react";
import Header from "../components/Header";
import BottomNav2 from "../components/BottomNav2";
import Link from "next/link";

export default function Recommendation() {
  return (
    <div
      className="min-h-screen bg-white flex flex-col relative"
      style={{
        transform: "scale(0.55,0.4427)", // 288 / 709
        transformOrigin: "top left", // 스케일 기준점 설정
        width: "709px", // 스케일로 인해 잘리는 부분 방지
        height: "1463px", // 높이 비율 조정
        overflow: "hidden",
        position: "fixed", // 넘치는 부분 숨김
      }}
    >
      <Header title="Matching System" />

      {/* 콘텐츠 영역 */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 space-y-6">
        {/* 이미지 섹션 */}
        <div
          style={{
            width: "300px",
            height: "300px",
            flexShrink: 0,
            borderRadius: "15px",
            background:
              "url(/images/black_nub.jpg) lightgray 50% / cover no-repeat",
            marginTop: "-200px",
          }}
        ></div>

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
              marginBottom: "8px",
            }}
          >
            혼자 공부는 힘들어요...
          </p>
          <p
            style={{
              fontFamily: "Heebo",
              padding: "20px",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "22px",
              letterSpacing: "0.5px",
              color: "#000",
              marginLeft: "300px",
            }}
          >
            -넙죽이-
          </p>
        </div>
        {/* 하단 배경 박스 */}
        <div
          style={{
            width: "100%",
            height: "500px",
            maxWidth: "513px",
            background:
              "linear-gradient(135deg, #1FF7FD -57.3%, #B33BF6 51.62%, #FF844C 101.62%, #FF844B 130.58%)",
            borderRadius: "15px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "5px",
            marginTop: "0px",
            marginBottom: "-50px",
          }}
          className="flex flex-col items-center"
        >
          <h2
            style={{
              padding: "25px",
              fontSize: "36px", // 제목 글씨 크기
              fontWeight: "bold", // 굵게
            }}
            className="text-white mb-6"
          >
            팀원 매칭하기
          </h2>

          {/* 버튼들 */}
          <Link href="/wait1">
            <button
              style={{
                width: "400px", // 버튼 폭
                height: "60px", // 버튼 높이
                fontSize: "28px", // 버튼 글씨 크기
                fontWeight: "bold",
                marginBottom: "50px",
              }}
              className="mb-4 bg-blue-100 text-blue-700 rounded-lg"
            >
              Study
            </button>
          </Link>
          <Link href="/wait2">
            <button
              style={{
                width: "400px", // 버튼 폭
                height: "60px", // 버튼 높이
                fontSize: "28px", // 버튼 글씨 크기
                fontWeight: "bold",
                marginBottom: "50px",
              }}
              className="mb-4 bg-purple-100 text-purple-700 rounded-lg"
            >
              Drink
            </button>
          </Link>
          <Link href="/wait3">
            <button
              style={{
                width: "400px", // 버튼 폭
                height: "60px", // 버튼 높이
                fontSize: "28px", // 버튼 글씨 크기
                fontWeight: "bold",
              }}
              className="bg-green-100 text-green-700 rounded-lg"
            >
              몰입캠프 team
            </button>
          </Link>
        </div>
      </main>

      <BottomNav2 />
    </div>
  );
}
