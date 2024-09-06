import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const fetchTodo = () => {
    return fetch('http://localhost:4000/api/todo')
        .then((response) => response.json());
};

const addItem = async (newItem) => {
    const response = await axios.post('http://localhost:4000/api/add', newItem);
    return response.data;
};

// 1. Todo 삭제 API 호출 함수 추가
const deleteTodo = async (todoId) => {
    const response = await axios.delete(`http://localhost:4000/api/todo/${todoId}`);
    return response.data;
};

const TodoFetchingNode = () => {
    const queryClient = useQueryClient();
    const { data, error, isLoading } = useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodo,
    });

    const updateTodoStatus = async (todo) => {
        const response = await axios.put(`http://localhost:4000/api/todo/${todo.id}`, {status: !todo.status});
        return response.data;
    };

    const addItemMutaion = useMutation({
        mutationFn: addItem,
        onSuccess: () => {
            queryClient.invalidateQueries(["todos"]);
        },
        onError: (error) => {
            console.log("Error: ", error);
        },
    });

    const updateTodoMutation = useMutation({
        mutationFn: updateTodoStatus,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey:["todos"]});
        },
        onError: (error) => {
            console.log("Error: ", error);
        },
    });

    // 2. 삭제 Mutation 훅 추가
    const deleteTodoMutation = useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["todos"]});
        },
        onError: (error) => {
            console.log("Error: ", error);
        },
    });

    function changeHandler(todo) {
        updateTodoMutation.mutate(todo);
    }

    // 3. 삭제 핸들러 추가
    function deleteHandler(todoId) {
        deleteTodoMutation.mutate(todoId);
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    
    return (
        <div>
            <h3>To Do List</h3>
            {data && data.map((todo) => (
                <p key={todo.id}>
                    <input type="checkbox" checked={todo.status} onChange={() => changeHandler(todo)} />
                    {todo.text}
                    {/* 4. 삭제 버튼 추가 */}
                    <button onClick={() => deleteHandler(todo.id)}>삭제</button>
                </p>
            ))}
        </div>
    );
};

export default TodoFetchingNode;
