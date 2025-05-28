import { CREATE_POST, GET_ALL_POSTS, LIKE_POST, UNLIKE_POST } from "@/urls";
import apiRequest from "./api";
import { replaceUrl } from "@/utils/replaceUrl";

export const getAllPosts = async () => {
  const res = await apiRequest.get(GET_ALL_POSTS);
  return res.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createPost = async (body: FormData): Promise<any> => {
  const res = await apiRequest.post(CREATE_POST, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const likePost = async (postId: string) => {
  const res = await apiRequest.put(replaceUrl(LIKE_POST, "postId", postId));
  return res.data;
};

export const unlikePost = async (postId: string) => {
  const res = await apiRequest.put(replaceUrl(UNLIKE_POST, "postId", postId));
  return res.data;
};
