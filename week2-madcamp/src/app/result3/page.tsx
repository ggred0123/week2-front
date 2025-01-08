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
    container: {
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transform: "scale(0.535,0.4455)", // 288 / 709
        transformOrigin: "top left", // 스케일 기준점 설정
        width: "709px", // 스케일로 인해 잘리는 부분 방지
        height: "1495px", // 높이 비율 조정
        overflow: "hidden",
      },
    main: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
      gap: "2rem",
    },
    successImageContainer: {
      width: "300px",
      height: "300px",
      background: "rgba(255, 230, 175, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "20px",
      marginTop: "-150px",
    },
    successImage: {
      width: "350px",
      height: "350px",
    },
    successText: {
      fontSize: "37px",
      color: "#000",
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: "Heebo",
    },
    profileCard: {
      width: "90%",
      maxWidth: "500px",
      height: "700px",
      background: "#ECFACF",
      borderRadius: "15px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "10px",
      gap: "16px",
    },
    profileImage: {
      width: "300px",
      height: "300px",
      borderRadius: "20px",
      border: "4px solid #FFF",
      marginTop: "30px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    profileName: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "#333",
      textAlign: "center",
    },
    profileDescription: {
      fontSize: "23px",
      fontWeight: "normal",
      fontFamily: "Heebo",
      color: "#555",
      textAlign: "center",
    },
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
              width={350} // 이미지 너비
              height={350}
              style={styles.successImage}
            />
          </div>
          <p style={styles.successText}>Teammate 매칭 성공</p>
        </div>

        <div style={styles.profileCard}>
          {/* 프로필 이미지 */}
          {matchedUser?.image_url && (
            <Image
              src={matchedUser.image_url}
              alt="프로필"
              width={300} // 이미지 너비
              height={300}
              style={styles.profileImage}
            />
          )}
          {/* 프로필 이름과 설명 */}
          <h3 style={styles.profileName}>
            {matchedUser?.name || "매칭된 팀메이트"}
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
