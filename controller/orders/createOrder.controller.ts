import { Request, Response } from "express";
import User from "../../model/user.model";
import Product from "../../model/product.model";
import Order from "../../model/order.model";
const createOrderController = async (req: Request, res: Response) => {
  try {
    const { email, product, quantity } = req.body;
    const user = await User.findOne({ email });
    const productExist = await Product.findOne({ name: product });
    const order= await Order.findOne({ userEmail: email, product });

    // check the input
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    if (!productExist) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    if(order){
      res.status(400).json({ message: "Order already exists, update it if you want to make changes." });
      return;
    }
    if (quantity <= 0) {
      res.status(400).json({ message: "Quantity cannot be negative or zero" });
      return;
    }
    if (quantity > productExist.stockQuantity) {
      res.status(400).json({ message: "Quantity exceeds stock quantity" });
      return;
    }

    // create if all checks pass
    const newOrder = new Order({
      userEmail: email,
      product,
      quantity,
    });
    await newOrder.save();

    // update the stock quantity
    productExist.stockQuantity -= quantity;
    await productExist.save();
    res.status(201).json({ message: "Order created successfully" });
    return;
  } catch (error) {
    console.log(`Server error in create order controller: ${error}`);
    res.status(500).json({ message: "Server error. Please try again." });
    return;
  }
};

export default createOrderController;
