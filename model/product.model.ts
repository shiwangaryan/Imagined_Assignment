import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,  // setting this as unique because of future fetch functions
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stockQuantity: {
    type: String,
    required: true,
  },
});

const Product= mongoose.model("Product", ProductSchema)
export default Product;