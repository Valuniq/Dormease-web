import React from 'react';

type Props = {
  label: string;
  disabled: boolean;
  selected?: boolean;
};

const FloorBtn: React.FC<Props & React.HtmlHTMLAttributes<HTMLButtonElement>> = ({
  label,
  disabled,
  selected = false,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`w-60 h-42 rounded-full text-gray-grayscale-50 bg-transparent ${disabled ? 'disabled:text-gray-grayscale20' : selected ? 'bg-gray-grayscale30' : 'hover:bg-gray-grayscale20 active:bg-gray-grayscale30'}`}
    >
      {label}
    </button>
  );
};

export default FloorBtn;
