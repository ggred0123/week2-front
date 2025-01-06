import React from 'react';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <div className="flex items-center justify-between px-8 py-2 bg-white shadow-sm">
      {/* Title */}
      <h1
        style={{
          marginTop: '40px',
          color: 'var(--Black, #333)',
          fontFamily: 'Heebo',
          fontSize: '35px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '37px',
          letterSpacing: '0.5px',
          width: '246px',
        }}
      >
        {title}
      </h1>

      {/* Search Icon */}
      <div style={{ padding:"30px"}}></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-9 h-9 text-gray-500 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75L21 21M10.5 17.25a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5z"
          />
        </svg>
    </div>
  );
}
