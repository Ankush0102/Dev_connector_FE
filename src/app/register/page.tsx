"use client";
import React, { useState } from "react";
import { RegisterProps } from "@/types";
import apiRequest from "@/lib/api";
import { USER_REGISTER } from "@/urls";
// import { useRouter } from "next/navigation";

const Register = () => {
  // const router = useRouter();
  const [form, setForm] = useState<RegisterProps>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await apiRequest.post(USER_REGISTER, form);
      localStorage.setItem("authToken", res.data.token);
      // router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#4BA9C9] to-[#5B7FC9] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-center text-gray-700 text-xl font-medium mb-1">
          Register
        </h2>
        <p className="text-center text-gray-400 text-xs mb-6">
          Looks like you are first time here, create an account below to
          start using dev connector.
        </p>
        <div>
          <label
            className="block text-gray-500 text-xs font-semibold mb-1"
            htmlFor="name"
          >
            NAME
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded px-3 py-2 mb-4 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#4BA9C9]"
            required
          />
        </div>
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
        <div className="flex justify-end">
          <button
            className="bg-[#4BA9C9] text-white text-xs font-semibold px-4 py-2 rounded"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
