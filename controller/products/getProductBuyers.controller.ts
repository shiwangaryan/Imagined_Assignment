import { Request, Response } from "express";
import Order from "../../model/order.model";

const getProductBuyersController = async (req: Request, res: Response) => {
  try {
    const { product } = req.body;
    const users = await Order.find(
      { product: product },
      { _id: 0, userEmail: 1 }
    );

    if (users.length === 0) {
      res.status(404).json({ message: "No buyers found" });
      return;
    }
    res.status(200).json(users);
    return;
  } catch (error) {
    console.log(`Server error in get product buyers controller: ${error}`);
    res.status(500).json({ message: "Server error. Please try again." });
    return;
  }
};

export default getProductBuyersController;
