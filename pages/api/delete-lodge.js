import { deleteLodge } from '../../db/lodges';

export default async function handler(req, res) {
  try {
    console.log(req.params);

    // await deleteLodge(req.params.id);

    res.status(200).json({ status: 'success', data: null });
  } catch (err) {
    res.status(400).json({ status: 'fail', msg: err.message });
  }
}
