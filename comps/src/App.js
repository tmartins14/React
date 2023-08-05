import React from "react";
import Dropdown from "./components/Dropdown";
import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <Dropdown options={options} value={selected} onChange={handleSelect} />
  );
};

export default App;
