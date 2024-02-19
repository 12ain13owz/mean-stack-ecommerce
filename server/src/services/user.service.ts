import { User, UserModel } from '../models/user.model';

export function findUserByEmail(email: string) {
  return UserModel.findOne({ email });
}

export function findUserById(id: string) {
  return UserModel.findOne({ _id: id });
}

export function createUser(input: Partial<User>) {
  return UserModel.create(input);
}
