"use client";

import React, { JSX, useState } from "react";

interface FormData {
  email: string;
  password: string;
  name: string;
  alcoholLevel: number;
  madCampStatus: string;
  birthday: string;
  universityId: number;
  major: string;
  mbtiId: number;
  classId: number;
  sex: "MALE" | "FEMALE";
  imageUrl: string;
}

const SignUpForm = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    name: "",
    alcoholLevel: 0,
    madCampStatus: "InCamp",
    birthday: "",
    universityId: 0,
    major: "",
    mbtiId: 0,
    classId: 0,
    sex: "MALE",
    imageUrl: "",
  });

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://everymadcamp-service-320281252015.asia-northeast3.run.app/auth/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // 성공적으로 등록되면 메인 페이지로 이동
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">
          Additional Information
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Major
            </label>
            <input
              type="text"
              name="major"
              value={formData.major}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Birthday
            </label>
            <input
              type="date"
              name="birthday"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sex
            </label>
            <select
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Alcohol Level (0-5)
            </label>
            <input
              type="number"
              name="alcoholLevel"
              value={formData.alcoholLevel}
              onChange={handleChange}
              min="0"
              max="5"
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              MBTI
            </label>
            <select
              name="mbtiId"
              value={formData.mbtiId}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            >
              <option value="1">ISTJ</option>
              <option value="2">ISFJ</option>
              <option value="3">INFJ</option>
              {/* 나머지 MBTI 옵션들 */}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg py-3 font-semibold hover:opacity-90 transition-opacity"
          >
            Complete Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
