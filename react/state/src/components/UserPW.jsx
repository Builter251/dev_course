import React from 'react';

const UserPW = (props) => {
    function updateValue(e) {
        props.onAddPw(e.target.value);
    }

    return (
        <div>
            <label htmlFor="userPW">PW:</label>
            <input type="password"  id="userPW" onChange={updateValue} />
        </div>
    );
};

export default UserPW;