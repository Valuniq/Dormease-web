'use client';

type AmountEnterListProps = {
  roomTypeId: number;
  price: number;
  onPriceChange: (newPrice: number) => void;
  disabled?: boolean; // 비활성화 상태 추가
};

const AmountEnterList = ({ roomTypeId, price, onPriceChange, disabled }: AmountEnterListProps) => {
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = parseFloat(e.target.value);
    if (!disabled) {
      // 비활성화 상태가 아닐 때만 값 변경 허용
      onPriceChange(newPrice);
    }
  };

  return (
    <div className={`flex items-center justify-center ${disabled ? 'bg-gray-300' : 'bg-green-green20'}`}>
      <input
        type='number'
        placeholder='금액 입력'
        value={price}
        onChange={handlePriceChange}
        disabled={disabled} // 비활성화 적용
        className={`outline-none w-145 h-34 pr-8 bg-white border border-gray-grayscale30 
        ${disabled ? 'cursor-not-allowed text-gray-400 bg-gray-100' : 'placeholder:text-gray-grayscale30 text-gray-grayscale50'}
        rounded-8 text-right`}
      />
      <span className={`H4 ${disabled ? 'text-gray-400' : 'text-gray-grayscale50'} ml-5`}>원</span>
    </div>
  );
};

export default AmountEnterList;
