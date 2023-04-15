import mongoose, { Schema, model } from 'mongoose'

const itemSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  message: { type: String }
});

const Item = mongoose.models.Item || model('Item', itemSchema);
export default Item;
