import React, { useState } from 'react';

function AccountForm({ dispatch }) {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        region: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_ACCOUNT', payload: formData });
        setFormData({ name: '', age: '', region: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="region"
                placeholder="Region"
                value={formData.region}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Account</button>
        </form>
    );
}

export default AccountForm;
