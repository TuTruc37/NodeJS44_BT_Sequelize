import express from "express";
import {
  createReview,
  getReviewRestaurant,
  getReviewUser,
} from "../controllers/restaurants.controller.js";

const restaurantRouter = express.Router();

restaurantRouter.post("/review", createReview);
restaurantRouter.get("/reviews/:res_id", getReviewRestaurant);
restaurantRouter.get("/reviews/user/:user_id", getReviewUser);

export default restaurantRouter;
