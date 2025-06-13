import axios from 'axios';

const API_URL = 'http://localhost:3001/books';

export const api = {
    // Lấy tất cả sách
    getBooks: () => axios.get(API_URL),

    // Lấy sách theo ID
    getBook: (id) => axios.get(`${API_URL}/${id}`),

    // Tạo sách mới
    createBook: (book) => axios.post(API_URL, book),

    // Cập nhật sách
    updateBook: (id, book) => axios.put(`${API_URL}/${id}`, book),

    // Xóa sách
    deleteBook: (id) => axios.delete(`${API_URL}/${id}`)
};