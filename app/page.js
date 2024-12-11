"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center gap-5">
      <h1>Home</h1>
      <button
        className="py-3 px-6 rounded-md bg-purple-500"
        onClick={() => router.push("about")}
      >
        Go To About
      </button>
    </div>
  );
};

export default Home;
