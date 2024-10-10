import express from "express";
import userRouter from "./likes.router.js";
import restaurantRouter from "./restaurants.router.js";
import orderRouter from "./order.router.js";

// tạo object router tổng
const rootRoutes = express.Router();
rootRoutes.use("/likes", userRouter);
rootRoutes.use("/restaurants", restaurantRouter);
rootRoutes.use("/order",orderRouter)

// export rootRoutes cho index.js dùng
export default rootRoutes;
