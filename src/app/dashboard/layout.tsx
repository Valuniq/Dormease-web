import Header from '@/components/organisms/Header/Header';
import Navigation from '@/components/organisms/Navigation/Navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='mb-30 fixed top-0 w-full'>
        <Header />
      </div>
      <div className='flex align-start ml-19 mt-132'>
        <nav className='mr-101 '>
          <Navigation />
        </nav>
        {children}
      </div>
    </>
  );
}
