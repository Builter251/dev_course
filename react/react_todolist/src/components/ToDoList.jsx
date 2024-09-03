import React from 'react';

const TodoList = ({ todos, editTodo, deleteTodo, toggleComplete }) => {
    const handleDragEnd = (fromIndex, toIndex) => {
        const updatedTodos = [...todos];
        const [movedItem] = updatedTodos.splice(fromIndex, 1);
        updatedTodos.splice(toIndex, 0, movedItem);
        editTodo(updatedTodos);
    };

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index} draggable onDragEnd={(e) => handleDragEnd(index, e.currentTarget.dataset.index)}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleComplete(index)}
                    />
                    <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        {todo.text}
                    </span>
                    {todo.alarm && (
                        <span>
                            | 알람: {new Date(todo.alarm).toLocaleString()}
                        </span>
                    )}
                    {todo.tags && (
                        <span>
                            | 태그: {todo.tags.join(', ')}
                        </span>
                    )}
                    <button onClick={() => editTodo(index, { ...todo, text: '수정된 할 일' })}>
                        수정
                    </button>
                    <button onClick={() => deleteTodo(index)}>삭제</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
