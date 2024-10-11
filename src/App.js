import { useEffect, useState } from "react";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, settodoValue] = useState("");

  useEffect(()=>{
    const getTodos= localStorage.getItem('todos');
    setTodos(JSON.parse(getTodos));
   },[])

  function handleAddtodo(todoValue) {
    const newTodoList = [...todos, todoValue];
    setTodos(newTodoList);
    localStorage.setItem("todos",JSON.stringify(newTodoList))
  }
  
  const handleDeleate = (index) => {
    const newTodoList = todos.filter((todos, todoskey) => {
      return todoskey != index;
    });
    setTodos(newTodoList)
    localStorage.setItem("todos",JSON.stringify(newTodoList))

  };

  const handleEdit = (index) => {
    const EditTodo = todos[index];
    settodoValue(EditTodo)
    handleDeleate(index);
  };

  return (
    <>
      <TodoInput handleAddtodo={handleAddtodo} todoValue={todoValue} settodoValue={settodoValue}/>
      <TodoList todos={todos} handleDeleate={handleDeleate} handleEdit={handleEdit}/>
    </>
  );
}

export default App;
