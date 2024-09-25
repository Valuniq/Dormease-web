type Props = {
  label: string;
  onClick: () => void;
  hoverColor: 'blue' | 'gray' | 'red' | 'green';
  isColor?: boolean;
  disabled?: boolean;
};

const AlertBtn = ({ label, onClick, hoverColor, isColor, disabled }: Props) => {
  const getClassByHoverColor = (hoverColor: string) => {
    switch (hoverColor) {
      case 'blue':
        return {
          btnHoverColor: 'hover:bg-blue-blue30',
        };
      case 'gray':
        return {
          btnHoverColor: 'hover:bg-gray-grayscale20',
        };
      case 'red':
        return {
          btnHoverColor: 'hover:bg-red-red20',
        };
      case 'green':
        return {
          btnHoverColor: 'hover:bg-green-green20',
        };
      default:
        return {
          btnHoverColor: 'hover:bg-blue-blue30',
        };
    }
  };
  const { btnHoverColor } = getClassByHoverColor(hoverColor);
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`mr-16 w-86 h-32 rounded-20 ${btnHoverColor} hover-transition ${isColor && 'bg-blue-blue30'}`}
      >
        {hoverColor === 'gray' ? (
          <h1 className='H4 text-gray-grayscale40'>{label}</h1>
        ) : (
          <h1 className={`H4 text-gray-grayscale40 hover:text-white ${isColor && 'text-white'}`}>{label}</h1>
        )}
      </button>
    </>
  );
};

export default AlertBtn;
