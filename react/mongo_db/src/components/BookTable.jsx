import React, { useEffect, useState } from 'react';

const BookTable = () => {
    const [books, setBooks] = useState([]);

    // 서버에서 책 데이터를 불러오는 함수
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://127.0.0.1:4000/books'); // 서버의 API 경로
                if (!response.ok) {
                    throw new Error('데이터를 불러오는 중 오류 발생');
                }
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('데이터를 불러오는 중 오류 발생:', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div>
            <h1>책 목록</h1>
            <table>
                <thead>
                    <tr>
                        <th>책 ID</th>
                        <th>책 이름</th>
                        <th>출판사</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.bookid}>
                            <td>{book.bookid}</td>
                            <td>{book.bookname}</td>
                            <td>{book.publisher}</td>
                            <td>{book.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookTable;
