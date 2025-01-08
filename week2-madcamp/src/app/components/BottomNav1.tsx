import React from "react";
import Link from "next/link";
export default function BottomNav1() {
  return (
    <div
      style={{
        width: "495px",
        height: "117.3px",
        flexShrink: 0,
        borderRadius: "100px",
        background: "var(--White, #FFF)",
        boxShadow: "0px 0px 32px 0px rgba(0, 0, 0, 0.10)",
        position: "fixed", // 위치 고정
        bottom: "69px", // 하단 위치 (조정 가능)
        left: "50.3%", // 중앙 정렬
        transform: "translateX(-50%)", // X축 중앙 정렬
      }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex justify-around items-center"
    >
      {/* Icon 1 */}
      <Link href="/meeting_list">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="92"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            transform : "scale(0.8,0.95)"
          }}
        >
          <path
            d="M11.875 20C11.9417 20 12.0083 19.9833 12.075 19.95C12.1417 19.9167 12.1917 19.8833 12.225 19.85L20.425 11.65C20.625 11.45 20.771 11.225 20.863 10.975C20.955 10.725 21.0007 10.475 21 10.225C21 9.95833 20.9543 9.704 20.863 9.462C20.7717 9.22 20.6257 9.00767 20.425 8.825L16.175 4.575C15.9917 4.375 15.779 4.22933 15.537 4.138C15.295 4.04667 15.0413 4.00067 14.776 4C14.526 4 14.276 4.046 14.026 4.138C13.776 4.23 13.551 4.37567 13.351 4.575L13.076 4.85L14.926 6.725C15.176 6.95833 15.3593 7.225 15.476 7.525C15.5927 7.825 15.651 8.14167 15.651 8.475C15.651 9.175 15.4137 9.76267 14.939 10.238C14.4643 10.7133 13.8767 10.9507 13.176 10.95C12.8427 10.95 12.522 10.8917 12.214 10.775C11.906 10.6583 11.635 10.4833 11.401 10.25L9.52501 8.4L5.15001 12.775C5.10001 12.825 5.06267 12.8793 5.03801 12.938C5.01334 12.9967 5.00067 13.059 5.00001 13.125C5.00001 13.2583 5.05001 13.3793 5.15001 13.488C5.25001 13.5967 5.36667 13.6507 5.50001 13.65C5.56667 13.65 5.63334 13.6333 5.70001 13.6C5.76667 13.5667 5.81667 13.5333 5.85001 13.5L9.25001 10.1L10.65 11.5L7.27501 14.9C7.22501 14.95 7.18767 15.0043 7.16301 15.063C7.13834 15.1217 7.12567 15.184 7.12501 15.25C7.12501 15.3833 7.17501 15.5 7.27501 15.6C7.37501 15.7 7.49167 15.75 7.62501 15.75C7.69167 15.75 7.75834 15.7333 7.82501 15.7C7.89167 15.6667 7.94167 15.6333 7.97501 15.6L11.375 12.225L12.775 13.625L9.40001 17.025C9.35001 17.0583 9.31267 17.1083 9.28801 17.175C9.26334 17.2417 9.25067 17.3083 9.25001 17.375C9.25001 17.5083 9.3 17.625 9.40001 17.725C9.50001 17.825 9.61667 17.875 9.75001 17.875C9.81667 17.875 9.87934 17.8623 9.93801 17.837C9.99667 17.8117 10.0507 17.7743 10.1 17.725L13.5 14.35L14.9 15.75L11.5 19.15C11.45 19.2 11.4127 19.254 11.388 19.312C11.3633 19.37 11.3507 19.4327 11.35 19.5C11.35 19.6333 11.4043 19.75 11.513 19.85C11.6217 19.95 11.7423 20 11.875 20ZM11.85 22C11.2333 22 10.6877 21.796 10.213 21.388C9.73834 20.98 9.45901 20.4673 9.37501 19.85C8.80834 19.7667 8.33334 19.5333 7.95001 19.15C7.56667 18.7667 7.33334 18.2917 7.25001 17.725C6.68334 17.6417 6.21267 17.4043 5.83801 17.013C5.46334 16.6217 5.23401 16.1507 5.15001 15.6C4.51667 15.5167 4.00001 15.2417 3.60001 14.775C3.20001 14.3083 3.00001 13.7583 3.00001 13.125C3.00001 12.7917 3.06267 12.471 3.18801 12.163C3.31334 11.855 3.49234 11.584 3.72501 11.35L9.52501 5.575L12.8 8.85C12.8333 8.9 12.8833 8.93767 12.95 8.963C13.0167 8.98833 13.0833 9.00067 13.15 9C13.3 9 13.425 8.95433 13.525 8.863C13.625 8.77167 13.675 8.65067 13.675 8.5C13.675 8.43333 13.6623 8.36667 13.637 8.3C13.6117 8.23333 13.5743 8.18333 13.525 8.15L9.95001 4.575C9.76667 4.375 9.55434 4.22933 9.31301 4.138C9.07167 4.04667 8.81734 4.00067 8.55001 4C8.30001 4 8.05001 4.046 7.80001 4.138C7.55001 4.23 7.32501 4.37567 7.12501 4.575L3.60001 8.125C3.45001 8.275 3.32501 8.45 3.22501 8.65C3.12501 8.85 3.05834 9.05 3.02501 9.25C2.99167 9.45 2.99167 9.65433 3.02501 9.863C3.05834 10.0717 3.12501 10.2673 3.22501 10.45L1.77501 11.9C1.49167 11.5167 1.28334 11.096 1.15001 10.638C1.01667 10.18 0.966672 9.71733 1.00001 9.25C1.03334 8.78267 1.15001 8.32867 1.35001 7.888C1.55001 7.44733 1.82501 7.05133 2.17501 6.7L5.70001 3.175C6.10001 2.79167 6.54601 2.5 7.03801 2.3C7.53001 2.1 8.03401 2 8.55001 2C9.06601 2 9.57034 2.1 10.063 2.3C10.5557 2.5 10.993 2.79167 11.375 3.175L11.65 3.45L11.925 3.175C12.325 2.79167 12.771 2.5 13.263 2.3C13.755 2.1 14.259 2 14.775 2C15.291 2 15.7953 2.1 16.288 2.3C16.7807 2.5 17.218 2.79167 17.6 3.175L21.825 7.4C22.2083 7.78333 22.5 8.225 22.7 8.725C22.9 9.225 23 9.73333 23 10.25C23 10.7667 22.9 11.271 22.7 11.763C22.5 12.255 22.2083 12.6923 21.825 13.075L13.625 21.25C13.3917 21.4833 13.121 21.6667 12.813 21.8C12.505 21.9333 12.184 22 11.85 22Z"
            fill="#B33BF6"
          />
        </svg>
      </Link>

      <Link href="/recommendation">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="92"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            transform : "scale(0.8,0.95)"
          }}
        >
          <path
            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
            stroke="#747474"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2V8H20"
            stroke="#747474"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 13H8"
            stroke="#747474"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 17H8"
            stroke="#747474"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 9H9H8"
            stroke="#747474"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {/* Icon 4 */}
      <Link href="/information">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="92"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            transform : "scale(0.8,0.95)"
          }}
        >
          <path
            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
            stroke="#747474"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            stroke="#747474"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="60"
            viewBox="0 0 31 60"
            fill="none"
          >
            <path
              d="M0.5 3H30.5"
              stroke="#747474"
              strokeWidth="2"
              transform="translate(0, 20)"
            />
          </svg>
        </svg>
      </Link>
    </div>
  );
}
