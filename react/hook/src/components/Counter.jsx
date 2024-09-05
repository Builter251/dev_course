import React from 'react';
import { useReducer } from 'react';
import countReducer from './countReducer';

const Counter = () => {
    const [state, dispatch] = useReducer(countReducer, 0);

    function numberIncrement() {
        dispatch({ type: 'INCREMENT' });
    }

    function numberDecrement() {
        dispatch({ type: 'DECREMENT' });
    }

    return (
        <div>
            <p>현재 카운터 값은 <b>{state}</b> 입니다.</p>
            <button onClick={numberIncrement}>+1</button>
            <button onClick={numberDecrement}>-1</button>
        </div>
    );
};


export default Counter;