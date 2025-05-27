/* eslint-disable @typescript-eslint/no-explicit-any */
export interface RegisterProps {
  name: string;
  email: string;
  password: string;
}
export interface LoginProps {
  email: string;
  password: string;
}

export interface PostProps {
  _id: string;
  text: string;
  media: { url: string; type: "image" | "video" }[];
  name: string;
  avatar: string;
  date: string;
  likes: any[];
  comments: any[];
  updatedAt: string;
  likesCount: number;
  commentCount:number;
  repostCount:number;
}

export interface CreatePostBody {
  text: string;
  media?: { url: string; type: 'image' | 'video' }[]; // only if applicable
}