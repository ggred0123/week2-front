"use client";
import React, { useEffect, useState } from "react";
import MeetingCard from "../components/MeetingCard";
import BottomNav from "../components/BottomNav4";
import BottomNav4 from "../components/BottomNav4";

interface UserDto {
  id: number;
  universityId: number;
  alcoholLevel: number;
  madCampStatus: "InCamp" | "BeforeCamp" | "FinishedCamp";
  sex: "MALE" | "FEMALE";
  mbtiId: number; // 혹은 "ENFP", "ISTJ" 등 문자열이라면 string
  classId: number;
  imageUrl: string;
  name: string;
  birthday: string; // "2025-01-07T13:15:07.769Z" 형태
  leadershipLevel: number;
  preferredAlcoholId: number;
  programmingLevel: number;
  programmingField: string;
  programmingLanguage: string;
}

export default function Information() {
  // 만약 라우트 파라미터로 userId를 받는다면 사용 (Next.js 13 App Router 기준)
  // const router = useParams();
  // const userId = router.userId; // 예: /information/[userId]

  // 여기서는 예시로 userId를 하드코딩
  const userId = 28;

  const [user, setUser] = useState<UserDto | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(
          `https://everymadcamp-service-320281252015.asia-northeast3.run.app/users/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data: UserDto = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchUserData();
  }, [userId]);

  // 'birthday'로 나이를 계산하는 간단 예시 (태어난 해 기준)

  // sex 필드가 "MALE"이면 "남성", "FEMALE"이면 "여성"
  const sexToKorean = (sex?: "MALE" | "FEMALE") => {
    switch (sex) {
      case "MALE":
        return "남성";
      case "FEMALE":
        return "여성";
      default:
        return "";
    }
  };

  // madCampStatus가 "InCamp" 이면 "캠프중"으로 표시
  const madCampStatusToKorean = (
    status?: "InCamp" | "BeforeCamp" | "FinishedCamp"
  ) => {
    switch (status) {
      case "InCamp":
        return "캠프중";
      case "BeforeCamp":
        return "캠프 전";
      case "FinishedCamp":
        return "캠프 완료";
      default:
        return "";
    }
  };

  // 분반(classId)이 예: 0이면 "1분반", 1이면 "2분반", 등
  const classIdToKorean = (classId?: number) => {
    // 실제로는 API 스펙에 맞춰 수정
    if (classId === 0) return "1분반";
    if (classId === 1) return "2분반";
    if (classId === 2) return "2분반";
    if (classId === 3) return "2분반";
    return "";
  };

  // 예: MBTI를 id로 주는 대신 문자열로 주는 경우, 그대로 표시
  // 여기서는 mbtiId가 0이라면 "ENFP"라고 가정
  const mbtiToString = (mbtiId?: number) => {
    if (mbtiId === 1) return "ISTJ";
    if (mbtiId === 2) return "ISFJ";
    if (mbtiId === 3) return "INFJ";
    if (mbtiId === 4) return "INTJ";
    if (mbtiId === 5) return "ISTP";
    if (mbtiId === 6) return "ISFP";
    if (mbtiId === 7) return "INFP";
    if (mbtiId === 8) return "INTP";
    if (mbtiId === 9) return "ESTP";
    if (mbtiId === 10) return "ESFP";
    if (mbtiId === 11) return "ENFP";
    if (mbtiId === 12) return "ENTP";
    if (mbtiId === 13) return "ESTJ";
    if (mbtiId === 14) return "ESFJ";
    if (mbtiId === 15) return "ENFJ";
    if (mbtiId === 16) return "ENTJ";

    // 필요한 매핑이 있으면 추가
    return "";
  };

  // 예: universityId가 0이면 "KAIST"라고 가정
  const universityToString = (universityId?: number) => {
    if (universityId === 1) return "성균관대학교";
    if (universityId === 2) return "KAIST";
    if (universityId === 3) return "부산대학교";
    if (universityId === 4) return "UNIST";
    if (universityId === 5) return "한양대학교";
    if (universityId === 6) return "이화여자대학교";
    if (universityId === 7) return "연세대학교";
    if (universityId === 8) return "고려대학교";
    if (universityId === 9) return "DGIST";
    if (universityId === 10) return "숙명여자대학교";
    if (universityId === 11) return "서울대학교";
    if (universityId === 12) return "GIST";

    return "";
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        position: "relative",
        background: "#FEFEFE",
        width: "288px",
        height: "596px",
        overflow: "hidden",
      }}
    >
      {/* Background Circle */}
      <div
        style={{
          width: "366px",
          height: "325px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, #1FF7FD -57.3%, #B33BF6 51.62%, #FF844C 101.62%, #FF844B 130.58%)",
          position: "absolute",
          top: "-244px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      />
      {/* Profile Image */}
      <div
        style={{
          width: "65px",
          height: "65px",
          borderRadius: "100px",
          // user.imageUrl 이 존재하면 해당 url로 대체
          background: `url(${
            user.imageUrl || "/images/google_logo.png"
          }) lightgray 50% / cover no-repeat`,
          position: "absolute",
          top: "52px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      />
      {/* Welcome Text */}
      <div
        style={{
          width: "130px",
          color: "#40282E",
          textAlign: "center",
          fontFamily: "ABeeZee, sans-serif",
          fontSize: "17px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "15px",
          letterSpacing: "-0.408px",
          position: "absolute",
          top: "130px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
        }}
      >
        Welcome
        <br />
        {user.name}
      </div>
      {/* Info Box */}
      <div
        style={{
          width: "223px",
          height: "180px",
          background: "#F8F8F9",
          borderRadius: "10px",
          position: "absolute",
          top: "179px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px",
          boxSizing: "border-box",
          zIndex: 3,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "26px",
            paddingTop: "13px",
            paddingLeft: "16px",
            color: "#40282E",
            fontFamily: "ABeeZee, sans-serif",
            fontSize: "7px",
            fontWeight: 400,
            lineHeight: "18px",
            letterSpacing: "-0.078px",
          }}
        >
          {/* 성별 */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                opacity="0.16"
                d="M1 15C1 13.9391 1.42143 12.9217 2.17157 12.1716C2.92172 11.4214 3.93913 11 5 11H13C14.0609 11 15.0783 11.4214 15.8284 12.1716C16.5786 12.9217 17 13.9391 17 15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15Z"
                fill="black"
              />
              <path
                d="M1 15C1 13.9391 1.42143 12.9217 2.17157 12.1716C2.92172 11.4214 3.93913 11 5 11H13C14.0609 11 15.0783 11.4214 15.8284 12.1716C16.5786 12.9217 17 13.9391 17 15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15Z"
                stroke="black"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M9 7C10.6569 7 12 5.65685 12 4C12 2.34315 10.6569 1 9 1C7.34315 1 6 2.34315 6 4C6 5.65685 7.34315 7 9 7Z"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
            <span style={{ marginLeft: "12px" }}>{sexToKorean(user.sex)}</span>
          </div>
          {/* MBTI */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 21 21"
              fill="none"
            >
              <mask
                id="mask0_47_1368"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="21"
                height="21"
              >
                <path
                  d="M11 8C12.933 8 14.5 6.433 14.5 4.5C14.5 2.567 12.933 1 11 1C9.067 1 7.5 2.567 7.5 4.5C7.5 6.433 9.067 8 11 8Z"
                  fill="#555555"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 19.5C1 15.0815 5.0295 11.5 10 11.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.925 13C13.862 13 13 14.0045 13 15.243C13 17.4865 15.275 19.5255 16.5 20C17.725 19.5255 20 17.4865 20 15.243C20 14.005 19.138 13 18.075 13C17.424 13 16.8485 13.3765 16.5 13.953C16.1515 13.3765 15.576 13 14.925 13Z"
                  fill="#555555"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </mask>
              <g mask="url(#mask0_47_1368)">
                <path d="M-1 -1H23V23H-1V-1Z" fill="black" />
              </g>
            </svg>
            <span style={{ marginLeft: "12px" }}>
              {mbtiToString(user.mbtiId)}
            </span>
          </div>
          {/* 나이 */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"
                fill="black"
              />
            </svg>
            <span style={{ marginLeft: "12px" }}>
              {user.birthday.split("T")[0]}
            </span>
          </div>
          {/* 분반 */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 20 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.54004 7.476H5.90104V11.8035H11.4105V14.1645H5.90104V19.6725H11.4105V22.032H4.72054C4.40797 22.0316 4.10832 21.9073 3.8873 21.6862C3.66628 21.4652 3.54194 21.1656 3.54154 20.853L3.54004 7.476Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 2.754C0 1.233 1.233 0 2.754 0H14.5575C16.0785 0 17.3115 1.233 17.3115 2.754V5.508C17.3115 6.23841 17.0213 6.9389 16.5049 7.45537C15.9884 7.97185 15.2879 8.262 14.5575 8.262H2.754C2.02359 8.262 1.3231 7.97185 0.806628 7.45537C0.290153 6.9389 0 6.23841 0 5.508V2.754Z"
                fill="black"
              />
            </svg>
            <span style={{ marginLeft: "12px" }}>
              {classIdToKorean(user.classId)}
            </span>
          </div>
          {/* 학교 (예: KAIST) */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 17V17.01M6 13V13.01M18 17V17.01M18 13V13.01M22 20V8H18L12 4L6 8H2V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 22V17C14 16.4696 13.7893 15.9609 13.4142 15.5858C13.0391 15.2107 12.5304 15 12 15C11.4696 15 10.9609 15.2107 10.5858 15.5858C10.2107 15.9609 10 16.4696 10 17V22"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span style={{ marginLeft: "12px" }}>
              {universityToString(user.universityId)}
            </span>
          </div>
          {/* 캠프 상태 */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="9"
              viewBox="0 0 24 16"
              fill="none"
            >
              <path
                d="M20 14C21.1 14 21.99 13.1 21.99 12L22 2C22 0.9 21.1 0 20 0H4C2.9 0 2 0.9 2 2V12C2 13.1 2.9 14 4 14H0V16H24V14H20ZM4 2H20V12H4V2Z"
                fill="black"
              />
            </svg>
            <span style={{ marginLeft: "12px" }}>
              {madCampStatusToKorean(user.madCampStatus)}
            </span>
          </div>
          {/* 전공 분야 (예: 전산학부) */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="9"
              viewBox="0 0 24 16"
              fill="none"
            >
              <path
                d="M20 14C21.1 14 21.99 13.1 21.99 12L22 2C22 0.9 21.1 0 20 0H4C2.9 0 2 0.9 2 2V12C2 13.1 2.9 14 4 14H0V16H24V14H20ZM4 2H20V12H4V2Z"
                fill="black"
              />
            </svg>
            <span style={{ marginLeft: "12px" }}>
              {user.programmingField || "전산학부"}
            </span>
          </div>
        </div>
      </div>
      {/* Recommended Section */}
      <div
        style={{
          width: "104px",
          textAlign: "center",
          fontFamily: '"Product Sans", sans-serif',
          fontSize: "10px",
          color: "#181D2D",
          position: "absolute",
          top: "362px",
          left: "10%",
          zIndex: 2,
        }}
      >
        Recommended for You
      </div>
      {/* MeetingCard (예시 그대로) */}
      <div
        style={{
          position: "absolute",
          top: "378px",
          left: "47%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <MeetingCard
          image="/images/sung_image.jpg"
          title="1월 24일 딸기시루팥"
          subtitle="Sweet Cakes"
          location="성심당 케이부띠끄"
          participants="8/10명"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 12 12"
              fill="none"
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
          }
        />
      </div>
      {/* Bottom Navigation */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          zIndex: 5,
        }}
      >
        <BottomNav />
      </div>
    </div>
  );
}
