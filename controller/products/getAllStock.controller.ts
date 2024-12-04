import { Request, Response } from "express";
import Product from "../../model/product.model";

const getAllStockController = async (req: Request, res: Response) => {
  try {
    const stock = await Product.aggregate([
      {
        $group: {
          _id: null,
          totalQuantity: { $sum: "$stockQuantity" },
        },
      },
    ]);

    if (stock.length === 0) {
      res.status(404).json({ message: "No stock found" });
      return;
    }
    res.status(200).json({stock: stock[0].totalQuantity});
    return;
  } catch (error) {
    console.log(`Server error in get all stock controller: ${error}`);
    res.status(500).json({ message: "Server error. Please try again." });
    return;
  }
};

export default getAllStockController;
