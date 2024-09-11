const express = require("express");
const connectDB = require('./mongoConn');
const cors = require("cors");
const app = express();
const books = require("./router/books")

const PORT = 4000;

// DB 연결되고나서 서버 시작?
// 
connectDB()
    .then(() => {
        console.log("MongoDB 연결 성공");

        app.use(express.json());
        app.use(cors());
        
        app.listen(PORT, () => {
            console.log("Server Running at http://127.0.0.1:4000");
        });

        app.use("/books", books);
    })
    .catch((err) => { // 연결 실패 시 프로세스 종료
        console.error("MongoDB 연결 오류:", err);
        process.exit(1);
    });