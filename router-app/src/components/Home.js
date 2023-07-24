import React from 'react';
// react-router-dom의 Link 컴포넌트 임포트
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <ul>
            <li> 
                {/* 리액트에서는 a태그 대신 Link 컴포넌트를 사용한다. to 속성을 이용해서 이동할 링크를 지정한다. */}
                <Link to='/introduce'>Introduce</Link>
            </li>
            <li>
                <Link to='/profile/yang'>Yang's Profile</Link>
            </li>
            <li>
                <Link to='/profile/go'>Go's Profile</Link>
            </li>
            <li>
                <Link to='/profile/void'>Null Profile</Link>
            </li>
            <li>
                <Link to='/articles'>Articles</Link>
            </li>
        </ul>
    </div>
  );
};

export default Home;