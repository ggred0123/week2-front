"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CategoryButtons from "../components/CategoryButtons";
import CenterBox from "../components/CenterBox";
import BottomNav1 from "../components/BottomNav1";
import CardPopup from "../components/CardPopup";
import MeetingCard from "../components/MeetingCard";
import Popup from "../components/Popup";

interface CardData {
  id: number;
  hostId: number;
  title: string;
  description: string;
  categoryId: number;
  meetingImageUrl: string;
  startTime: string;
  endTime: string;
  maxPeople: number;
  currentPeople: number;
  location: string;
  keyword: string;
}

interface ProcessedCardData {
  id: number;
  image: string;
  title: string;
  location: string;
  participants: string;
  category: number;
  startTime: string;
  endTime: string;
  keyword: string;
  description: string;
}

interface CenterBoxContent {
  color: string;
  icon: "meet" | "exercise" | "drink" | "study";
  text: string;
}

interface CategoryStyle {
  text: string;
  bg: string;
}

export default function MeetingListPage() {
  const [centerBoxContent, setCenterBoxContent] = useState<CenterBoxContent>({
    color: "#FA5D5D",
    icon: "meet",
    text: "Meet new friends",
  });
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1);
  const [cardsFromApi, setCardsFromApi] = useState<CardData[]>([]);
  const [filteredCards, setFilteredCards] = useState<ProcessedCardData[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<ProcessedCardData | null>(
    null
  );

  const categoryStyles: Record<number, CategoryStyle> = {
    1: { text: "#FA5D5D", bg: "rgba(250, 93, 93, 0.10)" },
    2: { text: "#2D9CDB", bg: "rgba(45, 156, 219, 0.10)" },
    3: { text: "#9B51E0", bg: "rgba(155, 81, 224, 0.10)" },
    4: { text: "#27AE60", bg: "rgba(39, 174, 96, 0.10)" },
  };

  const processDBData = (data: CardData): ProcessedCardData => {
    return {
      id: data.id,
      image: data.meetingImageUrl,
      title: data.title,
      location: data.location,
      participants: `${data.currentPeople}/${data.maxPeople}명`,
      category: data.categoryId,
      startTime: new Date(data.startTime).toLocaleString(),
      endTime: new Date(data.endTime).toLocaleString(),
      keyword: data.keyword,
      description: data.description,
    };
  };

  const updateCenterBox = (
    color: string,
    icon: "meet" | "exercise" | "drink" | "study",
    text: string
  ) => {
    setCenterBoxContent({ color, icon, text });
  };

  // 카테고리 버튼 클릭 시 실행되는 함수
  // (카테고리명 -> ID 매핑, CenterBox 내용 업데이트, selectedCategoryId 업데이트)
  const handleCategoryChange = (color: string, _: unknown, text: string) => {
    const iconMap: Record<
      string,
      { id: number; icon: "meet" | "exercise" | "drink" | "study" }
    > = {
      "Meet new friends": { id: 1, icon: "meet" },
      Exercise: { id: 2, icon: "exercise" },
      Drink: { id: 3, icon: "drink" },
      Study: { id: 4, icon: "study" },
    };
    const categoryInfo = iconMap[text] || { id: 1, icon: "meet" };
    updateCenterBox(color, categoryInfo.icon, text);
    setSelectedCategoryId(categoryInfo.id);
  };

  const fetchCardsFromApi = async (categoryId: number) => {
    try {
      const baseUrl =
        "https://everymadcamp-service-320281252015.asia-northeast3.run.app/meetings";
      const url =
        categoryId === -1
          ? `${baseUrl}/all`
          : `${baseUrl}/{categoryId}?categoryId=${categoryId}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      const data = await response.json();
      setCardsFromApi(data.meetings || []);
      const meetingsData = data.meetings || [];
      setCardsFromApi(meetingsData);
    } catch (error) {
      console.error("Failed to fetch cards:", error);
      setCardsFromApi([]);
    }
  };

  useEffect(() => {
    fetchCardsFromApi(selectedCategoryId);
  }, [selectedCategoryId]);

  useEffect(() => {
    if (Array.isArray(cardsFromApi) && cardsFromApi.length > 0) {
      setFilteredCards(cardsFromApi.map(processDBData));
    } else {
      setFilteredCards([]);
    }
  }, [cardsFromApi]);

  const locationIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="14"
      viewBox="0 0 10 12"
      fill="none"
      style={{ marginLeft: "-12px" }}
    >
      <path
        d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z"
        fill="#FA5D5D"
      />
      <path
        d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z"
        fill="white"
      />
    </svg>
  );

  return (
    <div
      className="min-h-screen bg-white flex flex-col relative overflow-hidden"
      style={{
        transform: "scale(0.535,0.4455)", // 288 / 709
        transformOrigin: "top left", // 스케일 기준점 설정
        width: "709px", // 스케일로 인해 잘리는 부분 방지
        height: "1495px", // 높이 비율 조정
        overflow: "hidden",
        position: "fixed", // 넘치는 부분 숨김
      }}
    >
      <Header title="Meeting list" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px- py-1">
          <CategoryButtons onCategoryChange={handleCategoryChange} />
        </div>
        <div className="px-2 py-1">
          <CenterBox
            color={centerBoxContent.color}
            icon={centerBoxContent.icon}
            text={centerBoxContent.text}
          />
        </div>
        <div className="flex-1 overflow-y-auto px-2 space-y-3 pb-20">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="cursor-pointer"
              onClick={() => setSelectedCard(card)}
            >
              <MeetingCard
                image={card.image}
                title={card.title}
                icon={locationIcon}
                location={card.location}
                participants={card.participants}
                subtitleColor={categoryStyles[card.category]?.text}
                subtitleBgColor={categoryStyles[card.category]?.bg}
                startTime={card.startTime}
                endTime={card.endTime}
                keyword={card.keyword}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
      {selectedCard && (
        <CardPopup
          meetingId={selectedCard.id}
          isOpen={!!selectedCard}
          onClose={() => setSelectedCard(null)}
          title={selectedCard.title}
          description={selectedCard.description}
          image={selectedCard.image}
          location={selectedCard.location}
          participants={selectedCard.participants}
          startTime={selectedCard.startTime}
          endTime={selectedCard.endTime}
          keyword={selectedCard.keyword}
        />
      )}

      {/* + 버튼 */}
      <button
        className="fixed bottom-20 right-3 w-8 h-8 flex items-center justify-center rounded-full shadow-lg bg-pink-500 z-10"
        style={{
          width: "104px", // 버튼 너비 (기존보다 크거나 작게 설정)
          height: "104px", // 버튼 높이
          fontSize: "44px", // 버튼 내부 아이콘 크기 조정
          right: "30px",
          bottom: "140px",
        }}
        onClick={() => setIsPopupOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="124"
          height="124"
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

      {/* 하단 네비게이션 */}
      <div className="fixed bottom-0 left-0 right-0 h-16">
        <BottomNav1 />
      </div>

      {/* 팝업 예시 */}
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h2 className="text-base font-bold mb-1">Add New Item</h2>
        <p className="text-sm">This is a placeholder for the popup content.</p>
      </Popup>
    </div>
  );
}
