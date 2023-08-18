import React from "react";
import Button from "../components/Button";
import { GoBell, GoCloud, GoDatabase } from "react-icons/go";

const ButtonPage = () => {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button className="mb-5" onClick={handleClick} primary rounded>
          <GoBell /> Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoDatabase />
          Secondary
        </Button>
      </div>
      <div>
        <Button success rounded>
          <GoCloud />
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

export default ButtonPage;
