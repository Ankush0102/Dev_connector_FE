/* eslint-disable react/no-unescaped-entities */
"use client";

import apiRequest from "@/services/api";
import { LoginProps } from "@/types";
import { USER_LOGIN } from "@/urls";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Login = () => {
  const router = useRouter();
  const [form, setForm] = useState<LoginProps>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await apiRequest.post(USER_LOGIN, form);
      router.push("/posts");
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data?.msg || "Login failed");
      } else {
        setError("Login failed");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#4BA9C9] to-[#5B7FC9] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-center text-gray-700 text-xl font-medium mb-1">
          Login
        </h2>
        <p className="text-center text-gray-400 text-xs mb-6">
          Login to your account to start using dev connector.
        </p>
        {error && (
          <p className="text-red-500 text-xs text-center mb-3">{error}</p>
        )}
        <div>
          <label
            className="block text-gray-500 text-xs font-semibold mb-1"
            htmlFor="email"
          >
            EMAIL
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded px-3 py-2 mb-4 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#4BA9C9]"
            required
          />
        </div>
        <div>
          <label
            className="block text-gray-500 text-xs font-semibold mb-1"
            htmlFor="password"
          >
            PASSWORD
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded px-3 py-2 mb-6 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#4BA9C9]"
            required
          />
        </div>
        <div className="flex justify-between">
          <p className="text-center text-gray-400 text-xs mb-6">
            Don't have an account?{" "}
            <Link href="/register" className="text">
              Register
            </Link>
          </p>
          <button
            className="bg-[#4BA9C9] text-white text-xs font-semibold px-4 py-2 rounded cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
