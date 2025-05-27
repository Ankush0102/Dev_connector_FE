/* eslint-disable @next/next/no-img-element */

import ActionCount from "../actionCount/ActionCount";
import ActionSection from "../actionSection/ActionSection";

/* eslint-disable @typescript-eslint/no-explicit-any */
const PostCard = ({
  post,
  handleLikePost,
  userId,
}: {
  post: any;
  handleLikePost: (postId: string, isLiked: () => boolean) => void;
  userId: string;
}) => {
  const checkIsPostLiked = () => {
    const data = post.likes.find((item: any) => item.user === userId);
    if (data) {
      return true;
    }
    return false;
  };
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-center space-x-3 mb-2">
        {post.avatar ? (
          <img
            src={post.avatar}
            alt={post.name}
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-[#4BA9C9] text-white flex items-center justify-center font-bold">
            {post.name?.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <h3 className="text-sm font-semibold text-gray-800">{post.name}</h3>
          <p className="text-xs text-gray-400">
            {new Date(post.date).toLocaleString()}
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-2">{post.text}</p>
      {post.media && post.media.length > 0 && (
        <div className="grid grid-cols-2 gap-2">
          {post.media.map((media: any, idx: number) => (
            <div key={idx}>
              {media.type === "image" ? (
                <img src={media.url} alt="media" className="w-full rounded" />
              ) : (
                <video controls className="w-full rounded">
                  <source src={media.url} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>
      )}
      <ActionCount
        likesCount={post.likesCount}
        commentsCount={post.commentCount}
        repostCount={post.repostCount}
      />
      <ActionSection
        handleLikePost={handleLikePost}
        id={post._id}
        isLiked={checkIsPostLiked}
      />
    </div>
  );
};

export default PostCard;
