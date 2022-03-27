import getLodgeHandler from '../../../handlers/lodges';

export default async function handler({ method, body }, res) {
  const handler = getLodgeHandler(method, res);

  if (handler) {
    await handler(body);
  }
}
