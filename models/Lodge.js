import mongoose from 'mongoose';

const lodgeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Provide the name of the lodge!'],
  },
  country: {
    type: String,
    required: [true, 'Provide the country in which the lodge is located!'],
  },
  location: [Number, Number],
});

module.exports = mongoose.models.Lodge || mongoose.model('Lodge', lodgeSchema);
