import React from 'react';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

const addItem = async (newItem) => {
    const response = await axios.post('http://localhost:4000/api/add', newItem);
    return response.data;
};

const UseMutationEx = () => {
    const addItemMutation = useMutation({
        mutationFn: addItem,
        onSuccess: (result) => {
            console.log("Success: ", result);
        },
        onError: (error) => {
            console.log("Error: ", error);
        },
    });

    const sendData = () => {
        const newTodo = {text: "Learn Node.js"};
        addItemMutation.mutate(newTodo);
    };
    
    return (
        <div>
            <h1>할 일 추가</h1>
            <button onClick={sendData}>할 일 추가</button>
        </div>
    );
    };

export default UseMutationEx;