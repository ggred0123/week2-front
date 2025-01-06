"use client";

import {
  Search,
  ChevronRight,
  HandshakeIcon,
  Bell,
  UserCircle,
} from "lucide-react";

import { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";

interface HeaderProps {
  title: string;
}

interface Post {
  title: string;
  imageUrl: string;
}

interface MenuItem {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
  isKaist?: boolean;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

interface Community {
  id: number;
  title: string;
}

// Modal Component
function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl w-[90%] max-w-[650px] max-h-[80vh] overflow-y-auto">
        {children}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

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

const posts: Post[] = [
  { title: "1분반 QWER 운XX\n영상 공개", imageUrl: "/api/placeholder/256/256" },
  { title: "이번주 급픽 모음", imageUrl: "/api/placeholder/256/256" },
  {
    title: "딸기 시루 사러갈\n용사 모집합니다!!!",
    imageUrl: "/api/placeholder/256/256",
  },
];

function Header({ title }: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-8 py-6 bg-white">
      <h1 className="text-4xl scale-110 font-bold text-black">{title}</h1>
      <button className="p-3 bg-black rounded-xl shadow-sm">
        <Search className="w-8 h-8 text-white" />
      </button>
    </header>
  );
}

function HotPosts() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <>
      <section className="px-6 py-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <h2 className="text-3xl font-bold text-black">이번주 HOT 게시물</h2>
            <img
              src="/api/placeholder/48/48"
              alt="hot"
              className="w-[48px] h-[48px]"
            />
          </div>
          <button className="ml-auto">
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="rounded-xl overflow-hidden bg-white shadow-sm">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <p className="p-4 text-lg text-gray-900 font-medium whitespace-pre-line">
                  {post.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Modal isOpen={!!selectedPost} onClose={() => setSelectedPost(null)}>
        {selectedPost && (
          <div className="p-6">
            <img
              src={selectedPost.imageUrl}
              alt={selectedPost.title}
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h3 className="text-2xl font-bold mt-4">{selectedPost.title}</h3>
            <p className="mt-2 text-gray-600">
              게시물 상세 내용이 여기에 표시됩니다.
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}

function CommunityCard({ title, icon, bgColor }: MenuItem) {
  return (
    <div
      className={`
        w-[180px] 
        h-[180px]  
        rounded-[15px]
        flex 
        flex-col 
        items-center 
        justify-between
        p-4
      `}
      style={{ backgroundColor: bgColor }}
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

function CommunityMenu() {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [communities, setCommunities] = useState<Community[]>([]);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await fetch(
          "https://everymadcamp-service-320281252015.asia-northeast3.run.app/communities"
        );
        const data = await response.json();
        // API 응답에서 communities 배열 추출
        const communitiesData = data?.Communities || [];
        setCommunities(communitiesData);
      } catch (error) {
        console.error("커뮤니티 데이터 가져오기 오류:", error);
        setCommunities([]);
      }
    };

    fetchCommunities();
  }, []);

  if (!communities.length) {
    return <div className="p-6 text-center">로딩 중...</div>;
  }

  return (
    <>
      <section style={{ padding: "1.5rem 1rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.75rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span>📑</span>
            <h2
              style={{
                fontSize: "1.875rem",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Community
            </h2>
            <img
              src="/api/placeholder/47/42"
              alt="community"
              style={{ width: "47px", height: "42px", borderRadius: "10px" }}
            />
          </div>
          <button style={{ marginLeft: "auto" }}>
            <ChevronRight
              style={{ width: "1.25rem", height: "1.25rem", color: "black" }}
            />
          </button>
        </div>
        <p
          style={{ fontSize: "0.875rem", color: "black", marginBottom: "1rem" }}
        >
          자유롭게 정보를 공유하세요
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2rem 32px",
              placeItems: "center",
            }}
          >
            {communities.map((community, index) => (
              <div
                key={community.id}
                onClick={() =>
                  setSelectedItem({
                    title: community.title,
                    icon: "📋",
                    bgColor: "#FFE9E9",
                  })
                }
                style={{ cursor: "pointer" }}
              >
                <CommunityCard
                  title={community.title}
                  icon="📋"
                  bgColor="#FFE9E9"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)}>
        {selectedItem && (
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{selectedItem.title}</h3>
            <p className="text-gray-600">
              이 게시판의 글 목록이 여기에 표시됩니다.
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}

export default function Page() {
  return (
    <main className="pb-20 bg-white w-[709px] h-[1463px] mx-auto">
      <Header title="Community" />
      <HotPosts />
      <CommunityMenu />
      <BottomNav />
    </main>
  );
}
