import React from 'react';

type Props = { title: string };

const PostPeriod = ({ title }: Props) => {
  return (
    <div className='h-52'>
      <h4>{title}</h4>
      <input type='date' id='date' required max='2077-06-20' min='2024-04-17' />
      <input type='date' id='date' required max='2077-06-20' min='2024-04-17' />
    </div>
  );
};

export default PostPeriod;
