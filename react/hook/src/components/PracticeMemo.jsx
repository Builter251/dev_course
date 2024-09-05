import React, { useCallback } from 'react';
import { useState } from 'react';
import ChildMemo from './ChildMemo';

const PracticeMemo = () => {
    const [count, setCount] = useState(0);

    const updateHandler = useCallback(() => {
        console.log('update');
    },[]);

    return (
        <div>
            <input id='whatthe' type="number" onChange={(e) => setCount(e.target.value)} value={count} />
            <ChildMemo update={updateHandler} />
        </div>
    );
};

export default PracticeMemo;