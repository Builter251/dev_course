import React from 'react';
import { MyContext } from '../context.js';
import { useContext } from 'react';

const ChildComponent = () => {
    const value = useContext(MyContext);

    return (
        <div>
            전달받은 데이터: {value}
        </div>
    );
};

export default ChildComponent;