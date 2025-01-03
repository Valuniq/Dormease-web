import { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  input: string;
  setInput: (id: string) => void;
  placeholder: string;
  type: 'text' | 'password';
};

const LoginInputText = ({ input, setInput, placeholder, type, ...props }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <input
      {...props}
      className={`${input ? 'border-gray-grayscale50' : 'border-gray-grayscale30'} H2  border-[1.5px]  outline-none focus:border-gray-grayscale30 px-21 w-414 h-59 rounded-20 text-gray-grayscale50 placeholder:text-gray-grayscale30`}
      placeholder={placeholder}
      type={type}
      value={input}
      onChange={handleChange}
      required
    />
  );
};

export default LoginInputText;
