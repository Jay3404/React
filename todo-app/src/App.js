import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useCallback, useRef, useState } from "react";

const bulkTodos = () => {
  const todoArray = [];
  for(let i = 1; i <= 2500; i++) {
    const todo = {
      id: i,
      text: `할 일 ${i}`,
      checked: false
    }

    todoArray.push(todo);
  }
  return todoArray;
}

function App() {
  const [todos, setTodos] = useState(bulkTodos);
  
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: 'react',
  //     checked: true
  //   },
  //   {
  //     id: 2,
  //     text: 'es6',
  //     checked: false
  //   },
  //   {
  //     id: 3,
  //     text: 'html/css',
  //     checked: false
  //   }
  // ]);

  // todos의 고유한 id를 생성하기 위한 useRef
  const nextId = useRef(4);

  // todoInsert에서 새로운 todo추가 하는 메소드
  const addTodos = useCallback((text) => {
    const todo = {
      id : nextId.current,
      text: text,
      checked: false
    }

    setTodos(todos.concat(todo));

    nextId.current += 1;
  }, [todos]);

  // 일정 지우는 메소드
  const removeTodos = useCallback((id) => {
    // filter 메소드로 id에 해당하는 todo 삭제
    setTodos(
      todos.filter((todo) => todo.id !== id)
      );

  }, [todos]);

  // checkbox 이벤트 발생 시 checked 변경 메소드
  const checkedTodos = useCallback((id) => {
    setTodos(
      // 배열.map() 메소드는 새로운 배열 리턴
      todos.map(
        // 매개변수로는 하나씩 순회하면서 사용할 변수명 원하는대로 지정
        // 매개변수 todo가 객체형태이기 때문에 리턴되는 값도 객체 형태
        // 스프레드 문법은 ...변수명
        // {...todo} => {
        //                id: 1,
        //                text: 'react',
        //                checked: true
        //              }
        // {...todo, checked: !todo.checked} => {
        //                id: 1,
        //                text: 'react',
        //                checked: false
        //              }
        // {...todo, checked: !todo.checked, aaa: 1} => {
        //                id: 1,
        //                text: 'react',
        //                checked: false
        //                aaa: 1
        //              }
        (todo) => (todo.id === id ? {...todo, checked: !todo.checked} : todo
      )));
  }, [todos]);

  return (
    <>
      <TodoTemplate>
        <TodoInsert addTodos={addTodos}></TodoInsert>
        {/* 자식 컴포넌트에서 이벤트가 발생했을 때, 부모 컴포넌트도 리렌더링 하려면 부모의 스테이트를 변경해야한다.
            부모의 스테이트를 자식에서 변경하는 방법은 부모 컴포넌트에 스테이트의 setter 메소드를 호출하는 메소드를 정의한 뒤,
            자식 컴포넌트에 props로 해당 메소드를 전달해서 자식컴포넌트에서 이벤트가 발생했을 때 props로 받아온 메소드를 호출 */}
        <TodoList todos={todos} removeTodos={removeTodos} checkedTodos={checkedTodos}></TodoList>
      </TodoTemplate>
    </>

  );
}

export default App;
