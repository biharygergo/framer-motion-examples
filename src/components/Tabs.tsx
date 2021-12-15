import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";

const Tabs = styled.div`
  display: flex;
  width: 100%;
  background: #ECEEF1;
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
export default function TabsComponent(props: {
  setSelectedTab: (tab: string) => void;
  selectedTab: string;
}) {
  const { setSelectedTab, selectedTab } = props;
  return (
    <Tabs>
      <AnimateSharedLayout>
        <TabSelectorButton onClick={() => setSelectedTab("buttons")}>
          Buttons
          {selectedTab === "buttons" && <TabUnderLine layoutId="underline" />}
        </TabSelectorButton>
        <TabSelectorButton onClick={() => setSelectedTab("modals")}>
          Modals
          {selectedTab === "modals" && <TabUnderLine layoutId="underline" />}
        </TabSelectorButton>
        <TabSelectorButton onClick={() => setSelectedTab("transitions")}>
          Transitions
          {selectedTab === "transitions" && (
            <TabUnderLine layoutId="underline" />
          )}
        </TabSelectorButton>
      </AnimateSharedLayout>
    </Tabs>
  );
}
