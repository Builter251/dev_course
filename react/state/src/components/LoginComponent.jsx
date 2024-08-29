import React from 'react';
import { useState } from 'react';

const LoginComponent = () => {
    const [loginState, setLoginState] = useState("안녕하세요 비회원님!");
    function login() {
        setLoginState("어서오세요 회원님!");
    }
    function logout() {
        setLoginState("안녕히가세요 회원님!");
    }
    return (
        <div>
            <h1>{loginState}</h1>
            <button onClick={login}>로그인</button>
            <button onClick={logout}>로그아웃</button>
        </div>
    );
};

export default LoginComponent;