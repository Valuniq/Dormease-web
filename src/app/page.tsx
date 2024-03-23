'use client';
import { countState } from '@/recoil';
import { useRecoilState } from 'recoil';

export default function Home() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <main className='flex'>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>{count}</div>
      <div className='w-100 h-200 bg-blue-blue40 '>스타일 테스트 입니다</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </main>
  );
}
