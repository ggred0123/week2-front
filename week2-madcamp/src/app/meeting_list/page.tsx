"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import CategoryButtons from "../components/CategoryButtons";
import CenterBox from "../components/CenterBox";
import BottomNav1 from "../components/BottomNav1";
import Popup from "../components/Popup"; // Popup 컴포넌트 임포트
export default function MeetingListPage() {
  const [centerBoxContent, setCenterBoxContent] = useState<{
    color: string;
    icon: "meet" | "exercise" | "drink" | "study";
    text: string;
  }>({
    color: "#FA5D5D",
    icon: "meet",
    text: "Meet new friend list",
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false); // 팝업 상태 관리

  const updateCenterBox = (
    color: string,
    icon: "meet" | "exercise" | "drink" | "study",
    text: string
  ) => {
    setCenterBoxContent({ color, icon, text });
  };

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  return (
    <div
      className="min-h-screen bg-white flex flex-col relative"
      style={{
        transform: "scale(0.406)", // 288 / 709
        transformOrigin: "top left", // 스케일 기준점 설정
        width: "709px", // 스케일로 인해 잘리는 부분 방지
        height: "1463px", // 높이 비율 조정
        overflow: "hidden",  position: "fixed",// 넘치는 부분 숨김
      }}
    >
      <Header title="Meeting list" />
      <div className="px-4 py-2">
        <CategoryButtons
          onCategoryChange={(color, _, text) => {
            const iconMap: Record<
              string,
              "meet" | "exercise" | "drink" | "study"
            > = {
              "Meet new friends": "meet",
              Exercise: "exercise",
              Drink: "drink",
              Study: "study",
            };
            const iconKey = iconMap[text] || "meet";
            updateCenterBox(color, iconKey, text);
          }}
        />
      </div>
      <div className="px-2 py-2">
        <CenterBox
          color={centerBoxContent.color}
          icon={centerBoxContent.icon}
          text={centerBoxContent.text}
        />
      </div>
      <BottomNav1 />

      {/* Floating + Button */}
      <button
        className="absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center rounded-full shadow-lg bg-pink-500"
        style={{
          width: "72px",
          height: "72px",
          backgroundColor: "#FA5D5D",
          position: "absolute",
          bottom: "20px",
          right: "20px",
        }}
        onClick={togglePopup}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 70 70"
          fill="none"
        >
          <circle cx="35" cy="35" r="25" fill="white" />
          <path
            d="M14.3763 14.3763C17.0718 11.6115 20.2895 9.40951 23.8427 7.89801C27.3959 6.3865 31.2138 5.59558 35.0751 5.57111C38.9363 5.54664 42.764 6.28912 46.3361 7.75548C49.9081 9.22183 53.1535 11.3829 55.8839 14.1132C58.6142 16.8436 60.7753 20.089 62.2416 23.661C63.708 27.2331 64.4505 31.0608 64.426 34.922C64.4015 38.7833 63.6106 42.6012 62.0991 46.1544C60.5876 49.7076 58.3856 52.9253 55.6208 55.6208C50.1199 60.9338 42.7524 63.8736 35.105 63.8072C27.4576 63.7407 20.1422 60.6733 14.7345 55.2656C9.32673 49.8578 6.2593 42.5425 6.19284 34.895C6.12639 27.2476 9.06623 19.8801 14.3792 14.3792L14.3763 14.3763ZM37.9167 26.25C37.9167 25.4765 37.6094 24.7346 37.0624 24.1876C36.5154 23.6406 35.7736 23.3333 35 23.3333C34.2265 23.3333 33.4846 23.6406 32.9376 24.1876C32.3906 24.7346 32.0833 25.4765 32.0833 26.25V32.0833H26.25C25.4765 32.0833 24.7346 32.3906 24.1876 32.9376C23.6406 33.4846 23.3333 34.2265 23.3333 35C23.3333 35.7736 23.6406 36.5154 24.1876 37.0624C24.7346 37.6094 25.4765 37.9167 26.25 37.9167H32.0833V43.75C32.0833 44.5236 32.3906 45.2654 32.9376 45.8124C33.4846 46.3594 34.2265 46.6667 35 46.6667C35.7736 46.6667 36.5154 46.3594 37.0624 45.8124C37.6094 45.2654 37.9167 44.5236 37.9167 43.75V37.9167H43.75C44.5235 37.9167 45.2654 37.6094 45.8124 37.0624C46.3594 36.5154 46.6667 35.7736 46.6667 35C46.6667 34.2265 46.3594 33.4846 45.8124 32.9376C45.2654 32.3906 44.5235 32.0833 43.75 32.0833H37.9167V26.25Z"
            fill="#FA5D5D"
          />
        </svg>
      </button>

      {/* Popup */}
      <Popup isOpen={isPopupOpen} onClose={togglePopup}>
        <h2 className="text-lg font-bold mb-2">Add New Item</h2>
        <p className="mb-2 text-sm">This is a placeholder for the popup content.</p>
      </Popup>
    </div>
  );
}
