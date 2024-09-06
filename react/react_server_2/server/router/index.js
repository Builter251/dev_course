// 기존 코드
const express = require('express');
const router = express.Router();

const todoList = [
    { id: 1725608236561, text: "Learn JavaScript", status: false },
    { id: 1725608241052, text: "Learn React", status: false },
    { id: 1725608250813, text: "Learn Redux", status: true },
];

// 새로운 항목 추가
router.post('/api/add', (request, response) => {
    console.log(todoList.length);
    console.log(request.body.text);
    const newItem = {
        id: Date.now(),
        text: request.body.text,
        status: false,
    };
    todoList.push(newItem);
    response.send(newItem);
});

// 전체 Todo 목록 조회
router.get('/api/todo', (request, response) => {
    response.json(todoList);
});

// 특정 Todo 상태 변경
router.put('/api/todo/:id', (request, response) => {
    const id = parseInt(request.params.id, 10);
    const { status } = request.body;

    const todoIndex = todoList.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
        response.status(404).send("Todo not found");
        return;
    }

    todoList[todoIndex].status = status;
    response.send(todoList[todoIndex]);
});

// 1. 삭제 기능 추가
router.delete('/api/todo/:id', (request, response) => {
    const id = parseInt(request.params.id, 10);

    const todoIndex = todoList.findIndex((todo) => todo.id === id);

    if (todoIndex === -1) {
        response.status(404).send("Todo not found");
        return;
    }

    // 2. todoList에서 해당 항목 삭제
    const deletedTodo = todoList.splice(todoIndex, 1);

    // 3. 삭제된 항목 반환
    response.send(deletedTodo[0]);
});


module.exports = router;
