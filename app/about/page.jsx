// pages/about.js
import Head from 'next/head';

export default function About() {
  return (
    <div className="px-8 py-4">
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us." />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">About Us</h1>

        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          Welcome to our website! We are passionate about creating impactful solutions
          that make a difference. Our team is dedicated to delivering high-quality
          products and services.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">Our Mission &rarr;</h2>
            <p className="text-gray-600">
              To empower individuals and organizations by providing innovative
              solutions and services.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">Our Vision &rarr;</h2>
            <p className="text-gray-600">
              To be a leader in our industry, inspiring trust and excellence in
              everything we do.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
