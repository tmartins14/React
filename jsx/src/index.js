// 1) Import react and reactdom libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  let message = "Bye there!";

  if (Math.random() > 0.5) {
    message = "Hello there!";
  }

  return <div>{message}</div>;
}
//  5) Show the component on the screen
root.render(<App />);
