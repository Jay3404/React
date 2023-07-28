import React from 'react';
import TodoListItem from './TodoListItem';
import '../scss/TodoList.scss';

const TodoList = ({todos, removeTodos, checkedTodos}) => {
  return (
    <div className='TodoList'>
        {/* map 메소드로 todos 배열의 내용을 하나씩 TodoListItem의 props로 보내기
            key는 todos의 id값으로 */}
          {todos && todos.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} removeTodos={removeTodos} checkedTodos={checkedTodos}></TodoListItem>
          ))}
    </div>
  )
}

export default TodoList