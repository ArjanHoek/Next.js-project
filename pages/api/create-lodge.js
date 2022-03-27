import { createLodge } from '../../db/lodges';

export default async function handler({ body }, res) {
  try {
    const lodge = await createLodge(body);
    console.log(lodge);

    res.status(200).json({ status: 'success', data: lodge });
  } catch (err) {
    res.status(400).json({ status: 'fail', msg: err.message });
  }
}
