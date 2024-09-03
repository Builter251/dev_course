import React from 'react';
import { useEffect, useState } from 'react';

const InfinityRefresh = () => {
    const [count, setCount] = useState(0);
    const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
        setRenderCount(renderCount + 1);
        console.log("renderCount: ", renderCount);
    },[renderCount]);

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count+1)}>클릭</button>
        </div>
    );
};

export default InfinityRefresh;