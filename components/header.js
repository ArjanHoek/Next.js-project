import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Highker';

export default function Header({ home }) {
  return (
    <header className={styles.header}>
      {home ? (
        <>
          <Image
            priority
            src="/images/highker.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/highker.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyles.headingLg}>
            <Link href="/">
              <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
          </h2>
        </>
      )}

      <nav>
        <ul>
          <li>
            <Link href="/users">
              <a>Users</a>
            </Link>
          </li>
          <li>
            <Link href="/lodges">
              <a>Lodges</a>
            </Link>
            <ul className="nav-sub">
              <li>
                <Link href="/lodges/create">
                  <a>Create</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
