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
  imageUrl: string;
}

/**
 * 구글 로그인 후, accessToken을 헤더에 넣어
 * PUT /auth/complete-profile 에 추가 정보 업데이트하는 폼
 */
export default function CompleteProfilePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 1) 쿼리스트링에서 accessToken 추출 (예: ?accessToken=...)
  const accessToken = searchParams.get("accessToken");
  // accessToken이 없으면 에러 페이지 혹은 리다이렉트
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log("Token from localStorage:", token); // 디버깅용

    if (!token) {
      alert("accessToken이 없습니다. 구글 로그인을 먼저 진행하세요.");
      router.push("/");
    }
  }, [router]);

  // 2) 학교, MBTI, 술 목록
  const [universities, setUniversities] = useState<University[]>([]);
  const [mbtis, setMbtis] = useState<MBTI[]>([]);
  const [alcohols, setAlcohols] = useState<Alcohol[]>([]);

  // 3) 폼 데이터 (백엔드가 요구하는 필드 전부 포함)
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
    imageUrl: "",
  });

  // 4) 페이지 로딩 시, extras 데이터 호출
  useEffect(() => {
    const fetchExtras = async () => {
      try {
        const baseUrl =
          "https://everymadcamp-service-320281252015.asia-northeast3.run.app";

        // 대학교 목록
        const univRes = await fetch(`${baseUrl}/extras/universities`);
        const univData = await univRes.json();
        const univList = Array.isArray(univData.universities)
          ? univData.universities
          : [];
        setUniversities(univList);

        // MBTI 목록
        const mbtiRes = await fetch(`${baseUrl}/extras/mbtis`);
        const mbtiData = await mbtiRes.json();
        const mbtiList = Array.isArray(mbtiData.mbtis) ? mbtiData.mbtis : [];
        setMbtis(mbtiList);

        // 술 목록
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

  // 5) PUT /auth/complete-profile (JWT 필요)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    console.log("Using token:", token); // 디버깅용

    if (!token) return;

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

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Profile update failed:", errorText);
        alert("프로필 업데이트 실패: " + errorText);
        return;
      }

      alert("프로필 업데이트 완료!");
      // 완료 후, 홈으로 이동 (또는 원하는 페이지)
      router.push("/");
    } catch (error) {
      console.error("Error completing profile:", error);
      alert("오류 발생: 콘솔에서 확인해주세요");
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 text-black">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">
          구글 로그인 후 추가 정보 입력
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* name */}
          <div>
            <label className="block text-sm font-medium mb-1">이름</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* birthday */}
          <div>
            <label className="block text-sm font-medium mb-1">생년월일</label>
            <input
              type="date"
              value={formData.birthday}
              onChange={(e) =>
                setFormData({ ...formData, birthday: e.target.value })
              }
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* sex */}
          <div>
            <label className="block text-sm font-medium mb-1">성별</label>
            <select
              value={formData.sex}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  sex: e.target.value as "MALE" | "FEMALE",
                })
              }
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="MALE">남성</option>
              <option value="FEMALE">여성</option>
            </select>
          </div>

          {/* madCampStatus */}
          <div>
            <label className="block text-sm font-medium mb-1">
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
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="InCamp">진행중</option>
              <option value="Graduated">수료</option>
            </select>
          </div>

          {/* universityId */}
          <div>
            <label className="block text-sm font-medium mb-1">대학교</label>
            <select
              value={formData.universityId}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  universityId: Number(e.target.value),
                })
              }
              className="w-full p-2 border rounded-lg"
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

          {/* major */}
          <div>
            <label className="block text-sm font-medium mb-1">전공</label>
            <input
              type="text"
              value={formData.major}
              onChange={(e) =>
                setFormData({ ...formData, major: e.target.value })
              }
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          {/* classId (분반) */}
          <div>
            <label className="block text-sm font-medium mb-1">분반</label>
            <select
              value={formData.classId}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  classId: Number(e.target.value),
                })
              }
              className="w-full p-2 border rounded-lg"
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

          {/* mbtiId */}
          <div>
            <label className="block text-sm font-medium mb-1">MBTI</label>
            <select
              value={formData.mbtiId}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  mbtiId: Number(e.target.value),
                })
              }
              className="w-full p-2 border rounded-lg"
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

          {/* alcoholLevel (선호 주종) */}
          <div>
            <label className="block text-sm font-medium mb-1">선호 주종</label>
            <select
              value={formData.alcoholLevel}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  alcoholLevel: Number(e.target.value),
                })
              }
              className="w-full p-2 border rounded-lg"
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

          {/* imageUrl (프로필 이미지) + 업로더 */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              프로필 이미지
            </label>
            <UploadExample
              onUpload={(uploadedUrl: string) =>
                setFormData({ ...formData, imageUrl: uploadedUrl })
              }
            />
            {formData.imageUrl && (
              <div className="mt-2">
                <p className="text-sm text-black mb-1">이미지 미리보기:</p>
                <img
                  src={formData.imageUrl}
                  alt="프로필 이미지"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            className="w-full mt-8 bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            프로필 업데이트
          </button>
        </form>
      </div>
    </div>
  );
}
