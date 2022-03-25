import dbConnect from './dbConnect';
import User from '../models/User.js';

export const getUsers = async () => {
  try {
    await dbConnect();

    const users = await User.find({});

    return users.map(doc => {
      const res = doc.toObject();
      res._id = doc._id.toString();
      return res;
    });
  } catch (err) {
    throw new Error(err);
  }
};
