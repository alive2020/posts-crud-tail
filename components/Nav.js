import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

function Nav() {
  const [activeNav, setActiveNav] = useState('Home');
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === '/') {
      setActiveNav('Home');
    } else if (router.asPath === '/about') {
      setActiveNav('About');
    }
  }, [router]);

  return (
    <nav className={styles.container}>
      <ul className='font-medium text-sm flex flex-row justify-end m-2 mr-10'>
        <li className='pr-5'>
          <Link href='/' className='text-red-500 '>
            <p
              className={`${activeNav === 'Home' ? 'text-red-500' : ''}`}
              onClick={() => setActiveNav('Home')}
            >
              Home
            </p>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <p
              className={`${activeNav === 'About' ? 'text-red-500' : ''}`}
              onClick={() => setActiveNav('About')}
            >
              About
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
