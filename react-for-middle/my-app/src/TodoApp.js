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
      <hr />
      <ul>
        {/*** 💬 간단하게 처리가 가능함 내부 문자 "{}"안에 코드만 javascript로 인식 나머지는 jsx태그로 인식함!!
         *       `${}`를 사용할 필요가 없음 용하면 오히려 <li>테그를 문자로 인식하는 문제가 발생함    */}
        {todos.map((item, idx) => (
          // 👉 key를 설정해 주지 않으면 unique key 에러가 발생한다! - 하나하나의 같은 컴포넌트로 인식하기 때문에 구분하기 위해 필요함
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
