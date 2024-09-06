import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { PacmanLoader } from 'react-spinners';

const TodoFetching = () => {
    const fetchTodo = () => {
        return fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                return json; // 데이터를 반환합니다.
            });
    };

    const { data, error, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: fetchTodo,
    });


    if (isLoading) {
        return <PacmanLoader className='spinner' />;
    }

    return (
        <div>
            {error && <p>{error.message}</p>}
            {data && (
                <div>
                    <h1>사용자 정보</h1>
                    { data.map((user) => (
                        <div key={user.id}>
                            <p>Name: {user.name} </p>
                            <p>Email: {user.email} </p>
                            <p>Phone: {user.phone} </p>
                            <hr />
                        </div>
                    ))
                    }
                </div>
            )}
        </div>
    );
};

export default TodoFetching;