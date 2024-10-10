import { CREATED, INTERNAL_SERVER, OK } from "../../const.js";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

// POST /Add a review restaurant

const createReview = async (req, res) => {
  try {
    const { user_id, res_id, amount } = req.body;
    const date_rate = new Date(); // Lấy ngày hiện tại khi tạo like
    const newReview = await model.rate_res.create({
      user_id,
      res_id,
      amount,
      date_rate,
    });

    res.status(CREATED).json({
      message: "Review created successfully",
      review: newReview,
    });
  } catch (error) {
    // console.error(error);
    res.status(INTERNAL_SERVER).json({ message: "Server error" });
  }
};

// GET /reviews/restaurant - Get list of reviews by restaurant

const getReviewRestaurant = async (req, res) => {
  try {
    const { res_id } = req.params;
    const reviews = await model.rate_res.findAll({
      where: { res_id },
    });

    res.status(OK).json({
      message: "Reviews found successfully",
      reviews,
    });
  } catch (error) {
    res.status(INTERNAL_SERVER).json({ message: "Server error" });
  }
};

// GET /reviews/user - Get list of reviews by user

const getReviewUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const reviews = await model.rate_res.findAll({
      where: { user_id },
    });

    res.status(OK).json({
      message: "Reviews found successfully",
      reviews,
    });
  } catch (error) {
    res.status(INTERNAL_SERVER).json({ message: "Server error" });
  }
};
export { createReview, getReviewRestaurant, getReviewUser };
