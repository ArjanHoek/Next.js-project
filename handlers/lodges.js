import { createLodge, deleteLodge, updateLodge } from '../db/lodges';

export default function getLodgeHandler(method, res) {
  const methods = {
    POST: async function (body) {
      try {
        const lodge = await createLodge(body);

        res.status(200).json({ status: 'success', data: lodge });
      } catch (err) {
        res.status(400).json({ status: 'fail', msg: err.message });
      }
    },
    DELETE: async function (id) {
      try {
        const data = await deleteLodge(id);

        res.status(200).json({ status: 'success', data });
      } catch (err) {
        res.status(400).json({ status: 'fail', msg: err.message });
      }
    },
    PUT: async function (id, body) {
      try {
        const data = await updateLodge(id, body);

        res.status(200).json({ status: 'success', data });
      } catch (err) {
        res.status(400).json({ status: 'fail', msg: err.message });
      }
    },
  };

  return methods[method];
}
