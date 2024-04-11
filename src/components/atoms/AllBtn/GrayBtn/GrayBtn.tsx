import React from 'react';

type Props = {
  label: string;
  disabled: boolean;
  selected?: boolean;
};

const GrayBtn = ({
  label,
  disabled,
  selected = false,
  ...props
}: Props & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`H4 w-133 h-42 rounded-8 + ${selected ? 'bg-gray-grayscale30' : 'text-gray-grayscale-40 bg-gray-grayscale5 disabled:text-gray-grayscale30 disabled:bg-gray-grayscale5 hover:bg-gray-grayscale10 hover:hover-transition active:bg-gray-grayscale30'}`}
    >
      {label}
    </button>
  );
};

export default GrayBtn;
