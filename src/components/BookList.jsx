import { useState, useEffect } from 'react';
import { api } from '../Api';
import BookCreate from './BookCreate';
import BookEdit from './BookEdit';
import BookShow from './BookShow';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [editingBook, setEditingBook] = useState(null);
    const [showingBook, setShowingBook] = useState(null);

    // Lấy danh sách sách
    const fetchBooks = async () => {
        try {
            const response = await api.getBooks();
            setBooks(response.data);
        } catch (error) {
            console.error('Lỗi khi lấy danh sách sách:', error);
        }
    };

    // Xóa sách
    const handleDelete = async (id) => {
        if (window.confirm('Bạn có chắc muốn xóa sách này?')) {
            try {
                await api.deleteBook(id);
                setBooks(books.filter(book => book.id !== id));
            } catch (error) {
                console.error('Lỗi khi xóa sách:', error);
            }
        }
    };

    // Thêm sách mới
    const handleCreate = (newBook) => {
        setBooks([...books, newBook]);
    };

    // Cập nhật sách
    const handleUpdate = (updatedBook) => {
        setBooks(books.map(book =>
            book.id === updatedBook.id ? updatedBook : book
        ));
        setEditingBook(null);
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div>
            <div className="book-grid">
                {books.map(book => (
                    <div key={book.id} className="book-card">
                        <button
                            className="delete-btn"
                            onClick={() => handleDelete(book.id)}
                            title="Xóa sách"
                        >
                            ×
                        </button>
                        <img
                            src={`https://picsum.photos/seed/${book.id}/200`}
                            alt="book"
                            className="book-image"
                            onClick={() => setShowingBook(book)}
                            style={{ cursor: 'pointer' }}
                        />
                        <h3 className="book-title">{book.title}</h3>
                        <div className="book-actions">
                            <button
                                className="btn btn-secondary"
                                onClick={() => setEditingBook(book)}
                            >
                                Sửa
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={() => setShowingBook(book)}
                            >
                                Xem
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <BookCreate onCreate={handleCreate} />

            {editingBook && (
                <BookEdit
                    book={editingBook}
                    onUpdate={handleUpdate}
                    onClose={() => setEditingBook(null)}
                />
            )}

            {showingBook && (
                <BookShow
                    book={showingBook}
                    onClose={() => setShowingBook(null)}
                />
            )}
        </div>
    );
};

export default BookList;