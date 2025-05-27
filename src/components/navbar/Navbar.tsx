"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link className="text-[#4BA9C9] font-bold text-xl" href="/posts">DevConnector</Link>
        <div className="space-x-4">
          <Link
            href="/profile"
            className="text-gray-700 text-sm hover:text-[#4BA9C9]"
          >
            Profile
          </Link>
          <Link
            href="/logout"
            className="text-gray-700 text-sm hover:text-[#4BA9C9]"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
