import dbConnect from './dbConnect';
import User from '../models/User.js';

export const getUsers = async () => {
  try {
    await dbConnect();

    const users = await User.find({});

    return JSON.parse(JSON.stringify(users));
  } catch (err) {
    throw new Error(err);
  }
};
