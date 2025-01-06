import React from 'react';

const InformationScreen = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-purple-500 to-pink-500 h-40 flex items-center justify-center">
        <div className="relative">
          <img
            src="https://via.placeholder.com/80" // Replace with dynamic profile picture URL
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white"
          />
          <span className="absolute bottom-0 right-0 bg-yellow-400 w-5 h-5 rounded-full border-2 border-white"></span>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold">Welcome Sanggeun Oh</h2>
      </div>

      {/* User Info */}
      <div className="mt-6 bg-white shadow-md rounded-lg w-11/12 p-6">
        <div className="grid grid-cols-3 gap-y-4">
          <div className="flex flex-col items-center">
            <span className="text-xl">👤</span>
            <p className="text-sm">남성</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl">❤️</span>
            <p className="text-sm">ENFP</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl">🎓</span>
            <p className="text-sm">23살</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl">⌛</span>
            <p className="text-sm">1분반</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl">🏫</span>
            <p className="text-sm">KAIST</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl">🏕️</span>
            <p className="text-sm">캠프중</p>
          </div>
          <div className="flex flex-col items-center col-span-3">
            <span className="text-xl">💻</span>
            <p className="text-sm">전산학부</p>
          </div>
        </div>
      </div>

      {/* Recommendation Section */}
      <div className="mt-6 w-11/12">
        <h3 className="text-lg font-semibold">Recommended for You 😊</h3>
        <div className="mt-3 bg-white shadow-md rounded-lg p-4 flex items-center">
          <img
            src="https://via.placeholder.com/100" // Replace with event image URL
            alt="Event"
            className="w-24 h-24 rounded-lg"
          />
          <div className="ml-4">
            <h4 className="text-md font-semibold">1월 24일 딸기시루팥</h4>
            <p className="text-sm">13:00 ~ 15:00</p>
            <p className="text-sm">성심당 케익부띠끄</p>
            <p className="text-sm">6명/8명</p>
          </div>
        </div>
      </div>

      {/* Placeholder for BottomNav */}
      <div className="mt-auto w-full">
        {/* Your BottomNav component goes here */}
      </div>
    </div>
  );
};

export default InformationScreen;