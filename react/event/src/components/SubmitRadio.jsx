import React from 'react';
import { useState } from 'react';

const SubmitRadio = () => {
    const [value, setValue] = useState('');


    return (
        <div>
            <h3>라디오 버튼의 {value}를 출력</h3>
            <input id='seoul' type="radio" name="radio" value="서울" onChange={(e) => setValue(e.target.value)} />
            <label htmlFor='seoul'>서울</label>
            <input id='daejeon' type="radio" name="radio" value="대전" onChange={(e) => setValue(e.target.value)} />
            <label htmlFor='daejeon'>대전</label>
            <input id='daegu' type="radio" name="radio" value="대구" onChange={(e) => setValue(e.target.value)} />
            <label htmlFor='daegu'>대구</label>
            <input id="busan" type="radio" name="radio" value="부산" onChange={(e) => setValue(e.target.value)} />
            <label htmlFor='busan'>부산</label>
            <button onClick={() => alert(value)}>전송</button>
        </div>
    );
};

export default SubmitRadio;