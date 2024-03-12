'use client';
import { countState } from '@/recoil';
import { useRecoilState } from 'recoil';

export default function Home() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <main className='flex'>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </main>
  );
}
