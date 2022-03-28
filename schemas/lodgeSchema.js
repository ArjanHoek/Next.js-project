import { toClientSchema } from '../utils/schemaMethods.js';

export const serverSchema = {
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  location: [Number, Number],
};

export const clientSchema = toClientSchema(serverSchema, ['name', 'country']);
