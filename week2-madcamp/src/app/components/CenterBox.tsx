import React from 'react';

export default function CenterBox() {
  return (
    <div style={{ width: '209px', textAlign: 'center' }}>
      <div
        style={{
          width: '70px',
          height: '70px',
          flexShrink: 0,
          borderRadius: '8px',
          background: 'var(--Pink, #FA5D5D)',
          boxShadow: '0px 8px 24px 0px rgba(255, 113, 33, 0.12)',
          margin: '0 auto', // Center the icon container
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
          <g clip-path="url(#clip0_49_225)">
            <path
              d="M14.6389 3.72143C14.2842 3.35644 13.8631 3.0669 13.3996 2.86935C12.9361 2.67181 12.4392 2.57013 11.9375 2.57013C11.4358 2.57013 10.939 2.67181 10.4755 2.86935C10.0119 3.0669 9.59082 3.35644 9.23612 3.72143L8.50001 4.47858L7.7639 3.72143C7.04745 2.98451 6.07573 2.57051 5.06251 2.57051C4.0493 2.57051 3.07758 2.98451 2.36112 3.72143C1.64467 4.45836 1.24217 5.45784 1.24217 6.5C1.24217 7.54217 1.64467 8.54165 2.36112 9.27858L3.09723 10.0357L8.50001 15.5929L13.9028 10.0357L14.6389 9.27858C14.9938 8.91375 15.2753 8.48059 15.4673 8.00383C15.6594 7.52707 15.7582 7.01607 15.7582 6.5C15.7582 5.98394 15.6594 5.47294 15.4673 4.99618C15.2753 4.51942 14.9938 4.08626 14.6389 3.72143Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_49_225">
              <rect
                width="16.6667"
                height="17.1429"
                fill="white"
                transform="translate(0.166672 0.428574)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <p
        style={{
          color: 'var(--Black, #333)',
          fontFamily: 'Heebo',
          fontSize: '90px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '26px',
          letterSpacing: '0.5px',
          marginTop: '8px',
        }}
      >
        Meet new friend list
      </p>
    </div>
  );
}
