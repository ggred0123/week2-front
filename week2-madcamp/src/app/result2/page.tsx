"use client";
import React from "react";
import Header from "../components/Header";
import BottomNav2 from "../components/BottomNav2";

export default function MatchingSuccess2() {
  // 스타일 정의
  const styles : { [key: string]: React.CSSProperties } = {
    container: {
      minHeight: "100vh",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "column",
      position: "relative",
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
      marginTop:"-150px",
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
      height: "500px",
      background: "#FCEBF8",
      borderRadius: "15px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop:"115px",
      gap: "16px",
    },
    profileImage: {
      width: "300px",
      height: "300px",
      borderRadius: "20px",
      border: "4px solid #FFF",
      marginTop:"30px",
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
      fontFamily:"Heebo",
      color: "#555",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <Header title="Matching System" />

      {/* 콘텐츠 영역 */}
      <main style={styles.main}>
        {/* 매칭 성공 이미지와 텍스트 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          {/* 성공 이미지 */}
          <div style={styles.successImageContainer}>
            <img
              src="/images/success_icon.png" // 성공 이미지를 여기에 추가
              alt="매칭 성공"
              style={styles.successImage}
            />
          </div>
          {/* 성공 메시지 */}
          <p style={styles.successText}>Drinkmate 매칭 성공</p>
        </div>

        {/* 프로필 카드 */}
        <div style={styles.profileCard}>
          {/* 프로필 이미지 */}
          <img
            src="/images/face_genius.jpg" // 사용자 프로필 이미지를 여기에 추가
            alt="프로필"
            style={styles.profileImage}
          />
          {/* 이름 */}
          <h3 style={styles.profileName}>김영민</h3>
          {/* 설명 */}
          <p style={styles.profileDescription}>
            신실한 열정의 매트를 가지자!!!
            <br />
            멋진 팀으로 좋은 시너지가 만들어질 것 같아요.
          </p>
        </div>
      </main>

      {/* 하단 네비게이션 */}
      <BottomNav2 />
    </div>
  );
}
