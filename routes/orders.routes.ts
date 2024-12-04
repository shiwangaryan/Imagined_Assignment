import express from "express";
import createOrderController from "../controller/orders/createOrder.controller";
import getOrderDetails from "../controller/orders/getOrderDetails.controller";
import updateOrderController from "../controller/orders/updateOrder.controller";

const orderRouter = express.Router();
orderRouter.post("/createOrder", createOrderController); // create order
orderRouter.get("/getOrderDetails", getOrderDetails); // get order
orderRouter.patch("/updateOrder", updateOrderController); // update order

export default orderRouter;
