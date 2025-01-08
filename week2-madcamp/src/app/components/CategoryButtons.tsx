"use client";
import React from 'react';

interface CategoryButtonsProps {
  onCategoryChange: (color: string, icon: React.ReactNode, text: string) => void;
}

export default function CategoryButtons({ onCategoryChange }: CategoryButtonsProps) {
  return (
    <div
      className="grid grid-cols-2 relative"
      style={{
        left: '44px',
        padding:'10px',
        gap: '20px 0px',
      }}
    >
      {/* Meet new friends 버튼 */}
      <button
        className="relative flex items-center justify-center w-[260px] h-[110px] rounded-[30px]"
        style={{
          background: "#FA5D5D",
        }}
        onClick={() =>
          onCategoryChange(
            "#FA5D5D",
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 17 18" fill="none">
              <circle cx="8.5" cy="9" r="8" fill="white" />
            </svg>,
            "Meet new friends"
          )
        }
      >
        <div className="absolute -top-2 -left-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 90 90" fill="none">
            <g filter="url(#filter0_d_49_163)">
              <rect x="24" y="25" width="63" height="63" rx="12" fill="#FA5D5D" />
            </g>
            <g transform="translate(37,40) scale(2)">
              <path
                d="M17.3667 2.84167C16.941 2.41584 16.4357 2.07804 15.8795 1.84757C15.3232 1.6171 14.7271 1.49848 14.125 1.49848C13.5229 1.49848 12.9268 1.6171 12.3705 1.84757C11.8143 2.07804 11.309 2.41584 10.8833 2.84167L10 3.725L9.11666 2.84167C8.25692 1.98192 7.09086 1.49893 5.875 1.49893C4.65914 1.49893 3.49307 1.98192 2.63333 2.84167C1.77359 3.70141 1.29059 4.86747 1.29059 6.08333C1.29059 7.2992 1.77359 8.46526 2.63333 9.325L3.51666 10.2083L10 16.6917L16.4833 10.2083L17.3667 9.325C17.7925 8.89937 18.1303 8.39401 18.3608 7.8378C18.5912 7.28158 18.7099 6.68541 18.7099 6.08333C18.7099 5.48126 18.5912 4.88509 18.3608 4.32887C18.1303 3.77266 17.7925 3.2673 17.3667 2.84167Z"
                fill="white"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
        <div className="flex items-center z-10">
          <span
            className="ml-16"
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Heebo, sans-serif",
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "34px",
              letterSpacing: "0.75px",
            }}
          >
            Meet new friends
          </span>
        </div>
      </button>

      {/* Exercise 버튼 */}
      <button
        className="relative flex items-center justify-center w-[260px] h-[110px] rounded-[30px]"
        style={{
          background: "#54A5DA",
        }}
        onClick={() =>
          onCategoryChange(
            "#54A5DA",
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 17 18" fill="none">
              <rect x="0" y="0" width="16" height="16" fill="white" />
            </svg>,
            "Exercise"
          )
        }
      >
        <div className="absolute -top-0.25 -left-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 90 90" fill="none">
            <g filter="url(#filter0_d_49_175)">
              <rect x="24" y="16" width="63" height="63" rx="12" fill="#54A5DA" />
            </g>
            <g transform="translate(28,22) scale(1.8)">
              <path
                d="M19.0625 7.85417C19.8084 7.85417 20.5238 7.56773 21.0512 7.05786C21.5787 6.548 21.875 5.85648 21.875 5.13542C21.875 4.41436 21.5787 3.72284 21.0512 3.21297C20.5238 2.70311 19.8084 2.41667 19.0625 2.41667C18.3166 2.41667 17.6012 2.70311 17.0737 3.21297C16.5463 3.72284 16.25 4.41436 16.25 5.13542C16.25 5.85648 16.5463 6.548 17.0737 7.05786C17.6012 7.56773 18.3166 7.85417 19.0625 7.85417ZM13.4125 10.4412C12.6331 10.6285 12.1012 10.91 11.6719 11.2593C11.0281 11.7837 10.5081 12.5401 9.80561 13.7291C9.64109 14.0073 9.36897 14.211 9.0491 14.2953C8.72923 14.3796 8.38782 14.3376 8.09998 14.1786C7.81214 14.0196 7.60144 13.7565 7.51424 13.4473C7.42703 13.1381 7.47046 12.8081 7.63498 12.5298C8.33436 11.3475 9.04123 10.2412 10.0619 9.4111C11.1269 8.54352 12.4306 8.05294 14.1887 7.86383C14.9237 7.78529 15.7325 7.801 16.4906 8.12786C17.2862 8.47163 17.8675 9.08727 18.2637 9.91015C18.7975 11.0176 19.1944 11.6767 19.5119 12.0592C19.665 12.2422 19.7719 12.3274 19.8325 12.3655C19.8806 12.3957 19.9012 12.3981 19.9087 12.3993C19.9631 12.4054 20.14 12.3993 20.6575 12.1776C20.8831 12.0809 21.1294 11.9649 21.4306 11.8229L21.5025 11.7891C21.8709 11.6134 22.2427 11.4442 22.6175 11.2816C22.9201 11.1532 23.263 11.1458 23.5713 11.2612C23.8795 11.3765 24.1279 11.6052 24.2622 11.8971C24.3964 12.1891 24.4056 12.5205 24.2877 12.819C24.1699 13.1175 23.9345 13.3587 23.6331 13.4898C23.2857 13.6405 22.9413 13.7974 22.6 13.9605L22.5181 13.9991C22.23 14.1351 21.94 14.2722 21.6681 14.3882C21.1056 14.6287 20.3869 14.8897 19.6075 14.7985C18.785 14.7018 18.1512 14.2529 17.6294 13.6505L15.9212 16.8363L18.2837 19.8076C18.4246 19.985 18.5118 20.1966 18.5356 20.419L19.0556 25.2499C19.0754 25.4091 19.0623 25.5705 19.0169 25.7247C18.9716 25.8789 18.8949 26.0228 18.7915 26.1481C18.688 26.2734 18.5598 26.3775 18.4143 26.4545C18.2688 26.5314 18.1089 26.5795 17.9439 26.5961C17.779 26.6127 17.6123 26.5974 17.4535 26.5511C17.2947 26.5048 17.1471 26.4284 17.0192 26.3264C16.8912 26.2244 16.7856 26.0988 16.7083 25.9569C16.6311 25.8151 16.5839 25.6598 16.5694 25.5001L16.0856 21.0093L14.6506 19.204L14.6381 19.2264L14.5856 19.1225L11.9344 15.7875C11.804 15.6236 11.7194 15.4301 11.6885 15.2255C11.6577 15.0209 11.6816 14.8121 11.7581 14.619L13.4125 10.4412Z" 
                fill="white"
              />
              <path d="M11.52 17.5251L10.6 19.9176L6.97499 19.6396C6.81018 19.6249 6.64397 19.6418 6.486 19.6896C6.32804 19.7374 6.18147 19.8151 6.0548 19.9181C5.92813 20.0211 5.82388 20.1474 5.7481 20.2896C5.67232 20.4319 5.62652 20.5872 5.61336 20.7467C5.6002 20.9062 5.61994 21.0667 5.67144 21.2187C5.72293 21.3708 5.80516 21.5115 5.91334 21.6326C6.02152 21.7537 6.15351 21.8528 6.30163 21.9242C6.44976 21.9956 6.61108 22.0378 6.77624 22.0485L11.3437 22.3989C11.6148 22.4197 11.8855 22.3546 12.1148 22.2133C12.3441 22.072 12.5195 21.8622 12.6144 21.6159L13.3175 19.7865L11.52 17.5251Z" 
              fill="white"
              />
            </g>
          </svg>
        </div>
        <div className="flex items-center z-10">
          <span
            className="ml-11"
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Heebo, sans-serif",
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "36px",
              letterSpacing: "0.75px",
            }}
          >
            Exercise
          </span>
        </div>
      </button>

      <button
        className="relative flex items-center justify-center w-[260px] h-[110px] rounded-[30px]"
        style={{
          background: "#D199F0",
        }}
        onClick={() =>
          onCategoryChange(
            "#D199F0",
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 17 18" fill="none">
              <rect x="0" y="0" width="16" height="16" fill="white" />
            </svg>,
            "Drink"
          )
        }
      >
        <div className="absolute -top-0.25 -left-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 90 90" fill="none">
            <g filter="url(#filter0_d_49_163)">
              <rect x="24" y="16" width="63" height="63" rx="12" fill="#D199F0" />
            </g>
            <g transform="translate(36,22) scale(1.7)">
              <path
                d="M9 18.6667C9.24 18.6667 9.425 18.417 9.795 17.9177L13.482 12.9278C15.375 10.3682 16.322 9.08717 15.902 8.04417C15.482 7 14.021 7 11.099 7H6.901C3.98 7 2.516 7 2.098 8.04417C1.68 9.08833 2.625 10.3682 4.517 12.9278L8.205 17.9177C8.574 18.417 8.76 18.6667 9 18.6667ZM9 18.6667V25.6667M8.5 7L8.099 4.193C8.06909 3.98391 7.99091 3.78828 7.87286 3.62713C7.75482 3.46598 7.60137 3.34539 7.429 3.27833L5 2.33333M7.5 25.6667H10.5"
                stroke="white"
                strokeWidth="1.5625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.86 10.3052C16.1906 10.7342 16.5949 11.0772 17.0467 11.3118C17.4984 11.5464 17.9875 11.6673 18.482 11.6667C19.4126 11.6691 20.3059 11.2404 20.9656 10.4747C21.6253 9.70899 21.9974 8.66899 22 7.58333C22 5.32817 20.425 3.5 18.482 3.5C17.6379 3.4974 16.8212 3.84981 16.1817 4.49263C15.5422 5.13545 15.1226 6.02562 15 7"
                stroke="white"
                strokeWidth="1.5625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
        <div className="flex items-center z-10">
          <span
            className="ml-9"
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Heebo, sans-serif",
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "36px",
              letterSpacing: "0.75px",
            }}
          >
            Drink
          </span>
        </div>
      </button>
      <button
        className="relative flex items-center justify-center w-[260px] h-[110px] rounded-[30px]"
        style={{
          background: "#ABDB43",
        }}
        onClick={() =>
          onCategoryChange(
            "#ABDB43",
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 17 18" fill="none">
              <rect x="0" y="0" width="16" height="16" fill="white" />
            </svg>,
            "Study"
          )
        }
      >
        <div className="absolute -top-0.25 -left-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 90 90" fill="none">
            <g filter="url(#filter0_d_49_201)">
              <rect x="24" y="16" width="63" height="63" rx="12" fill="#ABDB43" />
            </g>
            <g transform="translate(29,22) scale(1.7)">
              <path
                d="M5.59679 20.06L21.4029 4.7625C22.0274 4.18421 22.861 3.86551 23.7252 3.87465C24.5895 3.88379 25.4157 4.22004 26.0269 4.8114C26.6382 5.40277 26.9859 6.20223 26.9956 7.03861C27.0052 7.87498 26.6761 8.68178 26.0788 9.28625L10.27 24.5838C9.90941 24.9328 9.45009 25.1707 8.94996 25.2675L3.875 26.25L4.89025 21.3375C4.99029 20.8535 5.23613 20.409 5.59679 20.06Z"
                stroke="white"
                strokeWidth="2.08333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.7292 8.125L22.6042 11.875"
                stroke="white"
                strokeWidth="2.08333"
              />
            </g>
          </svg>
        </div>
        <div className="flex items-center z-10">
          <span
            className="ml-9"
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "Heebo, sans-serif",
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "36px",
              letterSpacing: "0.75px",
            }}
          >
            Study
          </span>
        </div>
      </button>

    </div>
  );
}
