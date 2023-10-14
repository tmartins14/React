import React from "react";
import { useRemovePhotoMutation } from "../store";
import { GoTrash } from "react-icons/go";

const PhotosListItem = ({ photo }) => {
  const [removePhoto] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div onClick={handleRemovePhoto} className="relative m-2 cursor-pointer">
      <img
        src={photo.url}
        alt="Random Photo"
        className="h-20 w-20 rounded-lg"
      />
      <div className="rounded-lg absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrash className="text-3xl" />
      </div>
    </div>
  );
};

export default PhotosListItem;
