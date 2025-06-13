const BookShow = ({ book, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal show-modal" onClick={(e) => e.stopPropagation()}>
                <img
                    src={`https://picsum.photos/seed/${book.id}/200`}
                    alt="book"
                    className="book-image"
                />
                <h3 className="book-title">{book.title}</h3>
                <div className="modal-actions">
                    <button
                        className="btn btn-primary"
                        onClick={onClose}
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookShow;