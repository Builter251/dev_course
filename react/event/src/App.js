import './App.css';
import { useState } from 'react';
import Cart from './components/Cart';
import SubmitRadio from './components/SubmitRadio';
import ClickCounter from './components/ClickCounter';

function App() {
  const [fontColor, setFontColor] = useState('black');
  const fontStyle = {
    color: fontColor
  }

  const [message, setMessage] = useState('잊혀져야 하는건가요');

  const [form, setForm] = useState({
    userName: '',
    userDesc: ''
  });

  const [form2, setForm2] = useState({
    title: '',
    color: ''
  });

  function onChangeHandler(e) {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    }
    setForm(nextForm);
    alert(e.target.value);
  }

  function onChangeHandler2(msg) {
    const nextForm2 = { ...form2 };
    nextForm2.title = msg;
    nextForm2.color = 'red';
    setForm2(nextForm2);
  }

  const [totalCount, setTotalCount] = useState(0);

  const handleIncrement = () => {
    setTotalCount(totalCount + 1);
  };


  return (
    <div>
      <h1>리액트 이벤트</h1>

      <h2>버튼 콘솔 출력</h2>
      <button onClick={() => console.log('버튼이 클릭되었습니다.')}>버튼</button>
      {/* 리액트는 왜 익명함수를 통해 이벤트 매개변수를 전달해야 할까? */}
      <h2>글자 크기 변경</h2>
      <p style={{ fontSize: "1rem" }}>안녕하세요</p>
      <button onClick={(e) => {
        const style = e.target.previousSibling.style;
        style.fontSize = '3rem';
      }}>키우기</button>

      <h2>글자색 바꾸기</h2>
      <p style={fontStyle}>안녕하세요</p>
      <button onClick={() => {
        setFontColor('red');
      }}>빨강</button>
      <button onClick={() => {
        setFontColor('green');
      }}>초록</button>
      <button onClick={() => {
        setFontColor('royalBlue');
      }}>파랑</button>

      <h2>onChange 실습</h2>
      <p>{message}</p>
      <input type="text" onChange={(e) => {
        setMessage(e.target.value);
      }}></input>
      <input type="text" onChange={(e) => {
        console.log(e.target.value);
      }}></input>

      <h2>onChange 실습2</h2>
      <h3>이름: {form.userName}</h3>
      <h3>한줄 소개: {form.userDesc}</h3>
      <input type="text" name='userName' onChange={onChangeHandler}></input>
      <input type="text" name='userDesc' onChange={onChangeHandler}></input>

      <h2>onChange 실습3</h2>
      <h3 style={{ color: form2.color }}>{form2.title}</h3>
      <input placeholder='내용을 입력하세요' type="text" name='title' onChange={(e) => onChangeHandler2(e.target.value)}></input>
      <button onClick={() => {
        alert(form2.title);
      }}>확인</button>

      <h2>onChange 실습4</h2>
      <Cart />

      <h2>Submit 이벤트</h2>
      <SubmitRadio />

      <h2>2개의 클릭 카운트와 총합</h2>
      <h2>Total Count: {totalCount}</h2>
      <ClickCounter onIncrement={handleIncrement} />
      <ClickCounter onIncrement={handleIncrement} />
    </div>
  );
}

export default App;
