import mongoose, { Schema } from "mongoose";

const OrderSchema = new mongoose.Schema({
  userEmail: {
    type: "String",
    required: true,
  },
  product: {
    type: "String",
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

OrderSchema.index({orderDate: -1});  // sorting by order date for last 7 days orders
const Order= mongoose.model("Order", OrderSchema);
export default Order;