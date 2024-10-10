import express from "express";
import {
  createLike,
  deleteLike,
  getListLikeUser,
  getListLikeRestaurant,
} from "../controllers/likes.controller.js";

const userRoutes = express.Router();

userRoutes.post("/like", createLike);
userRoutes.delete("/unlike/:user_id", deleteLike);
userRoutes.get("/get-ListLikeRestaurant/:res_id", getListLikeRestaurant);
userRoutes.get("/get-ListlikeUser/:user_id", getListLikeUser);

export default userRoutes;
