import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ModalsTab from "./components/ModalsTab";
import ButtonsTab from "./components/ButtonsTab";
import TransitionsTab from "./components/TransitionsTab";
import Tabs from "./components/Tabs";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 40px 0;
  width: 100%;

  small {
    font-size: 1.2rem;
    color: gray;
  }
`;

export const Button = styled(motion.button)`
  border-radius: 6px;
  color: white;
  background: #3181ff;
  outline: none;
  font-size: 1.5rem;
  border: none;
  padding: 16px 32px;
  cursor: pointer;
  display: flex;
`;

export const Tab = styled.div`
  padding: 32px;
`;

function App() {
  const [selectedTab, setSelectedTab] = useState<string>("buttons");

  return (
    <MainContainer>
      <Title>
        framer-motion
        <br /> <small>Examples</small>
      </Title>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === "buttons" && <ButtonsTab />}
      {selectedTab === "modals" && <ModalsTab />}
      {selectedTab === "transitions" && <TransitionsTab />}
    </MainContainer>
  );
}

export default App;
