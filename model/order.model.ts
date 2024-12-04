import mongoose, { Schema } from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId: {
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

OrderSchema.index({orderDate: -1});  // sorting by order date for last 7 days orders
const Order= mongoose.model("Order", OrderSchema);
export default Order;