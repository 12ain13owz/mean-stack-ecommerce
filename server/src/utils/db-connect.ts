import mongoose from 'mongoose';
import log from './logger';

export default async function dbConnect() {
  try {
    const DB_PASS = process.env.DB_PASS;
    await mongoose.connect(
      `mongodb+srv://touchfn:${DB_PASS}@cluster0.mkwiy3z.mongodb.net/?retryWrites=true&w=majority`
    );
    log.info('Connected to Database successfully');
  } catch (error) {
    const e = error as Error;
    log.error(`dbConnect: ${e.message}`);
    process.exit(1);
  }
}
