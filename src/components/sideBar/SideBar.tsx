/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
const Sidebar = ({ user }: { user: any }) => {
  const firstLetter = user?.name?.charAt(0).toUpperCase();
  console.log(user)

  return (
    <div className="bg-white shadow rounded-lg p-4 w-full max-w-xs">
      {user?.avatar ? (
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full mx-auto"
        />
      ) : (
        <div className="w-16 h-16 mx-auto rounded-full bg-[#4BA9C9] text-white flex items-center justify-center text-xl font-bold">
          {firstLetter}
        </div>
      )}
      <h2 className="text-center text-gray-700 mt-2 font-semibold">
        {user.name}
      </h2>
      <p className="text-center text-xs text-gray-400">
        {user.status || "Developer"}
      </p>
    </div>
  );
};

export default Sidebar;
