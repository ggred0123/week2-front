"use client";
import React from "react";

interface CardPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  keyword: string; // 카테고리 이름
  description: string;
  image: string;
  location: string;
  participants: string;
  startTime: string;
  endTime: string;
}

const CardPopup: React.FC<CardPopupProps> = ({
  isOpen,
  onClose,
  title,
  keyword,
  description,
  image,
  location,
  participants,
  startTime,
  endTime,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-lg shadow-lg relative">
        {/* 이미지 섹션 */}
        <div
          className="flex justify-center items-center w-80 h-80 rounded-lg overflow-hidden mb-8"
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // 그림자 추가
            position: "relative", // 위치 조정을 위한 `relative` 설정
            left: "70px", // 컨테이너를 오른쪽으로 이동
            top: "10px", // 컨테이너를 아래로 이동
          }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{
              borderRadius: "12px", // 사진 모서리 둥글게
              transform: "scale(1.02)", // 약간 확대된 느낌
              transformOrigin: "top right",
              transition: "transform 0.3s", // 부드러운 효과
            }}
          />
        </div>

        {/* 제목 및 카테고리 */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-black mb-2">{title}</h2>
          <p className="text-base text-gray-600 mb-8 leading-relaxed">{keyword}</p>
        </div>

        {/* 설명 섹션 */}
        <p className="text-base text-gray-600 mb-10 leading-relaxed">{description}</p>

        {/* 상세 정보 */}
        <div className="mb-12 space-y-7">
          <p className="text-lg text-gray-600 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              className="mr-3"
            >
              <path
                d="M8 0C5.23858 0 3 2.23858 3 5C3 8.5 8 13 8 13C8 13 13 8.5 13 5C13 2.23858 10.7614 0 8 0ZM8 7C7.20435 7 6.44129 6.68393 5.87868 6.12132C5.31607 5.55871 5 4.79565 5 4C5 3.20435 5.31607 2.44129 5.87868 1.87868C6.44129 1.31607 7.20435 1 8 1C8.79565 1 9.55871 1.31607 10.1213 1.87868C10.6839 2.44129 11 3.20435 11 4C11 4.79565 10.6839 5.55871 10.1213 6.12132C9.55871 6.68393 8.79565 7 8 7Z"
                fill="#FA5D5D"
              />
            </svg>
            {location}
          </p>
          <p className="text-lg text-gray-600">
            <strong>현재 인원:</strong> {participants}
          </p>
          <p className="text-lg text-gray-600">
            <strong>시간:</strong> {startTime} - {endTime}
          </p>
        </div>

        {/* 버튼 섹션 */}
        <div className="flex justify-between mt-6">
          <button
            className="w-[40%] py-3 rounded-lg hover:opacity-90 transition"
            style={{
              background: "rgba(255, 199, 199, 0.56)", // 닫기 버튼 배경색
              color: "black", // 텍스트 색상
              borderRadius: "20px",
            }}
            onClick={onClose}
          >
            닫기
          </button>
          <button className="w-[40%] py-3 rounded-lg hover:opacity-90 transition"
          style={{
            background: "rgba(112, 244, 182, 0.94)", // 참여 버튼 배경색
            color: "black", // 텍스트 색상
            borderRadius: "20px",
          }}
        >
            참여
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPopup;
