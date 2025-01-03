type Props = {
  input: string;
  setInput: (id: string) => void;
  placeholder: string;
  readOnly?: boolean;
  maxLength?: number;
  type: 'textBox1' | 'textBox2' | 'textBox3' | 'textBox4' | 'textBox5' | 'textBox6' | 'textBox7' | 'textBox8';
};

const TextBoxes = ({ input, setInput, placeholder, readOnly, maxLength, type }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLength) {
      e.target.value = e.target.value.slice(0, maxLength);
    }
    setInput(e.target.value);
  };

  const getClassByType = (type: Props['type']) => {
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
          textAlign: 'placeholder:text-center text-center',
          inputType: 'number',
        };
      case 'textBox4':
        return {
          boxSize: 'w-66',
          textAlign: 'placeholder:text-center',
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
          textAlign: 'placeholder:text-center text-center',
          inputType: 'number',
        };
      case 'textBox8':
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
      className={`${input ? 'border-gray-grayscale50' : 'border-gray-grayscale30'} H4-caption border-[0.5px] outline-none px-8 ${boxSize} ${textAlign} ${readOnly && 'cursor-pointer'} rounded-8 text-gray-grayscale50 placeholder:text-gray-grayscale30`}
      placeholder={placeholder}
      type={inputType}
      value={input}
      readOnly={readOnly}
      maxLength={maxLength}
      onChange={handleChange}
    />
  );
};

export default TextBoxes;
