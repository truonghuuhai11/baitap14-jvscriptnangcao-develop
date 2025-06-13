import { useState } from 'react';
import { api } from '../Api';

const BookCreate = ({ onCreate }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            alert('Vui lòng nhập tên sách');
            return;
        }

        try {
            const newBook = {
                title: title.trim()
            };

            const response = await api.createBook(newBook);
            onCreate(response.data);

            // Reset form
            setTitle('');
        } catch (error) {
            console.error('Lỗi khi tạo sách:', error);
            alert('Có lỗi xảy ra khi thêm sách');
        }
    };

    return (
        <div className="add-book-section">
            <h2>Thêm Sách Mới</h2>
            <form onSubmit={handleSubmit} className="add-book-form">
                <div className="form-group">
                    <label htmlFor="title">Tên sách</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Nhập tên sách..."
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Thêm Sách
                </button>
            </form>
        </div>
    );
};

export default BookCreate;