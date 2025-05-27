"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import IconUploadPhoto from "@/assets/icons/icon-upload-photo.svg";
import IconUploadVideo from "@/assets/icons/icon-upload-video.svg";

const CreatePostForm = ({
  handleCreatePost,
}: {
  handleCreatePost: (e: React.FormEvent, text: string, media: FileList | null, callback: () => void) => void;
}) => {
  const [text, setText] = useState("");
  const [media, setMedia] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = (type: "video" | "image") => {
    if (fileInputRef.current) {
      fileInputRef.current.accept = type === "video" ? "video/*" : "image/*";
      fileInputRef.current.multiple = type === "image";
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setMedia(files);
    }
  };

  const callback = () => {
    setLoading(false);
    setMedia(null);
    setText("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    setLoading(true);
    handleCreatePost(e, text, media, callback)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow p-4 mb-6"
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start a post..."
        className="w-full border border-gray-200 rounded px-3 py-2 text-sm text-gray-700 mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#4BA9C9]"
        rows={3}
        required
      />
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <div
            className="flex gap-1 items-center cursor-pointer"
            onClick={() => handleFileClick("video")}
          >
            <Image
              src={IconUploadVideo}
              alt="upload-photo"
              height={24}
              width={24}
            />
            <span className="text-sm">Video</span>
          </div>
          <div
            className="flex gap-1 items-center cursor-pointer"
            onClick={() => handleFileClick("image")}
          >
            <Image
              src={IconUploadPhoto}
              alt="upload-photo"
              height={24}
              width={24}
            />
            <span className="text-sm">Photo</span>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-[#4BA9C9] text-white text-xs font-semibold px-4 py-2 rounded hover:bg-[#3a93b1] disabled:opacity-50"
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </div>
    </form>
  );
};

export default CreatePostForm;
