import React from 'react';
import Header from "../components/Header";
import CategoryButtons from "../components/CategoryButtons";
import MeetingCard from "../components/MeetingCard";
import BottomNav from "../components/BottomNav";
import CenterBox from "../components/CenterBox";

export default function MeetingListPage() {
  return (
    <div style={{ background: '#FEFEFE' }} className="min-h-screen bg-white flex flex-col">
      {/* 헤더 */}
      <Header title="Meeting list" />

      {/* 카테고리 버튼 */}

      {/* 모임 리스트 */}
      <div className="px-4 py-4 space-y-4">
        <MeetingCard
          image={"/images/face_genius.jpg"}
          title="차은우 닮은 1분반 훈남이랑 미팅하실 미녀들?"
          subtitle="Love :)"
          location="궁동 샤오차이나"
          participants="3/6명"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12" fill="none">
              <path d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z" fill="#FA5D5D" />
              <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" fill="white" />
            </svg>
          }
        />
        <MeetingCard
          image={"/images/sung_image.jpg"}
          title="1월 24일 딸기시루팥"
          subtitle="Sweet Cakes"
          location="성심당 케이부띠끄"
          participants="8/10명"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12" fill="none">
              <path d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z" fill="#FA5D5D" />
              <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" fill="white" />
            </svg>
          }
        />
        <MeetingCard
          image={"/images/susi_image.jpg"}
          title="방어회 먹고싶어요"
          subtitle="Sashimi"
          location="신학관 3층 동아리연합회실"
          participants="3/4명"
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12" fill="none">
              <path d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z" fill="#FA5D5D" />
              <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" fill="white" />
            </svg>
          }
        />
      </div>
      {/* 하단 네비게이션 */}
      <BottomNav />
    </div>
  );
}