import React from "react";
import { Search, MessageCircle, Bell, User, Box } from "lucide-react";

const CommunityPost = ({ title, content, author, time }) => (
  <div className="bg-white p-3 rounded-lg mb-2 shadow-sm">
    <h3 className="text-sm mb-1">{title}</h3>
    <p className="text-xs text-gray-600 mb-1">{content}</p>
    <div className="text-xs text-gray-500">
      - {author} {time && `- ${time}`} -
    </div>
  </div>
);

const CommunityPage = () => {
  return (
    <div className="w-full mx-auto" style={{ aspectRatio: "70.9/146.3" }}>
      <div className="h-full bg-gray-50 relative">
        {/* Header */}
        <div className="flex justify-between items-center p-3 bg-white">
          <h1 className="text-lg font-semibold">Community</h1>
          <Search className="w-4 h-4 text-gray-600" />
        </div>

        {/* In camp 게시판 */}
        <div className="mx-3 my-2 p-2 bg-rose-50 rounded-lg flex items-center">
          <div className="w-5 h-5 bg-indigo-700 rounded-lg flex items-center justify-center mr-2">
            <Box className="w-3 h-3 text-white" />
          </div>
          <span className="text-sm">In camp 게시판</span>
        </div>

        {/* Content Area */}
        <div
          className="px-3 overflow-y-auto"
          style={{ height: "calc(100% - 8rem)" }}
        >
          <CommunityPost
            title="이걸 2주나 더 해야하다고?"
            content="류교수님 감사합니다. 다들에 하는 진구들은 2달로 늘려주세요"
            author="익명"
          />

          <CommunityPost
            title="1분반 뭐임???"
            content="왜케 진도 안나가 볼래??? 아거 뭐가 문제인 사람이 많아가는듯"
            author="3분반 운영진"
          />

          <CommunityPost
            title="나 5만원 안남"
            content="밥값과 교통비 류교수님 장학금시니 구제해야겠다."
            author=""
          />
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 w-full bg-white border-t flex justify-around py-2">
          <Box className="w-5 h-5 text-gray-400" />
          <MessageCircle className="w-5 h-5 text-purple-600" />
          <Bell className="w-5 h-5 text-gray-400" />
          <User className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
