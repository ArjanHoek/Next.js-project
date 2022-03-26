import mongoose from 'mongoose';

const LodgeSchema = new mongoose.Schema({
  name: String,
  country: String,
  location: [Number, Number],
});

module.exports = mongoose.models.Lodge || mongoose.model('Lodge', LodgeSchema);
