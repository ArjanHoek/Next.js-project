import Link from 'next/link';

export default function Lodge({ name, country, _id }) {
  return (
    <div>
      <Link href={`/lodges/${_id}`}>
        <a>
          {name} ({country})
        </a>
      </Link>
    </div>
  );
}
