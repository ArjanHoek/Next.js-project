import Link from 'next/link';

export default function Lodge({ name, country, _id }) {
  console.log(_id);
  return (
    <div>
      <Link href={`/lodges/${_id}`}>
        <h4>
          <a>{name}</a>
        </h4>
      </Link>
    </div>
  );
}
