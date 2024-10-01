'use client';

type AmountEnterListProps = {
  roomTypeId: number;
  price: number | null; // null을 허용
  onPriceChange: (newPrice: number | null) => void; // null을 허용
  disabled?: boolean; // 비활성화 상태 추가
};

const AmountEnterList = ({ roomTypeId, price, onPriceChange, disabled }: AmountEnterListProps) => {
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // 정규식을 사용해 숫자 이외의 값이 입력되지 않도록 제한
    if (value === '' || /^[0-9]*$/.test(value)) {
      const newPrice = value === '' ? null : parseFloat(value);
      onPriceChange(newPrice); // 유효한 값만 전달
    }
  };

  return (
    <div className={`bg-green-green10 flex items-center justify-center ${disabled ? 'opacity-30' : ''}`}>
      <input
        type='text' // 숫자만 입력 가능하지만, 숫자가 아닌 값에 대해 즉각 검증할 수 있도록 'text'로 설정
        placeholder='금액 입력'
        value={price !== null ? price : ''} // null일 경우 빈 문자열로 표시
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
