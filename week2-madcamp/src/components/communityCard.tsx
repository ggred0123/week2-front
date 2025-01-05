import { ChevronRight } from "lucide-react";

interface CommunityCardProps {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
  size?: "small" | "medium" | "large"; // 크기 조절을 위한 옵션
}

function CommunityCard({
  title,
  icon,
  bgColor,
  size = "medium",
}: CommunityCardProps) {
  const sizeClasses = {
    small: "w-[85px] h-[85px] p-3",
    medium: "w-[95px] h-[95px] p-4",
    large: "w-[105px] h-[105px] p-5",
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${bgColor} 
        rounded-2xl 
        flex 
        flex-col 
        items-center 
        justify-between
      `}
    >
      <div className="flex-1 flex items-center justify-center">
        {typeof icon === "string" ? (
          <span className="text-2xl">{icon}</span>
        ) : (
          icon
        )}
      </div>
      <p className="text-xs font-medium text-black mt-2">{title}</p>
    </div>
  );
}

// 게시판 아이콘 컴포넌트들
function FlagIcon() {
  return (
    <div className="w-8 h-8 relative">
      <div className="w-1 h-6 bg-red-500 absolute bottom-0 left-1/2 transform -translate-x-1/2" />
      <div className="w-4 h-3 bg-red-500 absolute top-0 left-1/2 transform -translate-x-1/2" />
    </div>
  );
}

function PenIcon() {
  return (
    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
      <div className="w-4 h-4 bg-yellow-400 transform rotate-45" />
    </div>
  );
}

function CommunityMenu() {
  const menuItems = [
    { title: "현역 게시판", icon: <FlagIcon />, bgColor: "bg-pink-50" },
    { title: "전체 게시판", icon: <PenIcon />, bgColor: "bg-blue-50" },
    { title: "개발 공부 게시판", icon: <PenIcon />, bgColor: "bg-pink-50" },
    { title: "취업/진로 게시판", icon: <FlagIcon />, bgColor: "bg-pink-50" },
    {
      title: "kaist 정보 게시판",
      icon: (
        <img src="/api/placeholder/32/32" alt="KAIST" className="w-8 h-8" />
      ),
      bgColor: "bg-blue-50",
    },
    {
      title: "노션 페이지",
      icon: "N",
      bgColor: "bg-pink-50",
    },
    { title: "모의 상담", icon: <FlagIcon />, bgColor: "bg-pink-50" },
    { title: "직무 게시판", icon: <PenIcon />, bgColor: "bg-blue-50" },
  ];

  return (
    <section className="px-6 py-4">
      <div className="flex items-center gap-2 mb-3">
        <span>📑</span>
        <h2 className="text-xl font-bold text-black">Community</h2>
        <button className="ml-auto">
          <ChevronRight className="w-5 h-5 text-black" />
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-4">자유롭게 정보를 공유하세요</p>
      <div className="grid grid-cols-3 gap-4">
        {menuItems.map((item, index) => (
          <CommunityCard
            key={index}
            {...item}
            size={
              index % 3 === 0 ? "large" : index % 2 === 0 ? "small" : "medium"
            }
          />
        ))}
      </div>
    </section>
  );
}
