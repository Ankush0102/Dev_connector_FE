import React from "react";
import Image from "next/image";
import IconLike from "@/assets/icons/icon-like.svg";
import IconComment from "@/assets/icons/icon-comment.svg";
import ImageRepost from "@/assets/images/image-repost.png";
import IconShare from "@/assets/icons/icon-share.svg";

const ActionSection = ({
  handleLikePost,
  id,
  isLiked,
}: {
  handleLikePost: (postId: string, isLiked: () => boolean) => void;
  id: string;
  isLiked: () => boolean;
}) => {
  return (
    <div className="flex pt-2 text-sm text-gray-500 border-t border-gray-100 gap-9">
      <button
        className={`${
          isLiked() ? "text-[#78b9eb]" : ""
        } hover:text-[#78b9eb] font-medium flex items-center gap-2 cursor-pointer`}
        onClick={() => handleLikePost(id, isLiked)}
      >
        <Image src={IconLike} alt="like" className="h-7 w-7" />
        <span className="text-base font-semibold">Like</span>
      </button>
      <button className="hover:text-[#78b9eb] font-medium flex items-center gap-2 cursor-pointer">
        <Image src={IconComment} alt="comment" className="h-7 w-7" />
        <span className="text-base font-semibold">Comment</span>
      </button>
      <button className="hover:text-[#78b9eb] font-medium flex items-center gap-2 cursor-pointer">
        <Image src={ImageRepost} alt="repost" className="h-7 w-7" />
        <span className="text-base font-semibold">Repost</span>
      </button>
      <button className="hover:text-[#78b9eb] font-medium flex items-center gap-2 cursor-pointer">
        <Image src={IconShare} alt="share" className="h-7 w-7" />
        <span className="text-base font-semibold">Share</span>
      </button>
    </div>
  );
};

export default ActionSection;
