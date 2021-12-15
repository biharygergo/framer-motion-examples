import { motion, Variants } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { Button, Tab } from "../App";

const Spinner = styled(motion.span)`
  border: 3px solid #3181ff;
  border-top: 3px solid white;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

const ButtonVariants: Variants = {
  error: {
    rotate: ["0deg", "3deg", "-3deg", "3deg", "0deg"],
    x: [0, -1, 1, 0],
    background: "#DF4840",
    transition: { duration: 0.5 },
  },
  initial: {
    x: 0,
  },
  loading: {
    x: 0,
    background: "#3181ff",
  },
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
        layout={true}
        onClick={onButtonClick}
        variants={ButtonVariants}
        initial="initial"
        animate={buttonState}
      >
        {buttonState === "loading" && (
          <Spinner
            initial={{ opacity: 0 }}
            animate={{ rotate: 360, opacity: 1 }}
            transition={{
              rotate: { repeat: Infinity, duration: 1, delay: 0.1 },
            }}
          />
        )}
        Save
      </Button>
    </Tab>
  );
}
