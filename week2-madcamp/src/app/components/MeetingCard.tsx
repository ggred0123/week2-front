import React from "react";

interface MeetingCardProps {
  image: string; // Image URL
  title: string; // Main text
  icon: React.ReactNode; // SVG icon
  location: string; // Location text
  subtitle: string;
  participants: string; // Participant text
  keyword?: string; // Text color and background color for the tag
  subtitleColor?: string; // Text color for keyword
  subtitleBgColor?: string; // Background color for keyword
  startTime: string; // Start time of the meeting
  endTime: string; // End time of the meeting
}

const MeetingCard: React.FC<MeetingCardProps> = ({
  image,
  title,
  icon,
  location,
  participants,
  keyword,
  subtitle,
  subtitleColor,
  subtitleBgColor,
  startTime,
  endTime,
}) => {
  return (
    <div
      style={{
        width: "600px",
        height: "220px",
        flexShrink: 0,
        borderRadius: "7px",
        background: "var(--White, #FFF)",
        boxShadow: "0px 12px 24px 0px rgba(68, 68, 68, 0.10)",
        display: "flex",
        alignItems: "center",
        padding: "20px",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "20px",
        marginTop: "20px",
      }}
    >
      {/* Image Section */}
      <div
        style={{
          width: "150px",
          height: "150px",
          flexShrink: 0,
          borderRadius: "12px",
          background: `url(${image}) lightgray center center / cover no-repeat`,
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
        {/* Title and Keyword */}
        <div>
          <div
            style={{
              color: "var(--Black, #333)",
              fontFamily: "Heebo",
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "8px",
            }}
          >
            {title}
          </div>
          {keyword && (
            <div
              style={{
                display: "inline-flex",
                padding: "4px 12px",
                borderRadius: "50px",
                background: subtitleBgColor,
                color: subtitleColor,
                fontFamily: "Avenir",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "normal",
                marginTop: "4px",
              }}
            >
              {keyword}
            </div>
          )}
        </div>

        {/* Location, Participants, and Time */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  marginRight: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {icon}
              </div>
              <div
                style={{
                  color: "var(--Grey, #1C1B1B)",
                  fontFamily: "ABeeZee",
                  fontSize: "18px",
                  fontWeight: 400,
                }}
              >
                {location}
              </div>
            </div>
            <div
              style={{
                color: "var(--Black, #333)",
                fontFamily: "ABeeZee",
                fontSize: "15px",
                marginTop: "4px",
              }}
            >
              {startTime} - {endTime}
            </div>
          </div>
          <div
            style={{
              color: "var(--Black, #333)",
              textAlign: "right",
              fontFamily: "Heebo",
              fontSize: "17px",
              fontWeight: 700,
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
