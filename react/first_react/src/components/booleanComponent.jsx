import React from 'react';

const booleanComponent = ({study}) => {
    const message = study ? 'I am studying' : 'I am not studying';
    
    return (
        <div>
            {message}
        </div>
    );
};

export default booleanComponent;