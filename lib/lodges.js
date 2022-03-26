import dbConnect from './dbConnect';
import Lodge from '../models/Lodge.js';

export const getLodges = async () => {
  try {
    await dbConnect();

    const lodges = await Lodge.find({});

    return JSON.parse(JSON.stringify(lodges));
  } catch (err) {
    throw new Error(err);
  }
};

export const getLodgeById = async id => {
  try {
    await dbConnect();

    const lodge = await Lodge.findById(id);

    return JSON.parse(JSON.stringify(lodge));
  } catch (err) {
    throw new Error(err);
  }
};
