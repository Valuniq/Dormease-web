type Props = {
  input: string;
  setInput: (id: string) => void;
  readonly?: boolean;
  maxLength?: number;
};

const PointBar = ({ input, setInput, readonly, maxLength }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
    setInput(e.target.value);
  };

  return (
    <input
      className={`text-center H2 w-64 h-35 border-gray-grayscale20 border-1 outline-none px-8 rounded-5 text-gray-grayscale50`}
      type='number'
      value={input}
      onChange={handleChange}
      readOnly={readonly}
      maxLength={maxLength}
    />
  );
};

export default PointBar;
