import { Request, Response } from "express";
import Order from "../../model/order.model";

const getUserOrdersController = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    console.log(`Fetching orders for email: ${email}`); // Debug log
    // Fetch user orders
    const order = await Order.findOne({ userEmail: email });
    if (!order) {
      res.status(404).json({ message: "No orders found" });
      return;
    }

    const responseBody = {
      email: order.userEmail,
      product: order.product,
      quantity: order.quantity,
    };
    res.status(200).json(responseBody);
    return;
  } catch (error) {
    console.error(`Server error in get user orders controller: ${error}`);
    res.status(500).json({ message: "Server error. Please try again." });
    return;
  }
};

export default getUserOrdersController;
