import React from "react";

interface MeetingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  participants: string;
  startTime: string;
  endTime: string;
  location: string;
  image: string;
}

const MeetingPopup: React.FC<MeetingPopupProps> = ({
  isOpen,
  onClose,
  title,
  description,
  participants,
  startTime,
  endTime,
  location,
  image,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt="Meeting"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-700 mb-2">{description}</p>
        <p className="text-sm font-medium text-gray-800">
          Location: {location}
        </p>
        <p className="text-sm text-gray-600">
          Participants: {participants}
        </p>
        <p className="text-sm text-gray-600">
          Time: {startTime} - {endTime}
        </p>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MeetingPopup;