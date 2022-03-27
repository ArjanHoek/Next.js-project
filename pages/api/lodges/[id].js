import { deleteLodge } from '../../../db/lodges';

export default async function handler({ method, query: { id } }, res) {
  const methods = {
    DELETE: async function () {
      try {
        const data = await deleteLodge(id);

        res.status(200).json({ status: 'success', data });
      } catch (err) {
        res.status(400).json({ status: 'fail', msg: err.message });
      }
    },
  };

  if (methods[method]) {
    await methods[method]();
  }
}
