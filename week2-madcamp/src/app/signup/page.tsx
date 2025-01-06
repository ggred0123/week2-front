"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

// 이미 작성된 이미지 업로더 컴포넌트라고 가정
import UploadExample from "@/components/UploadExample";

/** 대학교, MBTI, 술 정보를 위한 인터페이스 */
interface University {
  id: number;
  name: string;
}

interface MBTI {
  id: number;
  name: string;
}

interface Alcohol {
  id: number;
  name: string;
}

/** 백엔드가 /auth/complete-profile 에서 요구하는 DTO 필드 */
interface CompleteProfileData {
  name: string;
  birthday: string; // "YYYY-MM-DD" 또는 ISO8601
  sex: "MALE" | "FEMALE";
  universityId: number;
  major: string;
  madCampStatus: "InCamp" | "Graduated";
  classId: number;
  mbtiId: number;
  alcoholLevel: number;
  preferredAlcoholId: number;
  imageUrl: string;
  leadershipLevel: number;
}

/**
 * 구글 로그인 후, accessToken을 헤더에 넣어
 * PUT /auth/complete-profile 에 추가 정보 업데이트하는 폼
 */
export default function CompleteProfilePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const accessToken = searchParams.get("accessToken");
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log("Token from localStorage:", token);

    if (!token) {
      alert("accessToken이 없습니다. 구글 로그인을 먼저 진행하세요.");
      router.push("/");
    }
  }, [router]);

  const [universities, setUniversities] = useState<University[]>([]);
  const [mbtis, setMbtis] = useState<MBTI[]>([]);
  const [alcohols, setAlcohols] = useState<Alcohol[]>([]);

  const [formData, setFormData] = useState<CompleteProfileData>({
    name: "",
    birthday: "",
    sex: "MALE",
    universityId: 0,
    major: "",
    madCampStatus: "InCamp",
    classId: 0,
    mbtiId: 0,
    alcoholLevel: 0,
    preferredAlcoholId: 1,
    leadershipLevel: 0,
    imageUrl: "",
  });

  useEffect(() => {
    const fetchExtras = async () => {
      try {
        const baseUrl =
          "https://everymadcamp-service-320281252015.asia-northeast3.run.app";

        const univRes = await fetch(`${baseUrl}/extras/universities`);
        const univData = await univRes.json();
        const univList = Array.isArray(univData.universities)
          ? univData.universities
          : [];
        setUniversities(univList);

        const mbtiRes = await fetch(`${baseUrl}/extras/mbtis`);
        const mbtiData = await mbtiRes.json();
        const mbtiList = Array.isArray(mbtiData.mbtis) ? mbtiData.mbtis : [];
        setMbtis(mbtiList);

        const alcRes = await fetch(`${baseUrl}/extras/alcohols`);
        const alcData = await alcRes.json();
        const alcList = Array.isArray(alcData.alcohols) ? alcData.alcohols : [];
        setAlcohols(alcList);
      } catch (error) {
        console.error("Error fetching extras:", error);
      }
    };

    fetchExtras();
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    console.log("Submitting form data:", formData);

    if (!token) {
      alert("Access token not found!");
      return;
    }

    try {
      const response = await fetch(
        "https://everymadcamp-service-320281252015.asia-northeast3.run.app/auth/complete-profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const responseData = await response.json();
      console.log("Response status:", response.status);
      console.log("Response headers:", Object.fromEntries(response.headers));
      console.log("Response data:", responseData);

      if (!response.ok) {
        throw new Error(responseData.message || "Profile update failed");
      }

      alert("프로필 업데이트 완료!");
    } catch (error) {
      console.error("Error completing profile:", error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        padding: "16px",
        color: "black",
      }}
    >
      <div style={{ maxWidth: "768px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          구글 로그인 후 추가 정보 입력
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{ gap: "1.5rem", display: "flex", flexDirection: "column" }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              이름
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
              required
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              생년월일
            </label>
            <input
              type="date"
              value={formData.birthday}
              onChange={(e) =>
                setFormData({ ...formData, birthday: e.target.value })
              }
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
              required
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              성별
            </label>
            <select
              value={formData.sex}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  sex: e.target.value as "MALE" | "FEMALE",
                })
              }
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
              required
            >
              <option value="MALE">남성</option>
              <option value="FEMALE">여성</option>
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              매드캠프 상태
            </label>
            <select
              value={formData.madCampStatus}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  madCampStatus: e.target.value as "InCamp" | "Graduated",
                })
              }
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
              required
            >
              <option value="InCamp">진행중</option>
              <option value="Graduated">수료</option>
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              대학교
            </label>
            <select
              value={formData.universityId}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  universityId: Number(e.target.value),
                })
              }
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
              required
            >
              <option value={0}>대학교 선택</option>
              {universities.map((univ) => (
                <option key={univ.id} value={univ.id}>
                  {univ.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              전공
            </label>
            <input
              type="text"
              value={formData.major}
              onChange={(e) =>
                setFormData({ ...formData, major: e.target.value })
              }
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
              required
            />
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              분반
            </label>
            <select
              value={formData.classId}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  classId: Number(e.target.value),
                })
              }
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
              required
            >
              <option value={0}>분반 선택</option>
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>
                  {num}분반
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              MBTI
            </label>
            <select
              value={formData.mbtiId}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  mbtiId: Number(e.target.value),
                })
              }
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
              required
            >
              <option value={0}>MBTI 선택</option>
              {mbtis.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              주량
            </label>
            <select
              value={formData.alcoholLevel}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  alcoholLevel: Number(e.target.value),
                })
              }
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
              required
            >
              <option value={0}>반병 이하</option>
              <option value={1}>한병</option>
              <option value={2}>두병</option>
              <option value={3}>3병 이상</option>
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              학교에서 임원직 혹은 회장을 해본 경험
            </label>
            <select
              value={formData.leadershipLevel}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  leadershipLevel: Number(e.target.value),
                })
              }
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
              required
            >
              <option value={0}>0~1회</option>
              <option value={1}>2~4회</option>
              <option value={2}>5회 이상</option>
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                marginBottom: "4px",
              }}
            >
              선호 주종
            </label>
            <select
              value={formData.preferredAlcoholId}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  preferredAlcoholId: Number(e.target.value),
                })
              }
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
              required
            >
              <option value={0}>선호 주종 선택</option>
              {alcohols.map((alc) => (
                <option key={alc.id} value={alc.id}>
                  {alc.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "black",
                marginBottom: "4px",
              }}
            >
              프로필 이미지
            </label>
            <UploadExample
              onUpload={(uploadedUrl: string) =>
                setFormData({ ...formData, imageUrl: uploadedUrl })
              }
            />
            {formData.imageUrl && (
              <div style={{ marginTop: "8px" }}>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "black",
                    marginBottom: "4px",
                  }}
                >
                  이미지 미리보기:
                </p>
                <img
                  src={formData.imageUrl}
                  alt="프로필 이미지"
                  style={{
                    width: "128px",
                    height: "128px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              marginTop: "2rem",
              backgroundColor: "#1D4ED8",
              color: "white",
              fontWeight: "600",
              padding: "8px 16px",
              borderRadius: "8px",
            }}
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
}
