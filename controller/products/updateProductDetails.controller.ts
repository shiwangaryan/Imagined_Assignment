import { Response, Request } from "express";
import Product from "../../model/product.model";

// send email for finding user and other details to update in body
const updateProductDetailsController = async (req: Request, res: Response) => {
  try {
    // get details of user
    const { name, price, category, stockQuantity } = req.body;
    const product = await Product.findOne({ name });

    // check if user exists and valid input or else update
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    if(stockQuantity< 0) {
        res.status(400).json({ message: "Stock quantity cannot be negative" });
        return;
    }

    // here updating  details
    if (price) product.price = price;
    if (category) product.category = category;
    if (stockQuantity)
      product.stockQuantity = stockQuantity;
    await product.save();

    res.status(200).json({ message: "Product details updated successfully" });
    return;
  } catch (error) {
    console.log(`Error in updating product controller: ${error}`);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again." });
    return;
  }
};

export default updateProductDetailsController;
