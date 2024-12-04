import { Request, Response } from "express";
import Order from "../../model/order.model";

const getPastOrdersController = async (req: Request, res: Response) => {
  try {
    // calculate 7 days ago
    const pastSevenDay = new Date();
    pastSevenDay.setDate(pastSevenDay.getDate() - 7);

    // get all orders from past 7 days
    const pastOrders = await Order.find(
      { orderDate: { $gte: pastSevenDay } }, // order date> past 7 days
      { _id: 0, userEmail: 1, product: 1, orderDate: 1, quantity: 1 } // get only these fields
    );
    res.status(200).json(pastOrders);
    return;
  } catch (error) {
    console.log(`Server error in get past orders controller: ${error}`);
    res.status(500).json({ message: "Server error. Please try again." });
    return;
  }
};

export default getPastOrdersController;
