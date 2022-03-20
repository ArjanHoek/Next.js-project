// /lib/dbConnect.js
import mongoose from 'mongoose';

let URL = process.env.DB_LINK;

if (!URL) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

URL = URL.replace('{USER}', process.env.DB_USER);
URL = URL.replace('{PASS}', process.env.DB_PASS);

console.log(URL);

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      // useUnifiedTopology: true,
      // bufferCommands: false,
      // bufferMaxEntries: 0,
      // useFindAndModify: true,
      // useCreateIndex: true,
    };

    cached.promise = mongoose.connect(URL, options).then(mongoose => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
