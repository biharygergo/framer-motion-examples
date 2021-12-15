import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import { Button, Tab } from "../App";

const Overlay = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled(motion.div)`
  height: 70vh;
  width: 50vw;
  background: white;
  border-radius: 6px;
  padding: 16px;
  opacity: 1;
`;

export default function ModalsTab() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <Tab>
      <Button onClick={() => setIsModalOpen(true)}>Open modal</Button>
      <AnimatePresence>
        {isModalOpen && (
          <Overlay
            onClick={() => setIsModalOpen(false)}
            initial={{ background: "rgba(0,0,0,0)" }}
            animate={{ background: "rgba(0,0,0,0.8)" }}
            exit={{ background: "rgba(0,0,0,0)" }}
          >
            <Modal
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{
                scale: { duration: 1, type: "spring", bounce: 0.6 },
              }}
            >
              I am a modal!
            </Modal>
          </Overlay>
        )}
      </AnimatePresence>
    </Tab>
  );
}
