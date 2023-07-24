import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {useEffect} from 'react'

const MyPage = () => {
    const isLogin = false;

    const navi = useNavigate();

    const goLogin = () => {
        navi('/login');
    }; 

    useEffect(() => {
        if (!isLogin) {
            goLogin();
        }
    }, []);

  return (
    <div>MyPage</div>
  );
};

export default MyPage;