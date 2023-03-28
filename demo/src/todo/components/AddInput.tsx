import React, { FC, useState } from "react";
import styled from "@emotion/styled";

const Form = styled.form({
  width: "50%",
});

const Input = styled.input({
  width: "100%",
  padding: 8,
  outline: "none",
  borderRadius: 3,
  marginBottom: 8,
});

export interface AddInputProps {
  onAdd: (label: string) => void;
}

export const AddInput: FC<AddInputProps> = ({ onAdd }) => {
  const [input, setInput] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(input);
        setInput("");
      }}
    >
      <Input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Add a new todo item here"
      />
    </Form>
  );
};
