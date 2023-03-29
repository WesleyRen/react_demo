import styled from "@emotion/styled";
import React, { FC, useRef, useState } from "react";
import { Item } from "./Item";
import { SafelyRenderChildren } from "./SafelyRenderChildren";

const ScrollWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  width: 100%;
  height: 500px;
  overflow: auto;
`;

const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

export interface ListProps {
  items: string[];
}

export const List: FC<ListProps> = ({ items }) => {
  const itemHeight = 30; // get it from 
  const [itemsStartIdx, setItemStartIdx] = useState(0);
  const scrollRef = useRef(null);

  // Not to use scrollTop as a state, since that will change with every scroll. We really only care about items showing.
  // This can be further optimized by having some cushions on top and bottom, and we only update start index when we
  // are out of the cushioned windows, so that local scrolls won't cause re-render.
  const handleScroll = (event: any) => {
    const scrollTop = (event?.target as HTMLElement).scrollTop || 0;
    const newItemStartIdx = Math.floor(scrollTop / itemHeight);
    if (newItemStartIdx !== itemsStartIdx) {
      setItemStartIdx(newItemStartIdx);
    }
}


  const visibleHeight = 500; // ScrollWrapper div height.
  const totalHeight = items.length * itemHeight;

  const topBoxHeight = itemsStartIdx * itemHeight;
  const itemsEndIdx = Math.min(items.length, itemsStartIdx + Math.ceil(visibleHeight / itemHeight) + 1);
  const middleBoxHeight = (itemsEndIdx - itemsStartIdx) * itemHeight;
  const bottomBoxHeight = Math.max(0, totalHeight - topBoxHeight - middleBoxHeight);
  const itemsVisible = items.slice(itemsStartIdx, itemsEndIdx);
  console.log("last item: ", items[items.length - 1]); // funny, it's an empty string.

  return (
    <ScrollWrapper ref={scrollRef} onScroll={handleScroll}>
      <div style={{height: topBoxHeight}}/>
      <ListWrapper>
        {/**
          * Note: `SafelyRenderChildren` should NOT be removed while solving
          * this interview. This prevents rendering too many list items and
          * potentially crashing the web page. This also enforces an artificial
          * limit (5,000) to the amount of children that can be rendered at one
          * time during virtualization.
        */}
        <SafelyRenderChildren>
          {itemsVisible.map((word) => <Item key={word}>{word}</Item>)}
        </SafelyRenderChildren>
      </ListWrapper>
      <div style={{height: bottomBoxHeight}}/>
    </ScrollWrapper>
  );
};
