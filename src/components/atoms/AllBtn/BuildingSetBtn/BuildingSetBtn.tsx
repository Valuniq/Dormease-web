import React from 'react';

type Props = {
  label: string;
  detail: boolean;
  selected?: boolean;
  done?: boolean;
};

const BuildingSetBtn = ({
  label,
  detail,
  selected = false,
  done,
  ...props
}: Props & React.HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={`H4 rounded-8 ${detail ? 'w-80 h-34' : 'w-143 h-42'} ${selected ? 'text-white bg-blue-blue30' : done ? 'text-gray-grayscale40 bg-gray-grayscale5 border-2 border-blue-blue30' : 'text-gray-grayscale30 bg-gray-grayscale5 hover:text-blue-blue10 hover:bg-blue-blue20 hover:hover-transition hover:hover-transition active:text-white active:bg-blue-blue30'}
`}
    >
      {label}
    </button>
  );
};

export default BuildingSetBtn;
