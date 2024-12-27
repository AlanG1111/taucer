import React from 'react';

type Props = {
  size?: number;
  arrowSize?: number;
};

export const ArrowGreenBg: React.FC<Props> = ({ size = 40, arrowSize = 18 }) => {
  const wrapperStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97E334',
    borderRadius: '50%',
    width: `${size}px`,
    height: `${size}px`,
  };
  return (
    <div style={wrapperStyle}>
      {arrowSize <= 18 ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M1 17C6.00775 12.2097 11.7631 7.47624 16.2421 2.2031C17.5581 0.653676 17.0753 1.10768 15.4494 2.00812C14.008 2.80638 2.31486 6.77618 8.33333 4.33371C9.04191 4.04615 16.4889 0.782224 16.4006 1.01154C14.9863 4.68346 14.4529 8.43196 14.4529 12.3205"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M2 26C9.51163 18.8145 18.1447 11.7144 24.8631 3.80465C26.8372 1.48051 26.1129 2.16152 23.6741 3.51218C21.512 4.70957 3.97228 10.6643 13 7.00056C14.0629 6.56922 25.2334 1.67333 25.1009 2.01731C22.9795 7.52519 22.1793 13.1479 22.1793 18.9807"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  );
};
