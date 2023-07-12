import React from "react";
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

const App = () => {
  const handleSubmit = (searchTerm) => {
    // console.log(`Search for ${searchTerm}`);
    searchImages(searchTerm);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
