import getLodgeHandler from '../../../handlers/lodges';

export default async function handler({ method, query: { id }, body }, res) {
  const handler = getLodgeHandler(method, res);

  if (handler) {
    await handler(id, body);
  }
}
