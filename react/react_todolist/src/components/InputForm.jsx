import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');
    const [alarm, setAlarm] = useState('');
    const [tag, setTag] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') {
            setError('할 일을 입력해주세요.');
            return;
        }

        if (alarm && new Date(alarm) < new Date()) {
            setError('알람 시간은 현재 시간보다 이후여야 합니다.');
            return;
        }

        if (tag.split(' ').some(tag => tag.length > 10)) {
            setError('태그는 10자를 넘길 수 없습니다.');
            return;
        }

        addTodo({
            text,
            alarm,
            tags: tag.split(' ').filter(t => t.trim() !== ''),
            completed: false,
            alerted: false,
        });
        setText('');
        setAlarm('');
        setTag('');
        setError('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="inputTodo">할 일</label>
            <input
                type="text"
                id="inputTodo"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />

            <label htmlFor="inputAlarm">알람 시간(선택)</label>
            <input
                id="inputAlarm"
                type="datetime-local"
                value={alarm}
                onChange={(e) => setAlarm(e.target.value)}
            />

            <label htmlFor="inputTag">태그(선택)</label>
            <input
                id="inputTag"
                type="text"
                placeholder="띄어쓰기 구분"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
            />

            <button type="submit">추가</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
    );
};

export default TodoForm;
