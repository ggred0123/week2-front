"use client";

import * as React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Aclonica } from "next/font/google";

const aclonica = Aclonica({
  weight: "400",
  subsets: ["latin"],
});

const MemorialServiceLanding: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("accessToken");
    const isNewUser = params.get("isNewUser");

    console.log("Received params:", { accessToken, isNewUser });

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);

      if (isNewUser === "true") {
        console.log("Redirecting to signup...");
        router.replace("/signup");
      } else {
        console.log("Redirecting to meeting_list...");
        router.replace("/meeting_list");
      }
    }
  }, [router]);

  const handleGoogleLogin = () => {
    window.location.href =
      "https://everymadcamp-service-320281252015.asia-northeast3.run.app/auth/google";
  };

  return (
    <div className="bg-white" style={{ width: "380px", height: "666px" }}>
      <div className="w-full h-full flex flex-col justify-between">
        {/* Top section with image and title */}
        <div className="flex flex-col items-center">
          <div className="w-full" style={{ height: "386px" }}>
            <Image
              src="/workspace.svg"
              alt="Workspace illustration"
              width={380}
              height={386}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/madcamp.png"
              alt="Madcamp Logo"
              width={64}
              height={64}
              className="w-20 h-20 mt-2"
            />
          </div>

          <h1
            className={`text-center mb-2 mt-6 ${aclonica.className}`}
            style={{
              fontSize: "30px",
              fontWeight: 400,
              lineHeight: "32px",
              letterSpacing: "-0.408px",
              color: "#000000",
            }}
          >
            <span style={{ color: "#B33BF6" }}>M</span>adcamp
            <span style={{ color: "#B33BF6" }}> R</span>eunion
          </h1>

          <p className="text-gray-500 mb-4 text-center text-sm">
            Find your mate and enjoy
          </p>
        </div>

        {/* Bottom section with buttons */}
        <div
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex flex-col items-center justify-center"
          style={{
            height: "136px",
            borderTopLeftRadius: "113px",
            borderTopRightRadius: "113px",
          }}
        >
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-transparent text-xl rounded-lg py-2 font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-white"
          >
            <Image
              src="/images/google.png"
              alt="Google Logo"
              width={24}
              height={24}
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
