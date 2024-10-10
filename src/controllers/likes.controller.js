import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { OK, INTERNAL_SERVER, NOT_FOUND } from "../../const.js";
// Connect to the database
const model = initModels(sequelize);

// POST / like

const createLike = async (req, res) => {
  try {
    const { user_id, res_id } = req.body;
    const date_like = new Date(); // Lấy ngày hiện tại khi tạo like
    const like = await model.like_res.create({ user_id, res_id, date_like });
    return res.status(OK).json(like);
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: "error" });
  }
};

// DELETE /like/:user_id - Delete like

const deleteLike = async (req, res) => {
  try {
    const { user_id, res_id } = req.params;
    const like = await model.like_res.findByPk(user_id, res_id);
    if (!like) {
      return res.status(NOT_FOUND).json({ message: "Like not found" });
    }
    await like.destroy();
    return res.status(OK).json({ message: "Like deleted" });
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: "error" });
  }
};

// GET /likes/restaurant - Get list of likes by restaurant

const getListLikeRestaurant = async (req, res) => {
  try {
    const { res_id } = req.params;
    console.log(res_id);
    let data = await model.like_res.findAll({
      where: {
        res_id,
      },
    });
    return res.status(OK).json(data);
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: "error" });
  }
};

// GET /likes/user - Get list of likes by user
const getListLikeUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    console.log(user_id);
    let data = await model.like_res.findAll({
      where: {
        user_id,
      },
    });
    return res.status(OK).json(data);
  } catch (error) {
    return res.status(INTERNAL_SERVER).json({ message: "error" });
  }
};

export { createLike, deleteLike, getListLikeRestaurant, getListLikeUser };
