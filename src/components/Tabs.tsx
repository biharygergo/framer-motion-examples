import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";

const Tabs = styled.div`
  display: flex;
  width: 100%;
  background: #eceef1;
`;

const TabSelectorButton = styled.button`
  outline: none;
  border: none;
  flex: 1;
  background: none;
  padding: 16px;
  font-size: 1.2rem;
  position: relative;
  cursor: pointer;
`;

const TabUnderLine = styled(motion.div)`
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  border-radius: 2px;
  background: #3181ff;
`;

const TabItem = (props: {
  title: string;
  onClick: () => void;
  isSelected: boolean;
}) => {
  return (
    <TabSelectorButton onClick={props.onClick}>
      {props.title}
      {props.isSelected && <TabUnderLine layoutId="underline" />}
    </TabSelectorButton>
  );
};

export default function TabsComponent(props: {
  setSelectedTab: (tab: string) => void;
  selectedTab: string;
}) {
  const { setSelectedTab, selectedTab } = props;
  return (
    <Tabs>
      <AnimateSharedLayout>
        <TabItem
          title="Buttons"
          onClick={() => setSelectedTab("buttons")}
          isSelected={selectedTab === "buttons"}
        />
        <TabItem
          title="Modals"
          onClick={() => setSelectedTab("modals")}
          isSelected={selectedTab === "modals"}
        />
        <TabItem
          title="Transitions"
          onClick={() => setSelectedTab("transitions")}
          isSelected={selectedTab === "transitions"}
        />
      </AnimateSharedLayout>
    </Tabs>
  );
}
