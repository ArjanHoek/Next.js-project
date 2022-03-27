import LodgeItem from './listItems/LodgeItem';

export default function LodgesList({ data }) {
  return (
    <ul>
      {data.map(item => (
        <LodgeItem key={item._id} data={item} />
      ))}
    </ul>
  );
}
