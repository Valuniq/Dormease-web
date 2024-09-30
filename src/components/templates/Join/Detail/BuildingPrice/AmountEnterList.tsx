'use client';

type AmountEnterListProps = {
  roomTypeId: number;
  onPriceChange: (newPrice: number) => void;
};

const AmountEnterList = ({ roomTypeId, onPriceChange }: AmountEnterListProps) => {
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(e.target.value);
    onPriceChange(newPrice);
  };

  return (
    <div className='flex items-center justify-center bg-green-green20'>
      <input
        type='number'
        placeholder='금액 입력'
        onChange={handlePriceChange} // 입력 변경 시 호출
        className='outline-none w-145 h-34 pr-8 bg-white border border-gray-grayscale30 placeholder:text-gray-grayscale30 H4-caption text-gray-grayscale50 rounded-8 text-right'
      />
      <span className='H4 text-gray-grayscale50 ml-5'>원</span>
    </div>
  );
};

export default AmountEnterList;
