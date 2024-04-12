import SearchTextBox from '@/components/atoms/InputText/SearchTextBox/SearchTextBox';
import AppMemberManagementList from '@/components/organisms/AppMemberManamement/AppMemberManagementList';

const page = () => {
  return (
    <div className='w-[1250px]'>
      <div className='flex items-center justify-end mb-44'>
        <h1 className='H0 text-gray-grayscale50 mr-117'>앱 회원관리</h1>
        <SearchTextBox
          input={''}
          setInput={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
          placeholder={'이름 또는 학번'}
        />
      </div>
      <AppMemberManagementList
        appMemberManagementLists={[]}
        plusSort={false}
        setPlusSort={function (plusSort: boolean): void {
          throw new Error('Function not implemented.');
        }}
        minusSort={false}
        setMinusSort={function (minusSort: boolean): void {
          throw new Error('Function not implemented.');
        }}
        creationDateSort={false}
        setCreationDateSort={function (creationDateSort: boolean): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  );
};

export default page;
