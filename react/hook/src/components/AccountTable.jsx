import React from 'react';

function AccountTable({ accounts, dispatch }) {
    const handleDelete = (index) => {
        dispatch({ type: 'DELETE_ACCOUNT', index });
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Region</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {accounts.map((account, index) => (
                    <tr key={index}>
                        <td>{account.name}</td>
                        <td>{account.age}</td>
                        <td>{account.region}</td>
                        <td>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default AccountTable;
