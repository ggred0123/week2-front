"use client"; // 클라이언트 컴포넌트로 선언

import React from "react";

const MemorialServiceLanding = () => {
  // 구글 로그인 처리 함수
  const handleGoogleLogin = () => {
    window.location.href =
      "https://everymadcamp-service-320281252015.asia-northeast3.run.app/auth/google";
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="max-w-md mx-auto w-full flex flex-col justify-between min-h-screen">
        {/* Content wrapper */}
        <div className="flex flex-col items-center">
          {/* Workspace illustration */}
          <div className="w-full">
            <img
              src="/workspace.svg"
              alt="Workspace illustration"
              className="w-full"
            />
          </div>

          {/* Text content */}
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');
          </style>
          <h1
            className="text-center mb-2"
            style={{
              fontFamily: "Aclonica",
              fontSize: "34px",
              fontWeight: 400,
              lineHeight: "48px",
              letterSpacing: "-0.408px",
              color: "#000000",
            }}
          >
            <span style={{ color: "#B33BF6" }}>M</span>emorial{" "}
            <span style={{ color: "#B33BF6" }}>S</span>ervice
          </h1>

          <p className="text-gray-500 mb-8 text-center">
            Find your mate and enjoy
          </p>
        </div>

        {/* Button container with gradient background */}
        <div className="w-full rounded-t-full bg-gradient-to-r from-purple-500 to-pink-500 p-10 flex flex-col items-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-transparent text-white rounded-lg py-2 font-semibold hover:opacity-80 transition-opacity mb-4 flex items-center justify-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google Logo"
              className="w-6 h-6"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemorialServiceLanding;
