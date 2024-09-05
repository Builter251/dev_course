import { useEffect, useState, useCallback } from 'react';

const PracticeUseCallback = () => {
    const [count, setCount] = useState(0);

    const clickHandler = useCallback(() => {
        console.log('count', count);
    },[count]);

    useEffect(() => {
        console.log('useEffect');
    },[clickHandler]);

    
    return (
        <div>
            <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
            <button onClick={clickHandler}>Print Number</button>
        </div>
    );
};

export default PracticeUseCallback;