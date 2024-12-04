import { Request, Response } from "express";
import Product from "../../model/product.model";
import Order from "../../model/order.model";
const updateOrderController = async (req: Request, res: Response) => {
  // only quantity of a product in an order can be updated as order is (email, product name) unique
  try {
    const { email, product, quantity } = req.body;
    const order = await Order.findOne({
      userEmail: email,
      product,
    });
    const productExist = await Product.findOne({ name: product });

    // checks on input
    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }
    if (quantity <= 0) {
      res.status(400).json({ message: "Quantity cannot be negative or zero" });
      return;
    }
    if (quantity > productExist!.stockQuantity) {
      // order only exists if the product exists as the check is added in create order controller
      res.status(400).json({ message: "Quantity exceeds stock quantity" });
      return;
    }

    if (quantity) {
      // update the stock first
      productExist!.stockQuantity += order.quantity;
      productExist!.stockQuantity -= quantity;
      order.quantity = quantity;

      // save the changes
      await productExist!.save();
      await order.save();
      res.status(201).json({ message: "Order updated successfully" });
      return;
    }
    res.status(400).json({ message: "Quantity not provided" });
    return;
  } catch (error) {
    console.log(`Server error in update order controller: ${error}`);
    res.status(500).json({ message: "Server error. Please try again." });
    return;
  }
};

export default updateOrderController;
