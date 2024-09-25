// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  nameOnCard: String,
  cardNumber: Number,
  expiration: String,
  CVV: String,
  totalPrice: Number,
  quantity: String
});

const Product = mongoose.model('Product', productSchema);

export default Product; // Use default export for a single model
