import React from 'react';

const UserID = (props) => {
    function updateValue(e) {
        props.onAddId(e.target.value);
    }
    return (
        <div>
            <label htmlFor="userID">ID:</label>
            <input type="text" name="" id="userID" onChange={updateValue}/>
        </div>
    );
};

export default UserID;