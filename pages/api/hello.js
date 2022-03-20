export default function handler(req, res) {
  console.log(process.env.DB_LINK);
  res.status(200).json({ text: 'Hello' });
}
