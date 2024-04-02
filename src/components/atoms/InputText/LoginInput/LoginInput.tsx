type Props = {
  disabled: boolean;
};

const LoginInput = ({ disabled }: Props) => {
  return (
    <input
      className='border-[1.5px] border-gray-grayscale30 outline-none focus:border-gray-grayscale50 px-21 w-414 h-59 rounded-20 text-gray-grayscale50'
      placeholder='아이디'
      type='text'
      disabled={disabled}
    />
  );
};

export default LoginInput;
