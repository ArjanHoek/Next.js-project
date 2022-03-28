import mongoose from 'mongoose';
import { serverSchema } from '../schemas/lodgeSchema.js';

const lodgeSchema = new mongoose.Schema(serverSchema);

module.exports = mongoose.models.Lodge || mongoose.model('Lodge', lodgeSchema);
