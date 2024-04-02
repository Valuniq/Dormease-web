type Props = {
  input: string;
  setInput: (id: string) => void;
};

const PointBar = ({ input, setInput }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <input
      className={`w-64 h-35 border-gray-grayscale20 border-1 outline-none px-8  rounded-5 text-gray-grayscale50`}
      type='number'
      value={input}
      onChange={handleChange}
    />
  );
};

export default PointBar;
