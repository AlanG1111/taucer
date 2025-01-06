'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, MainLogo } from '@/components/icons';
import { basicRoutes, Routes, schoolRoutes } from '@/config/routes';
import GreenButton from '@/components/common/PrimaryGreenButton/PrimaryGreenButton';
import { handleScrollToForm } from '@/helpers/lib/handleScrollToForm';
import styles from './mainHeader.module.scss';

const MainHeader: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown menu
  const toggleExpansion = () => setExpanded((prev) => !prev);

  // Collapse dropdown menu
  const collapseMenu = useCallback(() => setExpanded(false), []);

  // Collapse when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        collapseMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [collapseMenu]);

  // Handle menu item click
  const handleLinkClick = () => collapseMenu();

  const handleLRequestClick = () => {
    collapseMenu();
    handleScrollToForm('form-container');
  };

  return (
    <header ref={containerRef} className={`${styles.headerWrapper} ${expanded ? styles.expanded : ''}`}>
      <div className={`${styles.headerContainer} container`}>
        {/* Logo */}
        <Link href={Routes.Root} passHref onClick={handleLinkClick}>
          <MainLogo />
        </Link>

        {/* Navigation */}
        <nav className={styles.navigationContainer}>
          {/* Dropdown */}
          <div>
            <div className={`${styles.menuItem} ${styles.dropDownTitle}`} onClick={toggleExpansion}>
              <span>Напрямки</span>
              <ArrowDown />
            </div>
            <AnimatePresence>
              {expanded && (
                <motion.ul
                  id="dropdown-menu"
                  className={styles.dropDownItemsWrapper}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  role="menu"
                >
                  {schoolRoutes.map(({ route, label }) => (
                    <li key={route} role="menuitem">
                      <Link href={route} passHref onClick={handleLinkClick} className={styles.subMenuItem}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          {/* Other Links */}
          {basicRoutes.map(({ route, label }) => (
            <Link key={route} href={route} passHref onClick={handleLinkClick} className={styles.menuItem}>
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <GreenButton title="Залишити заявку" onClick={handleLRequestClick} />
      </div>
    </header>
  );
};

export default MainHeader;
