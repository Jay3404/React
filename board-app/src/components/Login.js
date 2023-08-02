import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

const Login = ({ setIsLogin }) => {
    const navi = useNavigate();

    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');

    const changeUserId = useCallback((e) => {
        setUserId(() => e.target.value);
    }, []);

    const changeUserPw = useCallback((e) => {
        setUserPw(() => e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        e.preventDefault();

        const login = async () => {
            const user = {
                userId: userId,
                userPw: userPw,
            };

            try {
                const response = await axios.post('http://localhost:9090/user/login', user);

                console.log(response);

                if (response.data && response.data.item.token) {
                    alert(`${response.data.item.userName}님, 반갑습니다`);
                    sessionStorage.setItem("ACCESS_TOKEN", response.data.item.token);
                    setIsLogin(true);
                    navi('/');
                }

            } catch (e) {
                console.log(e);
                if (e.response.data.errorMessage === 'id not exist') {
                    alert("아이디가 존재하지 않습니다.");
                    return;
                }

                if (e.response.data.errorMessage === 'wrong pw') {
                    alert("아이디가 존재하지 않습니다.");
                    return;
                }
            }
        }

        login();
    }, [navi, userId, userPw]);


    return (
        <div className="form-wrapper">
            <form id="loginForm" onSubmit={onSubmit}>
                <h3>로그인</h3>
                <div className="label-wrapper">
                    <label htmlFor="userId">아이디</label>
                </div>
                <input type="text" id="userId" name="userId" required onChange={changeUserId} />
                <div className="label-wrapper">
                    <label htmlFor="userPw">비밀번호</label>
                </div>
                <input type="password" id="userPw" name="userPw" required onChange={changeUserPw} />
                <div style={{ display: 'block', margin: '20px auto' }}>
                    <button type="submit" id="btnLogin">로그인</button>
                </div>
            </form>
        </div>
    )
}

export default Login