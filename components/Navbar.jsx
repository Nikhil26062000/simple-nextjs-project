import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="">
      <ul className="flex justify-center my-10 ">
        <div className="px-6 gap-5 py-3 rounded-md bg-purple-500 text-white flex justify-center text-[14px] fixed top-5 z-50">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/users">Users</Link>
          <Link href="users/info">Info</Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
