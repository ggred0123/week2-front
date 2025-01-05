// UploadExample.tsx
import React, { useState } from "react";

interface UploadExampleProps {
  onUpload: (url: string) => void;
}

function UploadExample({ onUpload }: UploadExampleProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("파일을 선택해주세요.");
      return;
    }

    try {
      setUploading(true);

      // 1. Presigned URL 받아오기
      const baseUrl =
        "https://everymadcamp-service-320281252015.asia-northeast3.run.app";
      const fileName = encodeURIComponent(`${Date.now()}-${selectedFile.name}`);

      const presignedUrlResponse = await fetch(
        `${baseUrl}/aws/s3?fileName=${fileName}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!presignedUrlResponse.ok) {
        const errorText = await presignedUrlResponse.text();
        throw new Error(`Failed to get presigned URL: ${errorText}`);
      }

      const presignedData = await presignedUrlResponse.json();
      console.log("Presigned URL Response:", presignedData); // 디버깅용

      if (!presignedData) {
        throw new Error("No data received from presigned URL endpoint");
      }

      const uploadUrl =
        presignedData.preSignedUrl || presignedData.presignedUrl;
      if (!uploadUrl) {
        throw new Error("No presigned URL in response");
      }

      // 2. S3에 직접 업로드
      const uploadResponse = await fetch(uploadUrl, {
        method: "PUT",
        headers: {
          "Content-Type": selectedFile.type,
        },
        body: selectedFile,
      });

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload to S3");
      }

      // 3. S3 URL 생성
      const s3Url = uploadUrl.split("?")[0];
      setImageUrl(s3Url);
      onUpload(s3Url);

      alert("이미지 업로드 성공!");
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          disabled={uploading}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
        <button
          onClick={handleUpload}
          disabled={!selectedFile || uploading}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          {uploading ? "업로드 중..." : "업로드"}
        </button>
      </div>

      {imageUrl && (
        <div className="mt-4">
          <p className="text-sm text-gray-700 mb-2">업로드된 이미지:</p>
          <img
            src={imageUrl}
            alt="Uploaded Preview"
            className="w-32 h-32 object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
}

export default UploadExample;
