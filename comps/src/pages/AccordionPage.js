import React from "react";
import Button from "../components/Button";
import { GoBell } from "react-icons/go";
import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "dsfgdf",
      label: "Accordion Item 1",
      content:
        "Content for Accordion Item 1. This is the content of the first accordion item.",
    },
    {
      id: "pokmk",
      label: "Accordion Item 2",
      content:
        "Content for Accordion Item 2. This is the content of the second accordion item.",
    },
    {
      id: "sgxdfhsg",
      label: "Accordion Item 3",
      content:
        "Content for Accordion Item 3. This is the content of the third accordion item.",
    },
    {
      id: "iojfgdfg",
      label: "Accordion Item 4",
      content:
        "Content for Accordion Item 4. This is the content of the fourth accordion item.",
    },
  ];
  return <Accordion items={items} />;
};

export default AccordionPage;
