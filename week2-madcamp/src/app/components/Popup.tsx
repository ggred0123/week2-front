import React, { useState } from "react";
import UploadExample from "@/components/UploadExample";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

// 카테고리 문자열 -> 숫자 ID 매핑
const categoryMap: Record<string, number> = {
  "Meet new friends": 0,
  Exercise: 1,
  Drink: 2,
  Study: 3,
};

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  // 폼 상태
  const [formData, setFormData] = useState({
    category: "Meet new friends",
    title: "",
    keyword: "",
    description: "",
    location: "",
    maxPeople: "",
    startTime: "",
    endTime: "",
    meetingImageUrl: "", // 이미지 URL 필드 추가
  });

  // 이미지 업로드 영역 표시 여부
  const [showGallery, setShowGallery] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // UploadExample에서 업로드 성공 시 호출할 함수
  const handleUploadSuccess = (uploadedUrl: string) => {
    // 업로드된 이미지 URL을 formData에 저장
    setFormData((prev) => ({ ...prev, meetingImageUrl: uploadedUrl }));
    // 갤러리(업로드 화면) 닫기
    setShowGallery(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // category 문자열 -> categoryId 변환
    const categoryId = categoryMap[formData.category] ?? 0;
    // maxPeople 문자열 -> number 변환
    const maxPeopleNumber = parseInt(formData.maxPeople, 10) || 0;

    // 서버에 보낼 Request Body
    const requestBody = {
      hostId: 24,
      title: formData.title,
      description: formData.description,
      categoryId,
      // 업로드된 이미지 URL 사용
      meetingImageUrl: formData.meetingImageUrl || "string",
      startTime: formData.startTime,
      endTime: formData.endTime,
      maxPeople: maxPeopleNumber,
      location: formData.location,
      keyword: formData.keyword,
    };

    try {
      const response = await fetch(
        "https://everymadcamp-service-320281252015.asia-northeast3.run.app/meetings",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        alert("리스트가 성공적으로 저장되었습니다!");
        onClose();
      } else {
        alert("저장 중 오류가 발생했습니다.");
      }
    } catch (error) {
      alert("저장 중 문제가 발생했습니다.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-10 w-4/5 max-w-5xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 이미지 업로드 영역이 열려 있으면 보여주기 */}
        {showGallery && (
          <div className="mb-6">
            <UploadExample onUpload={handleUploadSuccess} />
          </div>
        )}

        {!showGallery && (
          <>
            <h2 className="text-center text-3xl font-extrabold mb-8 text-gray-900">
              새로운 리스트 등록
            </h2>

            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              {/* 카테고리 */}
              <div>
                <label className="block text-xl font-semibold text-gray-800 mb-2">
                  카테고리
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border border-black rounded-lg p-4 text-lg text-black placeholder-blaxk focus:outline-none focus:ring-2 focus:ring-pink-500"
                  style={{ color: "black" }}
                >
                  <option value="Meet new friends">Meet new friends</option>
                  <option value="Exercise">Exercise</option>
                  <option value="Drink">Drink</option>
                  <option value="Study">Study</option>
                </select>
              </div>

              {/* 제목 */}
              <div>
                <label className="block text-xl font-semibold text-gray-800 mb-2">
                  제목
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="제목을 입력하세요"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full border border-black rounded-lg p-4 text-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* 키워드 */}
              <div>
                <label className="block text-xl font-semibold text-gray-800 mb-2">
                  키워드
                </label>
                <input
                  type="text"
                  name="keyword"
                  placeholder="키워드를 입력하세요"
                  value={formData.keyword}
                  onChange={handleChange}
                  className="w-full border border-black rounded-lg p-4 text-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* 간단한 설명 */}
              <div>
                <label className="block text-xl font-semibold text-gray-800 mb-2">
                  간단한 설명
                </label>
                <textarea
                  name="description"
                  placeholder="간단한 설명을 입력하세요"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border border-black rounded-lg p-4 text-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-pink-500"
                  rows={4}
                />
              </div>

              {/* 장소 */}
              <div>
                <label className="block text-xl font-semibold text-gray-800 mb-2">
                  장소
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="장소를 입력하세요"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border border-black rounded-lg p-4 text-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* 최대 인원 */}
              <div>
                <label className="block text-xl font-semibold text-gray-800 mb-2">
                  최대 인원
                </label>
                <input
                  type="number"
                  name="maxPeople"
                  placeholder="최대 인원을 입력하세요"
                  value={formData.maxPeople}
                  onChange={handleChange}
                  className="w-full border border-black rounded-lg p-4 text-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* 시간 */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xl font-semibold text-gray-800 mb-2">
                    출발 시간
                  </label>
                  <input
                    type="datetime-local"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    className="w-full border border-black rounded-lg p-4 text-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label className="block text-xl font-semibold text-gray-800 mb-2">
                    종료 시간
                  </label>
                  <input
                    type="datetime-local"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    className="w-full border border-black rounded-lg p-4 text-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              {/* 버튼들 */}
              <div className="flex justify-between mt-8">
                {/* 갤러리 이동 버튼 → UploadExample 열기 */}
                <button
                  type="button"
                  className="bg-gray-300 text-black px-8 py-4 rounded-lg text-xl font-semibold"
                  onClick={() => setShowGallery(true)}
                >
                  파일 선택
                </button>

                <button
                  type="submit"
                  className="bg-pink-500 text-white px-8 py-4 rounded-lg text-xl font-semibold"
                >
                  등록
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Popup;
