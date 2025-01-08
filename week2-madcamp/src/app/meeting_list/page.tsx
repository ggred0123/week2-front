"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CategoryButtons from "../components/CategoryButtons";
import CenterBox from "../components/CenterBox";
import BottomNav1 from "../components/BottomNav1";
import CardPopup from "../components/CardPopup";
import MeetingCard from "../components/MeetingCard";

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
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);
  const [cardsFromApi, setCardsFromApi] = useState<CardData[]>([]);
  const [filteredCards, setFilteredCards] = useState<ProcessedCardData[]>([]);
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

  const handleCategoryChange = (color: string, _: any, text: string) => {
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
          isOpen={!!selectedCard}
          onClose={() => setSelectedCard(null)}
          title={selectedCard.title}
          description={selectedCard.description}
          image={selectedCard.image}
          location={selectedCard.location}
          participants={selectedCard.participants}
          startTime={selectedCard.startTime}
          endTime={selectedCard.endTime}
        />
      )}
      <BottomNav1 />
    </div>
  );
}