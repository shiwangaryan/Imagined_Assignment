import express from "express";
import createProductController from "../controller/products/createProduct.controller";
import getProductDetailsController from "../controller/products/getProductDetails.controller";
import updateProductDetailsController from "../controller/products/updateProductDetails.controller";
import getProductBuyersController from "../controller/products/getProductBuyers.controller";
import getAllStockController from "../controller/products/getAllStock.controller";

const productRouter = express.Router();
productRouter.post("/createProduct", createProductController);
productRouter.get("/getProductDetails", getProductDetailsController);
productRouter.get("/getTotalStock", getAllStockController);
productRouter.patch("/updateProductDetails", updateProductDetailsController);
productRouter.post("/getProductBuyers", getProductBuyersController);

export default productRouter;