import React from "react";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={searchTerm} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
