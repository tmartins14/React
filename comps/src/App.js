import React from "react";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click me!
        </Button>
      </div>
      <div>
        <Button warning outline>
          Hello!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Go
        </Button>
      </div>
      <div>
        <Button primary rounded outline>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default App;
