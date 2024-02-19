import mongoose, { Document } from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cartData: { type: Array },
  date: { type: Date, default: Date.now() },
});

export type User = Omit<Document, '_id' | '__v'> & {
  name: string;
  email: string;
  password: string;
  cartData: any;
  date: Date;
};

export const UserModel = mongoose.model<User>('User', UserSchema);

export const privateFields = ['__v'];
