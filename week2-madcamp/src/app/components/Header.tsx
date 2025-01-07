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
          fontWeight: 900,
          lineHeight: '37px',
          letterSpacing: '0.5px',
          width: '500px',
        }}
      >
        {title}
      </h1>
    </div>
  );
}
