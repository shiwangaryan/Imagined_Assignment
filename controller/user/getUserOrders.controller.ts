import { Request, Response } from "express";
import User from "../../model/user.model";
import Order from "../../model/order.model";

// fetching orders based on email as other details can change or be duplicate
const getUserOrdersController = async (req: Request, res: Response) => {
  try {
    // find user by mobile number
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res
        .status(400)
        .json({ message: "User not found. Enter correct mobile number" });
      return;
    }

    // fetch all the orders
    const orders = await Order.find({ userId: user.id });
    if (orders.length == 0) {
      res.status(404).json({ message: "No orders for this user yet." });
    }

    res.status(200).json({ orders });
    return;
  } catch (error) {
    console.log(`Error in fetch user order controller: ${error}`);
    res.status(500).json({ message: "Server error. Please try again." });
    return;
  }
};

export default getUserOrdersController;
