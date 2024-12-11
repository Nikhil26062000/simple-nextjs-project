// pages/info.js
import Head from 'next/head';

export default function Info() {
  return (
    <div className="px-8 py-4">
      <Head>
        <title>Info</title>
        <meta name="description" content="Detailed information about our platform." />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">Information</h1>

        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          Learn all the details about our platform and how it can benefit you. We
          are committed to transparency and quality.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">Features &rarr;</h2>
            <p className="text-gray-600">
              Explore the unique features that make our platform stand out.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">FAQs &rarr;</h2>
            <p className="text-gray-600">
              Have questions? Find answers in our Frequently Asked Questions section.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
