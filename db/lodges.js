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

export const createLodge = async lodgeData => {
  try {
    await dbConnect();

    const lodge = new Lodge(lodgeData);

    await lodge.save();

    return JSON.parse(JSON.stringify(lodge));
  } catch (err) {
    throw new Error(err);
  }
};

export const updateLodge = async (id, body) => {
  try {
    await dbConnect();

    const lodge = await Lodge.findByIdAndUpdate(id, body);

    return JSON.parse(JSON.stringify(lodge));
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteLodge = async id => {
  try {
    await dbConnect();

    const lodge = await Lodge.findByIdAndDelete(id);

    return JSON.parse(JSON.stringify(lodge));
  } catch (err) {
    throw new Error(err);
  }
};
