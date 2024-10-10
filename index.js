// import libraries express
import express from "express";
import rootRoutes from "./src/routes/root.router.js";

// tạo object express
const app = express();

// đảm bảo chạy trước khi chạy xuống rootRoutes để các dữ liệu ở body được chuyển từ JSON sang đối tượng JS
app.use(express.json());

// import rootRoutes
app.use(rootRoutes);

// tạo cấu hình Server để chạy
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
