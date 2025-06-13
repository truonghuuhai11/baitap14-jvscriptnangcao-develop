# Book Management App

Ứng dụng quản lý sách được xây dựng với React + Vite và json-server.

## Cài đặt

```bash
npm install
```

## Chạy ứng dụng

1. Khởi động json-server (Terminal 1):
```bash
npm run server
```

2. Khởi động React app (Terminal 2):
```bash
npm run dev
```

## Tính năng

- ✅ Xem danh sách sách
- ✅ Thêm sách mới
- ✅ Chỉnh sửa thông tin sách
- ✅ Xóa sách
- ✅ Xem chi tiết sách
- ✅ Responsive design

## Cấu trúc thư mục

```
src/
├── components/
│   ├── BookCreate.jsx    # Component thêm sách
│   ├── BookEdit.jsx      # Component sửa sách
│   ├── BookList.jsx      # Component danh sách sách
│   └── BookShow.jsx      # Component xem chi tiết
├── Api.js                # API calls
├── App.css              # Styles
├── App.jsx              # Main component
└── main.jsx             # Entry point
```

## API Endpoints

- `GET /books` - Lấy danh sách sách
- `GET /books/:id` - Lấy sách theo ID
- `POST /books` - Tạo sách mới
- `PUT /books/:id` - Cập nhật sách
- `DELETE /books/:id` - Xóa sách

## Công nghệ sử dụng

- React 18
- Vite
- json-server
- Axios
- CSS3