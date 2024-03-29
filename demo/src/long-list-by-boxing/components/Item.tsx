import styled from '@emotion/styled'
import React, { FC, ReactNode } from 'react'

const Wrapper = styled.li`
  height: 30px;
  border-bottom: 1px solid black;
  padding-left: 8px;
  font-size: 18px;
  display: flex;
  align-items: center;
  font-family: monospace;
`;

export interface ItemProps {
  children: ReactNode;
}

export const Item: FC<ItemProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}