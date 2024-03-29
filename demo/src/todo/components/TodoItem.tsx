import React, { FC, useState } from "react";
import styled from "@emotion/styled";

export const Wrapper = styled.label({
  display: "flex",
  alignItems: "center",
  width: "100%",
  borderRadius: 4,
  marginBottom: 8,
  padding: 16,
  background: "white",
  fontWeight: "400",
  fontSize: 14,
  cursor: "pointer",
});

const Label = styled.span<{ completed: number | null }>(({ completed }) => ({
  textDecoration: completed ? "line-through" : "none",
  fontSize: 20,
  margin: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "flex-start",
  alignItems: "center",
}));

const Checkbox = styled.input({
  width: 16,
  height: 16,
  marginRight: 12,
});

const Delete = styled.div({
position: "relative",
fontSize: 22,
color: "red",
marginLeft: "auto",
marginRight: 0
});


export interface TodoItemProps {
  id: string;
  label: string;
  completed: number | null;
  onChange?: (id: string, checked: boolean) => void;
  onDelete?: (id: string) => void;
}

export const TodoItem: FC<TodoItemProps> = ({
  id,
  label,
  completed = null,
  onChange = () => {},
  onDelete = () => {}
}) => {
  const [showDelete, setShowDelete] = useState(false);
  return (
    <Wrapper onMouseEnter={() => setShowDelete(true)} onMouseLeave={() => setShowDelete(false)}>
      <Checkbox
        type="checkbox"
        id={id}
        checked={!!completed}
        onChange={(e) => onChange(id, e.target.checked)}
      />
      <Label completed={completed}>
        {label}
      </Label>
      { showDelete && <Delete onClick={() => onDelete(id)}>&times;</Delete> }
    </Wrapper>
  );
};
