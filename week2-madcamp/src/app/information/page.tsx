"use client";
import React from "react";
import MeetingCard from "../components/MeetingCard";
<<<<<<< HEAD
import BottomNav from "../components/BottomNav";
=======
import BottomNav from '../components/BottomNav1';

>>>>>>> information
export default function Information() {
  return (
    <div
      style={{
        position: "relative",
        background: "#FEFEFE",
        width: "709px",
        height: "1463px",
        overflow: "hidden",
      }}
    >
      {/* Background Circle */}
      <div
        style={{
          width: "900px",
          height: "800px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, #1FF7FD -57.3%, #B33BF6 51.62%, #FF844C 101.62%, #FF844B 130.58%)",
          position: "absolute",
          top: "-600px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      />

      {/* Profile Image */}
      <div
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "100px",
          background: "url(<path-to-image>) lightgray 50% / cover no-repeat",
          position: "absolute",
          top: "128px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      />

      {/* Welcome Text */}
      <div
        style={{
          width: "320px",
          color: "#40282E",
          textAlign: "center",
          fontFamily: "ABeeZee, sans-serif",
          fontSize: "42px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "36px",
          letterSpacing: "-0.408px",
          position: "absolute",
          top: "320px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 4,
        }}
      >
        Welcome
        <br />
        Sanggeun Oh
      </div>

      {/* Info Box */}
      <div
        style={{
          width: "550px",
          height: "400px",
          background: "#F8F8F9",
          borderRadius: "10px",
          position: "absolute",
          top: "440px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "24px",
          boxSizing: "border-box",
          zIndex: 3,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            paddingTop: "32px",
            paddingLeft: "40px",
            color: "#40282E",
            fontFamily: "ABeeZee, sans-serif",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "18px",
            letterSpacing: "-0.078px",
          }}
        >
<<<<<<< HEAD
          {/* First Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                opacity="0.16"
                d="M1 15C1 13.9391 1.42143 12.9217 2.17157 12.1716C2.92172 11.4214 3.93913 11 5 11H13C14.0609 11 15.0783 11.4214 15.8284 12.1716C16.5786 12.9217 17 13.9391 17 15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15Z"
                fill="black"
              />
              <path
                d="M1 15C1 13.9391 1.42143 12.9217 2.17157 12.1716C2.92172 11.4214 3.93913 11 5 11H13C14.0609 11 15.0783 11.4214 15.8284 12.1716C16.5786 12.9217 17 13.9391 17 15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15Z"
                stroke="black"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M9 7C10.6569 7 12 5.65685 12 4C12 2.34315 10.6569 1 9 1C7.34315 1 6 2.34315 6 4C6 5.65685 7.34315 7 9 7Z"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
            <span style={{ marginLeft: "12px" }}>남성</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 21 21"
              fill="none"
            >
              <mask
                id="mask0_47_1368"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="21"
                height="21"
              >
                <path
                  d="M11 8C12.933 8 14.5 6.433 14.5 4.5C14.5 2.567 12.933 1 11 1C9.067 1 7.5 2.567 7.5 4.5C7.5 6.433 9.067 8 11 8Z"
                  fill="#555555"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 19.5C1 15.0815 5.0295 11.5 10 11.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.925 13C13.862 13 13 14.0045 13 15.243C13 17.4865 15.275 19.5255 16.5 20C17.725 19.5255 20 17.4865 20 15.243C20 14.005 19.138 13 18.075 13C17.424 13 16.8485 13.3765 16.5 13.953C16.1515 13.3765 15.576 13 14.925 13Z"
                  fill="#555555"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </mask>
              <g mask="url(#mask0_47_1368)">
                <path d="M-1 -1H23V23H-1V-1Z" fill="black" />
              </g>
=======
            {/* 첫 번째 행 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 18 18" fill="none">
                <path opacity="0.16" d="M1 15C1 13.9391 1.42143 12.9217 2.17157 12.1716C2.92172 11.4214 3.93913 11 5 11H13C14.0609 11 15.0783 11.4214 15.8284 12.1716C16.5786 12.9217 17 13.9391 17 15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15Z" fill="black"/>
                <path d="M1 15C1 13.9391 1.42143 12.9217 2.17157 12.1716C2.92172 11.4214 3.93913 11 5 11H13C14.0609 11 15.0783 11.4214 15.8284 12.1716C16.5786 12.9217 17 13.9391 17 15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15Z" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M9 7C10.6569 7 12 5.65685 12 4C12 2.34315 10.6569 1 9 1C7.34315 1 6 2.34315 6 4C6 5.65685 7.34315 7 9 7Z" stroke="black" strokeWidth="2"/>
            </svg>    
                <span style={{ marginLeft: '10px' }}>남성</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 21 21" fill="none">
                    <mask id="mask0_47_1368" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="21">
                        <path d="M11 8C12.933 8 14.5 6.433 14.5 4.5C14.5 2.567 12.933 1 11 1C9.067 1 7.5 2.567 7.5 4.5C7.5 6.433 9.067 8 11 8Z" 
                            fill="#555555" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1 19.5C1 15.0815 5.0295 11.5 10 11.5" 
                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M14.925 13C13.862 13 13 14.0045 13 15.243C13 17.4865 15.275 19.5255 16.5 20C17.725 19.5255 20 17.4865 20 15.243C20 14.005 19.138 13 18.075 13C17.424 13 16.8485 13.3765 16.5 13.953C16.1515 13.3765 15.576 13 14.925 13Z" 
                            fill="#555555" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </mask>
                    <g mask="url(#mask0_47_1368)">
                        <path d="M-1 -1H23V23H-1V-1Z" fill="black"/>
                    </g>
                </svg>
                <span style={{ marginLeft: '10px' }}>ENFP</span>
            </div>

            {/* 두 번째 행 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 24 24" fill="none">
                <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" fill="black"/>
            </svg>
                <span style={{ marginLeft: '10px' }}>23살</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 24" fill="none">
                <path fill-rule="evenodd" clipRule="evenodd" d="M3.54004 7.476H5.90104V11.8035H11.4105V14.1645H5.90104V19.6725H11.4105V22.032H4.72054C4.40797 22.0316 4.10832 21.9073 3.8873 21.6862C3.66628 21.4652 3.54194 21.1656 3.54154 20.853L3.54004 7.476Z" fill="black"/>
                <path fill-rule="evenodd" clipRule="evenodd" d="M0 2.754C0 1.233 1.233 0 2.754 0H14.5575C16.0785 0 17.3115 1.233 17.3115 2.754V5.508C17.3115 6.23841 17.0213 6.9389 16.5049 7.45537C15.9884 7.97185 15.2879 8.262 14.5575 8.262H2.754C2.02359 8.262 1.3231 7.97185 0.806628 7.45537C0.290153 6.9389 0 6.23841 0 5.508V2.754ZM2.754 2.361C2.70228 2.3606 2.651 2.37049 2.60313 2.3901C2.55527 2.40971 2.51179 2.43864 2.47522 2.47522C2.43864 2.51179 2.40971 2.55527 2.3901 2.60313C2.37049 2.651 2.3606 2.70228 2.361 2.754V5.508C2.361 5.7255 2.5365 5.901 2.754 5.901H14.5575C14.6092 5.9014 14.6605 5.89151 14.7084 5.8719C14.7562 5.85229 14.7997 5.82336 14.8363 5.78678C14.8729 5.75021 14.9018 5.70673 14.9214 5.65887C14.941 5.611 14.9509 5.55972 14.9505 5.508V2.754C14.9509 2.70228 14.941 2.651 14.9214 2.60313C14.9018 2.55527 14.8729 2.51179 14.8363 2.47522C14.7997 2.43864 14.7562 2.40971 14.7084 2.3901C14.6605 2.37049 14.6092 2.3606 14.5575 2.361H2.754ZM10.23 12.5895C10.23 11.0685 11.463 9.8355 12.984 9.8355H16.9185C18.4395 9.8355 19.6725 11.0685 19.6725 12.5895V13.377C19.6725 14.1074 19.3823 14.8079 18.8659 15.3244C18.3494 15.8408 17.6489 16.131 16.9185 16.131H12.984C12.2536 16.131 11.5531 15.8408 11.0366 15.3244C10.5202 14.8079 10.23 14.1074 10.23 13.377V12.5895ZM12.984 12.1965C12.9322 12.1959 12.8807 12.2056 12.8327 12.2252C12.7846 12.2447 12.741 12.2736 12.7042 12.3102C12.6675 12.3468 12.6384 12.3903 12.6187 12.4383C12.599 12.4862 12.5891 12.5377 12.5895 12.5895V13.377C12.5895 13.5945 12.7665 13.77 12.984 13.77H16.9185C16.9702 13.7704 17.0215 13.7605 17.0694 13.7409C17.1172 13.7213 17.1607 13.6924 17.1973 13.6558C17.2339 13.6192 17.2628 13.5757 17.2824 13.5279C17.302 13.48 17.3119 13.4287 17.3115 13.377V12.5895C17.3119 12.5378 17.302 12.4865 17.2824 12.4386C17.2628 12.3908 17.2339 12.3473 17.1973 12.3107C17.1607 12.2741 17.1172 12.2452 17.0694 12.2256C17.0215 12.206 16.9702 12.1961 16.9185 12.1965H12.984ZM10.23 20.46C10.23 18.9375 11.463 17.7045 12.984 17.7045H16.9185C18.4395 17.7045 19.6725 18.9375 19.6725 20.4585V21.246C19.6725 21.9764 19.3823 22.6769 18.8659 23.1934C18.3494 23.7098 17.6489 24 16.9185 24H12.984C12.2536 24 11.5531 23.7098 11.0366 23.1934C10.5202 22.6769 10.23 21.9764 10.23 21.246V20.46ZM12.984 20.0655C12.9322 20.0649 12.8807 20.0746 12.8327 20.0942C12.7846 20.1137 12.741 20.1426 12.7042 20.1792C12.6675 20.2158 12.6384 20.2593 12.6187 20.3073C12.599 20.3552 12.5891 20.4067 12.5895 20.4585V21.246C12.5895 21.4635 12.7665 21.639 12.984 21.639H16.9185C16.9702 21.6394 17.0215 21.6295 17.0694 21.6099C17.1172 21.5903 17.1607 21.5614 17.1973 21.5248C17.2339 21.4882 17.2628 21.4447 17.2824 21.3969C17.302 21.349 17.3119 21.2977 17.3115 21.246V20.4585C17.3119 20.4068 17.302 20.3555 17.2824 20.3076C17.2628 20.2598 17.2339 20.2163 17.1973 20.1797C17.1607 20.1431 17.1172 20.1142 17.0694 20.0946C17.0215 20.075 16.9702 20.0651 16.9185 20.0655H12.984Z" fill="black"/>
            </svg>
                <span style={{ marginLeft: '10px' }}>1분반</span>
            </div>

            {/* 세 번째 행 */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                {/* 건물 아이콘 */}
                <path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 17V17.01M6 13V13.01M18 17V17.01M18 13V13.01M22 20V8H18L12 4L6 8H2V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 22V17C14 16.4696 13.7893 15.9609 13.4142 15.5858C13.0391 15.2107 12.5304 15 12 15C11.4696 15 10.9609 15.2107 10.5858 15.5858C10.2107 15.9609 10 16.4696 10 17V22" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ marginLeft: '10px' }}>KAIST</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 22 20" fill="none">
                <mask id="mask0_49_151" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="20">
                    <path 
                        d="M21 15.5H19L11 1.25L3 15.5H1" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                    />
                    <path 
                        d="M11 13.5C9.6195 13.5 8.5 15.291 8.5 17.5V18.5H13.5V17.5C13.5 15.291 12.3805 13.5 11 13.5Z" 
                        fill="#555555" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                    />
                    <path 
                        d="M1 18.5H21M6.5 9.5C6.5 9.5 9 7.5 11 7.5C13 7.5 15.5 9.5 15.5 9.5M19 1L18 2.5L19 4L20 2.5L19 1ZM2.5 6.5L2 7.5L2.5 8.5L3 7.5L2.5 6.5Z" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                    />
                </mask>
                <g mask="url(#mask0_49_151)">
                    <path d="M-1 -2H23V22H-1V-2Z" fill="black" />
                </g>
>>>>>>> origin/information
            </svg>
            <span style={{ marginLeft: "12px" }}>ENFP</span>
          </div>

          {/* Second Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"
                fill="black"
              />
            </svg>
            <span style={{ marginLeft: "12px" }}>23살</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 20 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.54004 7.476H5.90104V11.8035H11.4105V14.1645H5.90104V19.6725H11.4105V22.032H4.72054C4.40797 22.0316 4.10832 21.9073 3.8873 21.6862C3.66628 21.4652 3.54194 21.1656 3.54154 20.853L3.54004 7.476Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 2.754C0 1.233 1.233 0 2.754 0H14.5575C16.0785 0 17.3115 1.233 17.3115 2.754V5.508C17.3115 6.23841 17.0213 6.9389 16.5049 7.45537C15.9884 7.97185 15.2879 8.262 14.5575 8.262H2.754C2.02359 8.262 1.3231 7.97185 0.806628 7.45537C0.290153 6.9389 0 6.23841 0 5.508V2.754Z"
                fill="black"
              />
            </svg>
            <span style={{ marginLeft: "12px" }}>1분반</span>
          </div>

          {/* Third Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 17V17.01M6 13V13.01M18 17V17.01M18 13V13.01M22 20V8H18L12 4L6 8H2V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 22V17C14 16.4696 13.7893 15.9609 13.4142 15.5858C13.0391 15.2107 12.5304 15 12 15C11.4696 15 10.9609 15.2107 10.5858 15.5858C10.2107 15.9609 10 16.4696 10 17V22"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span style={{ marginLeft: "12px" }}>KAIST</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="21"
              viewBox="0 0 24 16"
              fill="none"
            >
              <path
                d="M20 14C21.1 14 21.99 13.1 21.99 12L22 2C22 0.9 21.1 0 20 0H4C2.9 0 2 0.9 2 2V12C2 13.1 2.9 14 4 14H0V16H24V14H20ZM4 2H20V12H4V2Z"
                fill="black"
              />
            </svg>
            <span style={{ marginLeft: "12px" }}>캠프중</span>
          </div>

          {/* Fourth Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="21"
              viewBox="0 0 24 16"
              fill="none"
            >
              <path
                d="M20 14C21.1 14 21.99 13.1 21.99 12L22 2C22 0.9 21.1 0 20 0H4C2.9 0 2 0.9 2 2V12C2 13.1 2.9 14 4 14H0V16H24V14H20ZM4 2H20V12H4V2Z"
                fill="black"
              />
            </svg>
            <span style={{ marginLeft: "12px" }}>전산학부</span>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <div
        style={{
          width: "256px",
          textAlign: "center",
          fontFamily: '"Product Sans", sans-serif',
          fontSize: "24px",
          color: "#181D2D",
          position: "absolute",
          top: "890px",
          left: "10%",
          zIndex: 2,
        }}
      >
        Recommended for You
      </div>

      {/* MeetingCard */}
      <div
        style={{
          position: "absolute",
          top: "930px",
          left: "47%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <MeetingCard
          image="/images/sung_image.jpg"
          title="1월 24일 딸기시루팥"
          subtitle="Sweet Cakes"
          location="성심당 케이부띠끄"
          participants="8/10명"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.5 5C10.5 8.5 6 11.5 6 11.5C6 11.5 1.5 8.5 1.5 5C1.5 3.80653 1.97411 2.66193 2.81802 1.81802C3.66193 0.974106 4.80653 0.5 6 0.5C7.19347 0.5 8.33807 0.974106 9.18198 1.81802C10.0259 2.66193 10.5 3.80653 10.5 5Z"
                fill="#FA5D5D"
              />
              <path
                d="M6 6.5C6.82843 6.5 7.5 5.82843 7.5 5C7.5 4.17157 6.82843 3.5 6 3.5C5.17157 3.5 4.5 4.17157 4.5 5C4.5 5.82843 5.17157 6.5 6 6.5Z"
                fill="white"
              />
            </svg>
          }
        />
      </div>

      {/* Bottom Navigation */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          zIndex: 5,
        }}
      >
        <BottomNav />
      </div>
    </div>
  );
}
