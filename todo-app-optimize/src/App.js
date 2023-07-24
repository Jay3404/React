import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useCallback, useReducer, useRef, useState } from "react";

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

function reducer(todos, action) {
  // eslint-disable-next-line default-case
  switch(action.type) {
    // {type: 'INSERT', todo: {id: 1, text: react, checked: true/false}}
    case 'INSERT':
      return todos.concat(action.todo);
    // {type: 'REMOVE', id: 2}
    case 'REMOVE':
     return todos.filter(todo => todo.id !== action.id);
    // {type: 'TOGGLE', id: 3}
    case "TOGGLE":
      return todos.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked} : todo);
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, undefined, bulkTodos);

  // todos의 고유한 id를 생성하기 위한 useRef
  const nextId = useRef(2501);

  // todoInsert에서 새로운 todo추가 하는 메소드
  const addTodos = useCallback((text) => {
    const todo = {
      id : nextId.current,
      text: text,
      checked: false
    }

    // dispatch로 액션을 실행시킨다.
    dispatch({type: 'INSERT', todo: todo});

    nextId.current += 1;
  }, []);

  // 일정 지우는 메소드
  const removeTodos = useCallback((id) => {
    // dispatch로 액션을 실행시킨다.
    dispatch({type: 'REMOVE', id: id})

  }, []);

  // checkbox 이벤트 발생 시 checked 변경 메소드
  const checkedTodos = useCallback((id) => {

    // dispatch로 액션을 실행시킨다.
    dispatch({type: 'TOGGLE', id: id})

  }, []);

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
