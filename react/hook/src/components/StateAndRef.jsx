
import React from 'react';
import { useRef, useState } from 'react';

const StateAndRef = () => {
    const [valueState, setValueState] = useState(0);
    const valueRef = useRef(0);

    
    const onClickState = () => {
        setValueState(valueState + 1);
    }

    const onClickRef = () => {
        valueRef.current = valueRef.current + 1;
        console.log("valueRef.current: ", valueRef.current);
    }



    return (
        <div>
            <h2>useState VS useRef</h2>
            <h3>State 값: {valueState}</h3>
            <h3>Ref 값: {valueRef.current}</h3>

            <button onClick={onClickState}>State 값 변경</button>
            <button onClick={onClickRef}>Ref 값 변경</button>

            
        </div>
    );
};

export default StateAndRef;