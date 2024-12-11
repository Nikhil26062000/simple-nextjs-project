import Head from "next/head";
import React from "react";

const users = () => {
  return (
    <div className="px-8 py-4">
      <Head>
        <title>Users</title>
        <meta name="description" content="List of users on our platform." />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Our Users</h1>

        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          Meet the amazing people who are a part of our community. Each user
          contributes to the vibrant ecosystem of our platform.
        </p>

        <ul className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 list-none">
          <li className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">User 1</h2>
            <p className="text-gray-600">
              An active contributor to the community.
            </p>
          </li>
          <li className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">User 2</h2>
            <p className="text-gray-600">
              Expert in design and user experience.
            </p>
          </li>
          <li className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">User 3</h2>
            <p className="text-gray-600">Backend wizard and tech enthusiast.</p>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default users;
