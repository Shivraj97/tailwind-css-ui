import React from "react";

const GalleryImageList = ({ images }) => {
  return (
    <div className="gap-6 pt-2 columns-3xs">
      {images?.map((image) => (
        <figure className="py-4 [break-inside:avoid]" key={image.id}>
          <img
            className="rounded-md"
            src={image.urls.regular}
            alt={image.alt_description}
          />
          <figcaption className="mt-2">{image.user.name}</figcaption>
          <p className="text-sm text-gray-500 line-clamp-2">
            {image.description}
          </p>
        </figure>
      ))}
    </div>
  );
};

export default GalleryImageList;
