import mongoose, { Schema } from "mongoose";

const OrderSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  quantity: {
    type: Number,
    required: true,
  }
});

const Order= mongoose.model("Order", OrderSchema);
export default Order;