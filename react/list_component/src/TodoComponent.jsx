import React from 'react';

const TodoComponent = (props) => {
    const { taskName, finished } = props;
    return (
        <div>

            <h1>{taskName}</h1>
            <h2>{finished ? "완료" : "미완료"}</h2>
            <hr />

        </div>
    );
};

export default TodoComponent;