import React, { useState } from "react";

interface PopupProps {
  isOpen: boolean;

  onClose: () => void;

  children?: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    category: "Meet new friends", // 기본값 설정
    title: "",
    keyword: "",
    description: "",
    location: "",
    maxPeople: "",
    startTime: "",
    endTime: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/save-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("리스트가 성공적으로 저장되었습니다!");
        onClose();
      } else {
        alert("저장 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("저장 오류:", error);
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
        <h2 className="text-center text-3xl font-extrabold mb-8 text-gray-900">
          새로운 리스트 등록
        </h2>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          {/* 카테고리 선택 */}
          <div>
            <label className="block text-xl font-semibold text-gray-800 mb-2">
              카테고리
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-black rounded-lg p-4 text-lg text-black placeholder-blaxk focus:outline-none focus:ring-2 focus:ring-pink-500"
              style={{ color: "black" }} // 텍스트 색상 설정
            >
              <option value="Meet new friends">Meet new friends</option>
              <option value="Exercise">Exercise</option>
              <option value="Drink">Drink</option>
              <option value="Study">Study</option>
            </select>
          </div>

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

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xl font-semibold text-gray-800 mb-2">
                출발 시간
              </label>
              <input
                type="time"
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
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                className="w-full border border-black rounded-lg p-4 text-lg text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              className="bg-gray-300 text-black px-8 py-4 rounded-lg text-xl font-semibold"
              onClick={onClose}
            >
              갤러리 이동
            </button>
            <button
              type="submit"
              className="bg-pink-500 text-white px-8 py-4 rounded-lg text-xl font-semibold"
            >
              등록
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
