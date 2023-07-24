import React from 'react';
// + 아이콘 임포트
import { MdAdd } from "react-icons/md";
import '../scss/TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className='TodoInsert'>
        <input type="text" placeholder='일정을 입력하세요' />
        <button type='submit'>
            <MdAdd></MdAdd>
        </button>
    </form>
  )
}

export default TodoInsert