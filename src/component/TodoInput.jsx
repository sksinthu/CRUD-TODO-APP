import React, { useState } from "react";

export default function TodoInput(props) {
  const { handleAddtodo,todoValue ,settodoValue} = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <input
        value={todoValue}
        type="text"
        name="input todo"
        placeholder="Enter your task..."
        onChange={(e) => {
          settodoValue(e.target.value);
        }}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />
      <button
        onClick={() => {
          handleAddtodo(todoValue);
          settodoValue("");
        }}
        style={{
          padding: "10px 15px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </div>
  );
}
