import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // setting this as unique because of future fetch functions
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stockQuantity: {
    type: Number,
    required: true,
  },
});

ProductSchema.index({ name: 1 }); // sorting by name for fetching products

const Product = mongoose.model("Product", ProductSchema);
export default Product;
