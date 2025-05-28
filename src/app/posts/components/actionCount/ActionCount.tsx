import React from "react";
import IconLike from "@/assets/icons/icon-like-count.svg";
import Image from "next/image";

interface actionCountProps {
  likesCount: number;
  commentsCount: number;
  repostCount: number;
}

const ActionCount = ({
  likesCount,
  commentsCount,
  repostCount,
}: actionCountProps) => {
  return (
    <div className="flex mb-2 items-center justify-between">
      <div className="flex items-center gap-1">
        <Image src={IconLike} alt="like" className="h-5 w-5" />
        <span className="text-sm text-gray-500">{likesCount}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">{commentsCount} comments</span>
        <span className="text-sm text-gray-500">{repostCount} reposts</span>
      </div>
    </div>
  );
};

export default ActionCount;
