import React from "react";
import Image from "next/image";
const FeedPhotoItem = ({ photo }) => {
  return (
    <li>
      <img src={photo.src} alt={photo.id} />
      <span>{photo.title}</span>
    </li>
  );
};

export default FeedPhotoItem;
