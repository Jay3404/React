import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const AritcleItem = ({id}) => {
    // style을 변수로 정의하고 inline style로 지정
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    };

    return (
        <li>
            <NavLink to={`/articles/${id}`} style={({isActive}) => (
                isActive ? activeStyle : undefined
            )}>
                게시글 {id}
            </NavLink>
        </li>
    )
}

const Article = () => {
  return (
    <div>
        <h1>Articles</h1>
        <div>
            {/* Outlet: 중첩된 Route를 표출해주는 컴포넌트 */}
            <AritcleItem id={1}></AritcleItem>
            <AritcleItem id={2}></AritcleItem>
            <AritcleItem id={3}></AritcleItem>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Article