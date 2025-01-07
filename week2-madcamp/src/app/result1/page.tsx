"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BottomNav2 from "../components/BottomNav2";
import Image from "next/image";

interface MatchData {
  status: string;
  data: [
    {
      user: {
        id: number;
        name: string;
        major: string;
        image_url: string;
        // ... 필요한 다른 필드들
      };
      score: number;
      reasoning: string;
      recommendation: string;
    }
  ];
}

export default function MatchingSuccess1() {
  const [matchData, setMatchData] = useState<MatchData | null>(null);

  useEffect(() => {
    // localStorage에서 매치 데이터 가져오기
    const storedMatchData = localStorage.getItem("matchData");
    if (storedMatchData) {
      setMatchData(JSON.parse(storedMatchData));
    }
  }, []);

  // 스타일 정의는 동일하게 유지
  const styles: { [key: string]: React.CSSProperties } = {
    // ... 기존 스타일 정의
  };

  const matchedUser = matchData?.data[0]?.user;
  const matchDetails = matchData?.data[0];

  return (
    <div style={styles.container}>
      <Header title="Matching System" />

      <main style={styles.main}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div style={styles.successImageContainer}>
            <Image
              src="/images/success_icon.png"
              alt="매칭 성공"
              width={350}
              height={350}
              style={styles.successImage}
            />
          </div>
          <p style={styles.successText}>Studymate 매칭 성공</p>
        </div>

        <div style={styles.profileCard}>
          {matchedUser?.image_url && (
            <Image
              src={matchedUser.image_url}
              alt="프로필"
              width={300}
              height={300}
              style={styles.profileImage}
            />
          )}
          <h3 style={styles.profileName}>
            {matchedUser?.name || "매칭된 스터디메이트"}
          </h3>
          <p style={styles.profileDescription}>
            {matchedUser?.major && `${matchedUser.major} `}
            <br />
            {matchDetails?.reasoning}
            <br />
            {matchDetails?.recommendation}
          </p>
        </div>
      </main>

      <BottomNav2 />
    </div>
  );
}
