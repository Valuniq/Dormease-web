type Props = {
  width?: string;
  height?: string;
  font?: string;
  placeholder: string;
  input: string;
  setInput: (input: string) => void;
};

const LongInputText = ({ placeholder, font, input, setInput, width, height }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <input
      className={`${input ? 'border-gray-grayscale50 ' : 'border-gray-grayscale20'} ${width || 'w-924'} ${height || 'h-34'} ${font ? font : 'H4'} px-6 rounded-5 focus:border-gray-grayscale50  border-1 placeholder:text-gray-grayscale20 focus:outline-none text-gray-grayscale50 `}
      placeholder={placeholder}
      type='text'
      value={input}
      onChange={handleChange}
    />
  );
};

export default LongInputText;
