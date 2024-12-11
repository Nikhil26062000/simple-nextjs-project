"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

const Home = () => {
  const router = useRouter();
  return (
    // <div className="flex justify-center gap-5">
    //   <h1>Home</h1>

    // </div>

    <div className="px-8 py-4">
      <Head>
        <title>Home</title>
        <meta name="description" content="Welcome to our website." />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">
          Welcome to Our Website
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          Explore our features and learn more about what we offer. We are here
          to serve you with the best solutions.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">Learn More &rarr;</h2>
            <p className="text-gray-600">
              Discover the wide range of services we provide to meet your needs.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">Contact Us &rarr;</h2>
            <p className="text-gray-600">
              Get in touch with our team to learn more about how we can help.
            </p>
          </div>
        </div>
        <button
          className="py-3 px-6 mt-5 rounded-md bg-purple-500"
          onClick={() => router.push("about")}
        >
          Go To About
        </button>
      </main>
    </div>
  );
};

export default Home;
