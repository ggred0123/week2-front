import React from "react";

interface MeetingCardProps {
  image: string; // Image URL
  title: string; // Main text, e.g., "아이스크림 먹으러가실 분?"
  subtitle: string; // Secondary text, e.g., "Ice Cream"
  icon: React.ReactNode; // SVG icon
  location: string; // Location text, e.g., "신세계 백화점 B1"
  participants: string; // Participant text, e.g., "4/10명"
}

const MeetingCard: React.FC<MeetingCardProps> = ({
  image,
  title,
  subtitle,
  icon,
  location,
  participants,
}) => {
  return (
    <div
      style={{
        width: "244px",
        height: "81px",
        flexShrink: 0,
        borderRadius: "7px",
        background: "var(--White, #FFF)",
        boxShadow: "0px 12px 24px 0px rgba(68, 68, 68, 0.10)",
        display: "flex",
        alignItems: "center",
        padding: "10px",
        marginLeft: "14px",
      }}
    >
      {/* Image Section */}
      <div
        style={{
          width: "51px",
          height: "51px",
          flexShrink: 0,
          borderRadius: "12px",
          background: `url(${image}) lightgray 0px -0.307px / 100% 158.248% no-repeat`,
          marginLeft: "6px",
        }}
      ></div>

      {/* Content Section */}
      <div
        style={{
          flex: 1,
          marginLeft: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Title and Subtitle */}
        <div>
          <div
            style={{
              color: "var(--Black, #333)",
              fontFamily: "Heebo",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              padding: "5px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "inline-flex",
              padding: "2px 8px",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              borderRadius: "100px",
              background: "rgba(45, 156, 219, 0.10)",
              color: "var(--Blue-2, #2D9CDB)",
              fontFamily: "Avenir",
              fontSize: "8px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              marginLeft: "0px",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Location and Participants */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "8px",
                height: "8px",
                flexShrink: 0,
                marginRight: "5px",
                marginLeft: "5px",
                padding: "3px",
              }}
            >
              {icon}
            </div>

            {/* Location */}
            <div
              style={{
                color: "var(--Grey, #747474)",
                fontFamily: "ABeeZee",
                fontSize: "8px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                marginLeft: "6px",
                marginTop: "16px",
              }}
            >
              {location}
            </div>
          </div>

          {/* Participants */}
          <div
            style={{
              color: "var(--Black, #333)",
              textAlign: "right",
              fontFamily: "Heebo",
              fontSize: "7px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              marginLeft: "5px",
            }}
          >
            {participants}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
