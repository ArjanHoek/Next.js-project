import Link from 'next/link';

export default function LodgeItem({ data: { name, country, _id } }) {
  return (
    <li>
      <Link href={`/lodges/${_id}`}>
        <a>
          {name} ({country})
        </a>
      </Link>
    </li>
  );
}
