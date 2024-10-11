import React from "react";
import TodoCard from "./TodoCard";
export default function TodoList(props) {
    const {todos,handleDeleate,handleEdit}=props;

  return (
    <div>
      <ul>
        {todos.map((todo, todoIndex) => (
         
          <TodoCard key={todoIndex} todos={todo} handleDeleate={handleDeleate} index={todoIndex}handleEdit={handleEdit}/>
        ))}
      </ul>
    </div>
  );
}
