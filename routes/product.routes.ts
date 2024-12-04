import express from "express";
import createProductController from "../controller/products/createProduct.controller";
import getProductDetailsController from "../controller/products/getProductDetails.controller";
import updateProductDetailsController from "../controller/products/updateProductDetails.controller";

const productRouter = express.Router();
productRouter.post("/createProduct", createProductController);
productRouter.get("/getProductDetails", getProductDetailsController);
productRouter.patch("/updateProductDetails", updateProductDetailsController);

export default productRouter;