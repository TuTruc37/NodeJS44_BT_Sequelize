import { CREATED, INTERNAL_SERVER } from "../../const.js";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

// POST /order - Add an order
const createOrder = async (req, res) => {
  try {
    const { user_id, food_id, amount } = req.body;
    const order = await model.orders.create({
      user_id,
      food_id,
      amount,
    });
    return res.status(CREATED).json(order);
  } catch (error) {
    return res
      .status(INTERNAL_SERVER)
      .json({ message: "Internal Server Error" });
  }
};

export { createOrder };
