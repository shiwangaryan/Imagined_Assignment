import { Request, Response } from "express";
import Product from "../../model/product.model";

const getProductDetailsController = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    // check for product
    const productExist = await Product.findOne({ name });
    if (!productExist) {
      res.status(404).json({ message: "No product found with this name." });
      return;
    }

    const responseBody = {
      name: productExist.name,
      price: productExist.price,
      category: productExist.category,
      stockQuantity: productExist.stockQuantity,
    };
    res.status(200).json({ responseBody });
  } catch (error) {
    console.log(`Server error in fetching product details: ${error}`);
    res.status(500).json({ message: "Server error. Please try again." });
    return;
  }
};

export default getProductDetailsController;
