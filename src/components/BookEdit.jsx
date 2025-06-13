import { useState } from 'react';
import { api } from '../Api';

const BookEdit = ({ book, onUpdate, onClose }) => {
    const [title, setTitle] = useState(book.title);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            alert('Vui lòng nhập tên sách');
            return;
        }

        try {
            const updatedBook = {
                ...book,
                title: title.trim()
            };

            const response = await api.updateBook(book.id, updatedBook);
            onUpdate(response.data);
        } catch (error) {
            console.error('Lỗi khi cập nhật sách:', error);
            alert('Có lỗi xảy ra khi cập nhật sách');
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h3>Chỉnh Sửa Sách</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="editTitle">Tên sách</label>
                        <input
                            id="editTitle"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Nhập tên sách..."
                            required
                        />
                    </div>
                    <div className="modal-actions">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={onClose}
                        >
                            Hủy
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Cập Nhật
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookEdit;