import React, { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import styled from "styled-components";

const Drawer = styled(motion.div)`
  position: absolute;
  bottom: -1px;
  left: calc(50vw - 200px);
  width: 400px;
  height: 600px;
  background: white;
  border-radius: 6px 6px 0 0;
  box-shadow: rgb(5 18 37 / 24%) -0.5px 0px 5px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
  overflow: hidden;
`;

const ImageGridItem = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageGridItemPlaceholder = styled(motion.div)`
  background: lightgray;
  opacity: 0.6;
  width: 100%;
  height: 100%;
`;

const ImagePlaceholderGrid = styled.div`
  width: 80%;
  height: 300px;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const ImagePlaceholder = styled.div`
  box-shadow: rgb(5 18 37 / 24%) -0.5px 0px 5px 0px;
  height: 100%;
  width: 100%;
  cursor: pointer;

  transition: background 100ms linear, opacity 100ms linear;

  &:hover {
    background: lightgray;
    opacity: 0.6;
  }
`;

type GridItem = {
  imageId: string;
  src: string;
};

const placeholders = [
  { src: "https://picsum.photos/seed/first/200/300", imageId: "first" },
  { src: "https://picsum.photos/seed/second/200/300", imageId: "second" },
  { src: "https://picsum.photos/seed/third/200/300", imageId: "third" },
  { src: "https://picsum.photos/seed/fourth/200/300", imageId: "fourth" },
];

const initialGrid = {
  0: undefined,
  1: undefined,
  2: undefined,
  3: undefined,
};

export default function TransitionsTab() {
  const [gridItems, setGridItems] =
    useState<{ [id: number]: GridItem | undefined }>(initialGrid);
  const gridValues = Object.values(gridItems);
  const [editedIndex, setEditedIndex] = useState<number | undefined>(undefined);

  const isAlreadySelected = (id: string) =>
    gridValues.find((entry) => entry?.imageId === id);

  return (
    <AnimateSharedLayout type="crossfade">
      <ImagePlaceholderGrid>
        {gridValues.map((item, index) => (
          <ImagePlaceholder key={index} onClick={() => setEditedIndex(index)}>
            {item && <ImageGridItem src={item.src} layoutId={item.imageId} />}
          </ImagePlaceholder>
        ))}
      </ImagePlaceholderGrid>
      {editedIndex !== undefined && (
        <Drawer
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ bounce: 0.3, type: "spring" }}
        >
          {placeholders.map((placeholder, index) =>
            isAlreadySelected(placeholder.imageId) ? (
              <ImageGridItemPlaceholder layoutId={"used-" + index} />
            ) : (
              <ImageGridItem
                src={placeholder.src}
                layoutId={placeholder.imageId}
                onClick={() => {
                  setGridItems({ ...gridItems, [editedIndex]: placeholder });
                  setEditedIndex(undefined);
                }}
              />
            )
          )}
        </Drawer>
      )}
    </AnimateSharedLayout>
  );
}
