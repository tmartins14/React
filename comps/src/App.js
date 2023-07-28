import React from "react";
import Button from "./Button";
import { GoBell } from "react-icons/go";

const App = () => {
  const handleClick = () => {
    console.log("Clicked!");
  };

  return (
    <div>
      <div>
        <Button className="mb-5" onClick={handleClick} primary rounded>
          <GoBell /> Primary
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Secondary
        </Button>
      </div>
      <div>
        <Button success rounded>
          Success
        </Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button danger rounded outline>
          Danger
        </Button>
      </div>
    </div>
  );
};

export default App;
