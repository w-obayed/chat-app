import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";
import { userPhoto } from "../utils/multer.js";

// init router from express
const router = express.Router();

// routing
router.route("/").get(getAllUser).post(userPhoto, createUser);
router
  .route("/:id")
  .get(getSingleUser)
  .delete(deleteUser)
  .put(updateUser)
  .patch(updateUser);

// export default
export default router;
