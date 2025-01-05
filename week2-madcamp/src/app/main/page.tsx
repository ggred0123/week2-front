"use client";

import * as React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const MemorialServiceLanding: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("accessToken");
    const isNewUser = params.get("isNewUser");

    console.log("Received params:", { accessToken, isNewUser });

    if (accessToken && isNewUser === "true") {
      console.log("Redirecting to signup...");
      router.push("/signup");
    }
  }, [router]);

  const handleGoogleLogin = () => {
    window.location.href =
      "https://everymadcamp-service-320281252015.asia-northeast3.run.app/auth/google";
  };

  return (
    <div className="bg-white" style={{ width: "709px", height: "1463px" }}>
      <div className="w-full h-full flex flex-col justify-between">
        {/* Top section with image and title */}
        <div className="flex flex-col items-center">
          <div className="w-full" style={{ height: "850px" }}>
            <img
              src="/workspace.svg"
              alt="Workspace illustration"
              className="w-full h-full object-cover"
            />
          </div>

          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Aclonica&display=swap');
          </style>
          <h1
            className="text-center mb-3 mt-12"
            style={{
              fontFamily: "Aclonica",
              fontSize: "48px",
              fontWeight: 400,
              lineHeight: "48px",
              letterSpacing: "-0.408px",
              color: "#000000",
            }}
          >
            <span style={{ color: "#B33BF6" }}>M</span>emorial
            <span style={{ color: "#B33BF6" }}> S</span>ervice
          </h1>

          <br />
          <p className="text-gray-500 mb-8 text-center">
            Find your mate and enjoy
          </p>
        </div>

        {/* Bottom section with buttons */}
        <div
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 p-8 flex flex-col items-center justify-center"
          style={{
            height: "250px",
            borderTopLeftRadius: "50px",
            borderTopRightRadius: "50px",
          }}
        >
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-transparent text-3xl scale-110 rounded-lg py-4 font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
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
