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
  const [scrollTop, setScrollTop] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = (event: any) => {
    setScrollTop((event?.target as HTMLElement).scrollTop);
}


  const visibleHeight = 500; // ScrollWrapper div height.
  const totalHeight = items.length * itemHeight;

  const itemsStartIdx = Math.floor(scrollTop / itemHeight);
  const topBoxHeight = itemsStartIdx * itemHeight;
  const itemsEndIdx = Math.min(items.length - 1, itemsStartIdx + Math.ceil(visibleHeight / itemHeight) + 1);
  const middleBoxHeight = (itemsEndIdx - itemsStartIdx) * itemHeight;
  const bottomBoxHeight = Math.max(0, totalHeight - topBoxHeight - middleBoxHeight);
  const itemsVisible = items.slice(itemsStartIdx, itemsEndIdx);
  // console.log("last item: ", items[items.length - 1]); // funny, it's an empty string.

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
