import { useState } from "react";
import { FaTrashCan } from 'react-icons/fa6';
import "./App.css";

function App() {
  const title = "TO-DO APP";
  const subtitle = "오늘 뭐하지 앱";
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setTodo(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodo("");
    setTodos((todos) => [todo, ...todos]);
  }
  function handleRemove(id) {
    setTodos(todos.filter((todo, i) => i !== id));
  }
  return (
    <>
      <header className="site-header text-center py-1">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </header>
      <form id="todoForm" onSubmit={handleSubmit}>
        <fieldset>
          <legend className="d-none">할일</legend>
          <div class="d-flex justify-center mt-1">
            <label>할일</label>
            <input
              type="text"
              id="todo_input"
              value={todo}
              onChange={handleChange}
            />
            <button type="submit" className="ml-1">
              등록
            </button>
          </div>
        </fieldset>
      </form>
      <hr />
      <ul className="todos text-center">
        {todos.map((todo, i) => (
          <li key={i}>
            {i} : {todo}{" "}
            <FaTrashCan onClick={() => handleRemove(i)} className="del">삭제</FaTrashCan>
          </li>
        ))}
      </ul>
      {/* <p>{todos.length === 0 && '등록된 할 일이 없습니다.'}</p> */}
    </>
  );
}

export default App;
