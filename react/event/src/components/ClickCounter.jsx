import React from 'react';
import { useState } from 'react';

const ClickCounter = ({ onIncrement }) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h4>{count}</h4>
            <button onClick={() => {
                setCount(count + 1)
                onIncrement();
            }
            }>증가</button>
        </div>
    );
};

export default ClickCounter;