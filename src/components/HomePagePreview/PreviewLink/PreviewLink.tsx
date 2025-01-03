import React from 'react';
import Link from 'next/link';
import { ArrowGreenBg } from '@/components/icons';
import styles from './PreviewLink.module.scss';

type Props = {
  link: string;
  children: React.ReactNode;
  label: string;
  bgImage: string;
  style?: React.CSSProperties;
};

const PreviewLink: React.FC<Props> = ({ link, children, label, bgImage, style }) => {
  return (
    <Link href={link} passHref className={styles.linkWrapper} style={style}>
      <div style={{ backgroundImage: `url(${bgImage})` }}>
        <div className={styles.contentContainer}>
          <div className={styles.labelWrapper}>
            <span>{label}</span>
          </div>
          <span>{children}</span>
          <div className={styles.arrow}>
            <ArrowGreenBg size={72} arrowSize={28} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PreviewLink;
