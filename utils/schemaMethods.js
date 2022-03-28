import { capitalize } from './stringMethods.js';

const toClientSchema = (schema, order) =>
  order.map(label => {
    const { required } = schema[label];

    const requiredBoolean =
      (Array.isArray(required) ? required[0] : required) || false;

    const errorMessage = Array.isArray(required)
      ? required[1]
      : `${capitalize(label)} is required!`;

    return {
      label,
      required: requiredBoolean,
      error: errorMessage,
    };
  });
export { toClientSchema };
