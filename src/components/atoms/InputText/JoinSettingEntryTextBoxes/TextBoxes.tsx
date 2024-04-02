type Props = {
  input: string;
  setInput: (id: string) => void;
  placeholder: string;
  type: 'textBox1' | 'textBox2' | 'textBox3' | 'textBox4' | 'textBox5' | 'textBox6' | 'textBox7' | 'textBox8';
};

const TextBoxes = ({ input, setInput, placeholder, type }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const getClassByType = (type: string) => {
    switch (type) {
      case 'textBox1':
        return {
          boxSize: 'w-133',
          textAlign: '',
          inputType: 'text',
        };
      case 'textBox2':
        return {
          boxSize: 'w-235',
          textAlign: '',
          inputType: 'text',
        };
      case 'textBox3':
        return {
          boxSize: 'w-76',
          textAlign: '',
          inputType: 'text',
        };
      case 'textBox4':
        return {
          boxSize: 'w-66',
          textAlign: '',
          inputType: 'text',
        };
      case 'textBox5':
        return {
          boxSize: 'w-114',
          textAlign: 'text-right',
          inputType: 'text',
        };
      case 'textBox6':
        return {
          boxSize: 'w-145',
          textAlign: 'text-right',
          inputType: 'text',
        };
      case 'textBox7':
        return {
          boxSize: 'w-54',
          textAlign: '',
          inputType: 'number',
        };
      case 'textBox7':
        return {
          boxSize: 'w-111',
          textAlign: '',
          inputType: 'text',
        };
      default:
        return {
          boxSize: 'w-133',
          textAlign: '',
          inputType: 'text',
        };
    }
  };
  const { boxSize, textAlign, inputType } = getClassByType(type);

  return (
    <input
      className={` border-gray-grayscale40 border-[0.5px] outline-none px-8 ${boxSize} ${textAlign}  rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30`}
      placeholder={placeholder}
      type={inputType}
      value={input}
      onChange={handleChange}
    />
  );
};

export default TextBoxes;
