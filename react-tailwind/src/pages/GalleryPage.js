import React from "react";
import { useState, useEffect } from "react";
import { ReactComponent as SpinnerIcon } from "../icons/spinner.svg";
import GalleryNavbar from "../components/GalleryNavbar";
import GallerySubHeader from "../components/GallerySubHeader";
import GalleryImageList from "../components/GalleryImageList";

const ACCESS_KEY = "DJVc5w-dwZzEcknPRZTl8Q7MlxUma73OK9oCkpTm5qc";

const GalleryPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=people%20and%20nature`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.results);
      });
  }, []);

  return (
    <div className="w-full min-h-screen font-sans text-gray-900">
      <GalleryNavbar />
      <main className="py-14 px-4 mx-auto max-w-7xl">
        <GallerySubHeader />
        <div className="flex gap-x-8 items-center pt-12">
          <a href="#" className="text-lg font-medium">
            Popular
          </a>
          <a href="#" className="text-lg text-indigo-500">
            Recent
          </a>
        </div>
        <GalleryImageList images={images} />
        <div className="flex justify-center items-center py-12">
          <SpinnerIcon className="w-8 h-8 text-indigo-600 animate-spin" />
        </div>
      </main>
    </div>
  );
};

export default GalleryPage;
