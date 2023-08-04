import React from "react";
import { useState } from "react";

const Dropdown = ({ options, selected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  const rendererdOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  let content = selected ? selected.label : "Select";

  return (
    <div>
      <div onClick={handleClick}>{content}</div>
      {isOpen && <div>{rendererdOptions}</div>}
    </div>
  );
};

export default Dropdown;
