/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  createPost,
  getAllPosts,
  likePost,
  unlikePost,
} from "@/services/posts";
import { PostProps } from "@/types";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sideBar/SideBar";
import PostCard from "./components/postCard/PostCard";
import { getCurrentUser } from "@/services/user";
import { useRouter } from "next/navigation";
import CreatePostForm from "./components/createPostForm/CreatePostForm";

const Posts = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getAllPosts();
      setPosts(res);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getCurrentUser();
        setUser(data);
      } catch (err) {
        console.log(err);
        router.push("/login");
      }
    };
    fetchUser();
  }, [router]);

  const handleLikePost = async (postId: string, isLiked: () => boolean) => {
    const postData = isLiked()
      ? await unlikePost(postId)
      : await likePost(postId);
    setPosts(
      posts.map((post) => {
        if (post._id === postData._id) {
          return postData;
        }
        return post;
      })
    );
  };

  const handleCreatePost = async (
    e: React.FormEvent,
    text: string,
    media: FileList | null,
    callback: () => void
  ) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("text", text);
    if (media && media.length > 0) {
      for (let i = 0; i < media.length; i++) {
        formData.append("media", media[i]);
      }
    }
    try {
      const postData = await createPost(formData);
      setPosts([postData, ...posts])
    } catch (error) {
      console.log(error);
    } finally {
      callback();
    }
  };

  return (
    <div className="bg-[#EEF2F8] min-h-screen pt-16 px-4">
      <Navbar />
      <div className="max-w-6xl mx-auto flex gap-4 mt-4">
        <div className="hidden md:block w-1/4">
          {user && <Sidebar user={user} />}
        </div>
        <div className="w-full md:w-3/4">
          <CreatePostForm
            handleCreatePost={handleCreatePost}
          />
          {posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              handleLikePost={handleLikePost}
              userId={user?._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
