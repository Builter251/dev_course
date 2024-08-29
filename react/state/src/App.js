import './App.css';
import ClickCountComponent from './components/ClickCountComponent';
import LoginComponent from './components/LoginComponent';
import Spread from './components/Spread';
import HiToHello from './components/HiToHello';
import UserPW from './components/UserPW';
import UserID from './components/UserID';
import { useState } from 'react';

function App() {
  const ID = 'admin';
  const PW = '1234';
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  function addIdHandler(id) {
    setId(id);
  }
  function addPwHandler(pw) {
    setPw(pw);
  }

  function handleLogin() {
    // 기존 id, pw를 비교하여 일치하면 로그인 성공, 아니면 실패
    if(id === 'admin' && pw === '1234') {
      alert('로그인 성공');
    } else {
      alert('로그인 실패');
    }
  }

  return (
    <div >
      <ClickCountComponent  />
      <LoginComponent />
      <Spread />
      <HiToHello />
      <hr />
      <UserID onAddId={addIdHandler} />
      <UserPW onAddPw={addPwHandler} />
      <button onClick={handleLogin}>로그인</button>
      <hr />
    </div>
  );
  
}

export default App;
