import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    //useNavigate: Link 컴포넌트 없이 링크 이동
    const navi = useNavigate();

    //뒤로가기 버튼 눌렀을 때
    const goBack = () => {
        //이전 페이지로 이동
        navi(-1);
    }

    //Articles 버튼 눌렀을 때
    const goArticles = () => {
        navi('/articles');
    }

    const movePage = (pageName) => {
        navi(pageName);
    }

  return (
    <div>
        <header style={{background: "lightgray", padding: 16, fontSize: 24}}>
            Header
            <button type='button' onClick={goBack}>뒤로가기</button>
            <button type='button' onClick={() => movePage('/introduce')}>Introduce</button>
            <button type='button' onClick={() => movePage('/profile/go')}>Go's Profile</button>
            <button type='button' onClick={() => movePage('/articles')}>Articles</button>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
    </div>
  );
};

export default Layout;