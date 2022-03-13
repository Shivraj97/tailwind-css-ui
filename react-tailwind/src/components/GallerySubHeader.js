import React from "react";

const GallerySubHeader = () => {
  return (
    <div>
      <div className="flex items-center gap-x-1">
        <h1 className="text-4xl font-bold">People and Nature</h1>
        <button className="ml-4 leading-6 py-1.5 px-5 text-sm text-white bg-indigo-600 rounded-full hover:bg-indigo-800">
          Follow
        </button>
        <button className="ml-2 leading-6 py-1.5 px-5 text-sm rounded-full border border-gray-200 hover:bg-indigo-800 hover:text-white">
          Edit
        </button>
      </div>
      <div className="pt-3 text-lg text-gray-700">
        Photos that look like taken straight out of fairy tale book.
      </div>
      <div className="inline-flex gap-x-2 items-center pt-2 text-sm text-gray-500">
        <span>36 photos from 24 people. Curated by</span>
        <img
          className="object-cover w-7 h-7 rounded-full"
          src="/img/avatar-2.jpeg"
          alt=""
        />
        <a href="#" className="hover:text-indigo-600">
          Alan Prince
        </a>
      </div>
    </div>
  );
};

export default GallerySubHeader;
