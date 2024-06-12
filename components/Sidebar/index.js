'use client';
import React from 'react';
import styles from './sidebar.module.scss';
import { FaCalendar, FaUser, FaWandMagicSparkles } from 'react-icons/fa6';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.sidebar}>
      <ul className={styles.nav__list}>
        <Link href="/">
          <li
            className={
              pathname === '/' ? styles['nav__item--active'] : styles.nav__item
            }
          >
            <i className={styles.sidebar__icon}>
              <FaCalendar />
            </i>
          </li>
        </Link>
        <Link href="/ai-generate">
          <li
            className={
              pathname === '/ai-generate'
                ? styles['nav__item--active']
                : styles.nav__item
            }
          >
            <i className={styles.sidebar__icon}>
              <FaWandMagicSparkles />
            </i>
          </li>
        </Link>
        <Link href="/account">
          <li
            className={
              pathname === '/account'
                ? styles['nav__item--active']
                : styles.nav__item
            }
          >
            <i className={styles.sidebar__icon}>
              <FaUser />
            </i>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
