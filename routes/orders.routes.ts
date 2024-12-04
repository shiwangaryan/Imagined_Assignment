import express from "express";
import createOrderController from "../controller/orders/createOrder.controller";
import getOrderDetails from "../controller/orders/getOrderDetails.controller";
import updateOrderController from "../controller/orders/updateOrder.controller";
import getPastOrdersController from "../controller/orders/getPastOrders.controller";
import getUserOrdersController from "../controller/user/getUserOrders.controller";

const orderRouter = express.Router();
orderRouter.post("/createOrder", createOrderController); // create order
orderRouter.post("/getOrderDetails", getOrderDetails); // get order
orderRouter.get("/pastSevenOrders", getPastOrdersController); // past 7 days order
orderRouter.post("/getUserOrders", getUserOrdersController); // get user orders
orderRouter.patch("/updateOrder", updateOrderController); // update order

export default orderRouter;
