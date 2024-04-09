type Props = {
  input: string;
  setInput: (input: string) => void;
};

const BlackListReasonInputText = ({ input, setInput }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <input
      className={`${input ? 'border-b-gray-grayscale50 ' : 'border-b-gray-grayscale20'} focus:border-b-gray-grayscale50 w-400 h-34 border-b-1 H4 placeholder:text-gray-grayscale30  placeholder:text-center focus:outline-none pb-6 text-gray-grayscale50 `}
      placeholder='사유를 입력해주세요. (최대 30자)'
      type='text'
      value={input}
      onChange={handleChange}
    />
  );
};

export default BlackListReasonInputText;
