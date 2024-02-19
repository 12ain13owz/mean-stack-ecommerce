// 1.
// import mongoose from 'mongoose';
// const Schema = mongoose.Schema;

// export const ProductModel = mongoose.model(
//   'Product',
//   new Schema({
//     id: { type: Number, required: true },
//     name: { type: String, required: true },
//     image: { type: String, required: true },
//     category: { type: String, required: true },
//     newPrice: { type: Number, required: true },
//     oldPrice: { type: Number, required: true },
//     date: { type: Date, default: Date.now() },
//     avilable: { type: Boolean, default: true },
//   })
// );

// export interface Product {
//   id: number;
//   name: string;
//   image: string;
//   category: string;
//   newPrice: number;
//   oldPrice: number;
// }

// -----------------------------------------------------------------

// 2. ใช้ไม่ได้กับ runtime tsx
// import { getModelForClass, prop } from '@typegoose/typegoose';

// export class Product {
//   @prop({ required: true })
//   id: number;

//   @prop({ required: true })
//   name: string;

//   @prop({ required: true })
//   image: string;

//   @prop({ required: true })
//   category: string;

//   @prop({ required: true })
//   newPrice: number;

//   @prop({ required: true })
//   oldPrice: number;

//   @prop({ default: Date.now() })
//   date: Date;

//   @prop({ default: true })
//   avilable: boolean;
// }

// export const ProductModel = getModelForClass(Product);

// -----------------------------------------------------------------
// 3. Chat GPT

import mongoose, { Document } from 'mongoose';

const ProductSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  newPrice: { type: Number, required: true },
  oldPrice: { type: Number, required: true },
  date: { type: Date, default: Date.now() },
  avilable: { type: Boolean, default: true },
});

export type Product = Omit<Document, '_id' | '__v'> & {
  id: number;
  name: string;
  image: string;
  category: string;
  newPrice: number;
  oldPrice: number;
  date: Date;
  avilable: boolean;
};

export const ProductModel = mongoose.model<Product>('Product', ProductSchema);

export const privateFields = ['__v'];
