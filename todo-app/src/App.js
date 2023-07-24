import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <TodoTemplate>
        <TodoInsert></TodoInsert>
        <TodoList></TodoList>
      </TodoTemplate>
    </>
  );
}

export default App;
