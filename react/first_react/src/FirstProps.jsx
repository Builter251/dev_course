import React from 'react';

const FirstProps = (props) => {
    const {name, color} = props;
    return (
        <div>
            Hello, My name is {name}
            <br/>
            My favorite color is {color}
        </div>
    );
};

export default FirstProps;