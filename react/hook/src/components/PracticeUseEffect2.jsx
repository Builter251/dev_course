import React from 'react';
import { useState, useEffect } from 'react';

const PracticeUseEffect2 = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        console.log(`Before: ${count}`);
        setCount(count + 1);
        console.log(`After: ${count}`);
    }

    useEffect(() => {
        console.log(`count updating: ${count}`);
    }, [count]);

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={increment}>증가</button>
        </div>
    );
};

export default PracticeUseEffect2;