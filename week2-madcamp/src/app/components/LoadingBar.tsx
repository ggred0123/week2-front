"use client";
import React, { useState, useEffect } from "react";

interface LoadingBarProps {
  size?: string; // 로딩 동그라미 크기
  color?: string; // 로딩 동그라미 색상
  textStyle?: React.CSSProperties; // 텍스트 스타일을 설정할 수 있는 props
}

const LoadingCircle: React.FC<LoadingBarProps> = ({
  size = "50px", // 기본 크기
  color = "#A53FDE", // 기본 색상
  textStyle = {
    fontSize: "40px",
    color: "#000",
    fontFamily: "Heebo",
    marginBottom: "10px",
  },
}) => {
  const [dots, setDots] = useState(""); // 점 애니메이션

  // 점 애니메이션 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "")); // 점 3개까지 추가 후 초기화
    }, 500); // 500ms 간격
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* 텍스트 (점 애니메이션 포함) */}
      <div style={textStyle}>
        Loading{dots}
      </div>

      {/* 회전 로딩바 */}
      <div
        style={{
          width: size,
          height: size,
          border: `5px solid ${color}`, // 로딩바 색상
          borderTop: `5px solid transparent`, // 투명한 부분
          borderRadius: "50%",
          animation: "spin 1s linear infinite", // 회전 애니메이션
          marginTop: "20px", // 텍스트와의 간격
        }}
      ></div>

      {/* CSS 애니메이션 추가 */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingCircle;

