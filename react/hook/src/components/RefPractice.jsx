import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
const RefPractice = () => {
    const [name, setName] = useState();
    const[age, setAge] = useState();

    const nameRef = useRef();
    const ageRef = useRef();
    return (
        <div>
            <label htmlFor="nameText">이름: </label>
            <input ref={nameRef} type="text" name="nameText" id="nameText" onChange={(e)=>setName(nameRef.current.value)} />
            <label htmlFor="ageText">나이: </label>
            <input ref={ageRef}type="text" name="ageText" id="ageText" onChange={(e)=>setAge(ageRef.current.value)} />
        </div>
    );
};

export default RefPractice;