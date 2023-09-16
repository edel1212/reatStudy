import { useState, useEffect } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  // Todo 목록
  const [todos, setTodos] = useState([]);

  const onChage = (e) => setTodo(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    if (!todo) return;
    // ❌  `todos.push(todo)` 리엑트는 이런식으로 사용하지 않음!! 재랜더링이 안됨
    // 💬 중요! 바뀌는 State는 항상 새로운 값이어야함!! 그렇기에 새로운 값 + 이전 Array를 넣어주자
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };
  return (
    <div>
      {todos}
      <h1>My Todos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChage}
          type="text"
          placeholder="Write Your todo"
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default TodoList;
