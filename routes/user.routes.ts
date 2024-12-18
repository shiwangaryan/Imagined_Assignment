import express from "express";
import createUserController from "../controller/user/createUser.controller";
import getUserOrdersController from "../controller/user/getUserOrders.controller";
import updateUserDetailsController from "../controller/user/updateUserDetails.controller";
import getUserDetailsControlller from "../controller/user/getUserDetails.controller";

const userRouter = express.Router();
userRouter.post("/createUser", createUserController); // create user
userRouter.get("/getuserDetails", getUserDetailsControlller); // get all orders of the user
userRouter.get("/getOrders", getUserOrdersController); // get all orders of the user
userRouter.patch("/updateUserDetails", updateUserDetailsController); // update user details

export default userRouter;