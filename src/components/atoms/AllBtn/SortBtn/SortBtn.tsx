import React from 'react';

const SortIcon = ({
  className,
  width,
  height,
  fillColor,
}: {
  className?: string;
  width: number;
  height: number;
  fillColor: string;
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox='0 0 16 8'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7.29289 0.707107L1.70711 6.29289C1.07714 6.92286 1.52331 8 2.41421 8L13.5858 8C14.4767 8 14.9229 6.92286 14.2929 6.2929L8.70711 0.707108C8.31658 0.316584 7.68342 0.316583 7.29289 0.707107Z'
      fill={fillColor}
    />
  </svg>
);

export default SortIcon;
