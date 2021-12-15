import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { Button, Tab } from "../App";

const Spinner = styled(motion.span)`
  border: 3px solid #3181ff;
  border-top: 3px solid white;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
`;

const ButtonLabel = styled.span`
  margin: 0 16px;
`;

const buttonVariants: Variants = {
  error: {
    rotate: ["0deg", "5deg", "-4deg", "3deg", "1deg", "0deg"],
    background: "#DF4840",
  },
  loading: {
    background: "#3181ff",
  },
};

const iconVariants: Variants = {
  loading: {
    opacity: 1,
    x: [20, -5, 5, -3, 0],
    rotate: 360,
    transition: {
      rotate: { repeat: Infinity, duration: 1, delay: 0.1 },
    },
  },
};

const getButtonLabel = (buttonState: string) => {
  switch (buttonState) {
    case "initial":
      return "Save";
    case "loading":
      return "Saving";
    case "error":
      return "Error";

    default:
      break;
  }
};

export default function ButtonsTab() {
  const [buttonState, setButtonState] = useState<string>("initial");

  const onButtonClick = () => {
    setButtonState("loading");

    window.setTimeout(() => {
      setButtonState("error");
    }, 3000);
  };

  return (
    <Tab>
      <Button
        onClick={onButtonClick}
        variants={buttonVariants}
        animate={buttonState}
      >
        <AnimatePresence>
          {buttonState === "loading" && (
            <Spinner
              initial={{ opacity: 0, x: 20 }}
              variants={iconVariants}
              animate={buttonState}
            />
          )}
        </AnimatePresence>
        <ButtonLabel>{getButtonLabel(buttonState)}</ButtonLabel>
      </Button>
    </Tab>
  );
}
