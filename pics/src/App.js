import { useState } from "react";
import React from "react";
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (searchTerm) => {
    const result = await searchImages(searchTerm);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
