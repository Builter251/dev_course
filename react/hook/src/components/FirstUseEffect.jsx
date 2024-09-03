import React from 'react';
import { useState, useEffect } from 'react';

const FirstUseEffect = () => {
    const [names, setNames] = useState(() => heavyWork());
    const [input, setInput] = useState('');

    function heavyWork() {
        const names = [];
        for (let i = 0; i < 1000; i++) {
            names.push(i);
        }
        return names;
    }

    useEffect(() => {
        console.log('렌더링이 완료되었습니다!');
    }, []);

   



    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => setNames([...names, input])}>추가</button>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FirstUseEffect;