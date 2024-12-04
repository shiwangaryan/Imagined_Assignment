import { Request, Response } from "express";
import Product from "../../model/product.model";

const createProductController = async (req: Request, res: Response) => {
  try {
    const { name, price, category, stockQuantity } = req.body;

    // check for duplicate product
    const productExist = await Product.findOne({ name });
    if (productExist) {
      res.status(404).json({ message: "Product already exist." });
      return;
    }

    // create new product
    const newProduct = new Product({
      name,
      price,
      category,
      stockQuantity,
    });
    await newProduct.save();
    res.status(201).json({ message: "Product created successfully." });
    return;
  } catch (error) {
    console.log(`Server error in create product controller: ${error}`);
    res.status(500).json({ message: "Server error. Please try again." });
    return;
  }
};

export default createProductController;
