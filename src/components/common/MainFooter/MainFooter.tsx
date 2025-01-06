'use client';

import React from 'react';
import styles from './mainFooter.module.scss';
import Image from 'next/image';
import { basicRoutes, schoolRoutes } from '@/config/routes';
import Link from 'next/link';
import { InstIcon } from '../../icons';

const MainFooter: React.FC = () => {
  const getCurrentYear = () => new Date().getFullYear();

  const renderNavLinks = (routes: { route: string; label: string }[]) =>
    routes.map(({ route, label }) => (
      <div key={route}>
        <Link href={route} passHref className={styles.menuItem}>
          {label}
        </Link>
      </div>
    ));

  return (
    <footer className={styles.footerWrapper}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerHeader}>
          <Image src="/images/footer/logo-120.png" alt="logo" width={120} height={120} loading="lazy" />
          <div className={styles.footerSideContainer}>
            <span>місце, де діти проживають життя</span>
          </div>
        </div>

        <div className={styles.footerContentWrapper}>
          <nav>
            <div>
              <span className={styles.footerNavTitle}>Напрямки:</span>
              <div className={styles.menuList}>{renderNavLinks(schoolRoutes)}</div>
            </div>
            <div>
              <span className={styles.footerNavTitle}>Загальне:</span>
              <div className={styles.menuList}>{renderNavLinks(basicRoutes)}</div>
            </div>
          </nav>

          <div className={`${styles.footerContactsContainer} ${styles.footerSideContainer}`}>
            <div>
              <Link href="mailto:taucer2024@gmail.com">taucer2024@gmail.com</Link>
              <Link href="tel:+380635555555">+380 63 555 55 55</Link>
            </div>
            <div>
              <div className={styles.instLinkContainer}>
                <InstIcon />
                <Link href={'/'} passHref className={styles.menuItem}>
                  Instagram ШКОЛИ
                </Link>
              </div>
              <div className={styles.instLinkContainer}>
                <InstIcon />
                <Link href={'/'} passHref className={styles.menuItem}>
                  Instagram ТАБОРУ
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerRightsContainer}>
          <span>Всі права захищені TAUCER {getCurrentYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
