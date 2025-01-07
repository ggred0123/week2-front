"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CategoryButtons from "../components/CategoryButtons";
import CenterBox from "../components/CenterBox";
import BottomNav1 from "../components/BottomNav1";
import Popup from "../components/Popup";
import MeetingCard from "../components/MeetingCard";

export default function MeetingListPage() {
  const [centerBoxContent, setCenterBoxContent] = useState({
    color: "#FA5D5D",
    icon: "meet",
    text: "Meet new friend list",
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [filteredCards, setFilteredCards] = useState([]);

  const allCards = [
    {
      hostId: 1,
      title: "딸기시루팥",
      description: "Meet new friends over sweet cakes!",
      categoryId: 0,
      meetingImageUrl: "/images/sung_image.jpg",
      startTime: "2025-01-07T12:57:27.598Z",
      endTime: "2025-01-07T14:00:00.000Z",
      maxPeople: 10,
      currentPeople: 8,
      location: "성심당 케이부띠끄",
      keyword: "strawberry",
    },
    {
      hostId: 2,
      title: "방어회 먹고싶어요",
      description: "Let's enjoy fresh sashimi together!",
      categoryId: 2,
      meetingImageUrl: "/images/susi_image.jpg",
      startTime: "2025-01-08T18:00:00.000Z",
      endTime: "2025-01-08T20:00:00.000Z",
      maxPeople: 4,
      currentPeople: 3,
      location: "신학관 3층 동아리연합회실",
      keyword: "sashimi",
    },
    {
      hostId: 3,
      title: "오늘 헬스 갈 사람?",
      description: "Workout session at the gym!",
      categoryId: 1,
      meetingImageUrl: "/images/icecream_image.jpg",
      startTime: "2025-01-09T10:00:00.000Z",
      endTime: "2025-01-09T12:00:00.000Z",
      maxPeople: 5,
      currentPeople: 2,
      location: "헬스장 2층",
      keyword: "fitness",
    },
  ];

  const categoryStyles = {
    0: { text: "var(--Pink, #FA5D5D)", bg: "rgba(250, 93, 93, 0.10)" },
    1: { text: "var(--Blue-2, #2D9CDB)", bg: "rgba(45, 156, 219, 0.10)" },
    2: { text: "var(--Purple, #9B51E0)", bg: "rgba(155, 81, 224, 0.10)" },
    3: { text: "var(--Green-2, #27AE60)", bg: "rgba(39, 174, 96, 0.10)" },
  };

  const processDBData = (data) => {
    return {
      id: data.hostId,
      image: data.meetingImageUrl,
      title: data.title,
      location: data.location,
      participants: `${data.currentPeople || 0}/${data.maxPeople}명`,
      category: data.categoryId, // Use numeric categoryId directly
      startTime: new Date(data.startTime).toLocaleString(),
      endTime: new Date(data.endTime).toLocaleString(),
      keyword: data.keyword,
    };
  };

  useEffect(() => {
    // Show all cards by default
    setFilteredCards(allCards.map(processDBData));
  }, []);

  const updateCenterBox = (color, icon, text) => {
    setCenterBoxContent({ color, icon, text });
  };

  const handleCategoryChange = (color, _, text) => {
    const iconMap = {
      "Meet new friends": { id: 0, icon: "meet" },
      Exercise: { id: 1, icon: "exercise" },
      Drink: { id: 2, icon: "drink" },
      Study: { id: 3, icon: "study" },
    };

    const categoryInfo = iconMap[text] || { id: -1, icon: "meet" };

    updateCenterBox(color, categoryInfo.icon, text);

    if (categoryInfo.id !== -1) {
      const filtered = allCards
        .filter((card) => card.categoryId === categoryInfo.id)
        .map(processDBData);
      setFilteredCards(filtered);
    } else {
      setFilteredCards(allCards.map(processDBData));
    }
  };

  const togglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };

  return (
    <div
      className="min-h-screen bg-white flex flex-col relative"
      style={{
        transform: "scale(0.406)",
        transformOrigin: "top left",
        width: "709px",
        height: "1463px",
        overflow: "hidden",
        position: "fixed",
      }}
    >
      <Header title="Meeting list" />
      <div className="px-4 py-2">
        <CategoryButtons onCategoryChange={handleCategoryChange} />
      </div>
      <div className="px-2 py-2">
        <CenterBox
          color={centerBoxContent.color}
          icon={centerBoxContent.icon}
          text={centerBoxContent.text}
        />
      </div>

      {/* Meeting Cards Section */}
      <div
        className="px-4 py-4 space-y-4"
        style={{
          marginTop: "-90px", // 전체 섹션을 위로 올림
          marginLeft: "-10px",
        }}
      >
        {filteredCards.map((card) => (
          <MeetingCard
            key={card.id}
            image={card.image}
            title={card.title}
            location={
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="17"
                  viewBox="0 0 10 12"
                  fill="none"
                  
                  style={{ marginLeft: "-19px" }}
                >
                  <path
                     d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z" fill="#FA5D5D"/>
                     <path d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z" fill="white"/>
                </svg>
                {card.location}
              </div>
            }
            participants={card.participants}
            subtitleColor={categoryStyles[card.category]?.text}
            subtitleBgColor={categoryStyles[card.category]?.bg}
            startTime={card.startTime}
            endTime={card.endTime}
            keyword={card.keyword}
          />
        ))}
      </div>

      <BottomNav1 />

      {/* Floating + Button */}
      <button
        className="absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center rounded-full shadow-lg bg-pink-500"
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: "#FA5D5D",
          position: "absolute",
          bottom: "160px",
          right: "30px",
        }}
        onClick={togglePopup}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
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
