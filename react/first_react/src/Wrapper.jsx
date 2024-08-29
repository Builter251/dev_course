import React from 'react';

const Wrapper = ({children}) => {
    const style = {
        border: '3px solid red',
        padding: '10px',
        margin: '10px',
    }
    return (
        <div style={style}>
            Children 값은{children} 입니다.
        </div>
    );
};

export default Wrapper;