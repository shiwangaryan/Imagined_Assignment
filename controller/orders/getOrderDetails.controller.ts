import { Request, Response } from "express";
import Order from "../../model/order.model";

const getOrderDetails = async (req: Request, res: Response) => {
  try {
    const { email, product } = req.body;
    const order = await Order.findOne({ userEmail: email, product });
    // check product exists
    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }

    // send data
    const responseBody = {
      email: email,
      product: product,
      quantity: order.quantity,
    };
    res.status(200).json(responseBody);
    return;
  } catch (error) {
    console.log(`Server error in get order details controller: ${error}`);
    res.status(500).json({ message: "Server error. Please try again." });
    return;
  }
};

export default getOrderDetails;
