import React from "react";
import NoPage from "/images/404.png";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white text-center px-4">
      <div className="relative">
        <img src={NoPage} />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-gray-800">
        Oops! page not found
      </h2>

      <p className="mt-2 text-gray-500 max-w-md">
        Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. Maecenas
        sagittis tortor at metus mollis.
      </p>

      <a
        href="/"
        className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
      >
        Back to Home
      </a>
    </div>
  );
}
