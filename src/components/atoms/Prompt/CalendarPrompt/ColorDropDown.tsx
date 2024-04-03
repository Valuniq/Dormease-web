import DropDownBtn from '@public/images/DropDownBtn.png';
import Image from 'next/image';

type Props = {
    isOn: boolean;
    colorList: string[]; 
    select: string;
    setSelect: (select: string) => void;
    setIsOn: (isOn: boolean) => void;
}

const ColorDropDown = ({ isOn, select, setSelect, setIsOn, colorList }: Props) => {

    const handleColorSelect = (color: string) => {
        setSelect(color); 
        setIsOn(false); // 드롭다운 닫기
    };

    return (
        <div>
            <button onClick={() => setIsOn(!isOn)}>
                <div className="w-101 h-30 rounded-20 bg-gray-grayscale5 flex items-center justify-center ">색상
                    <Image width={13} height={13} className='object-contain ml-9' src={DropDownBtn} alt='DropDownBtn' />
                </div>
            </button>
            {isOn &&
                <div className='flex items-center px-7 w-400 h-72 rounded-36 shadow-2xl mt-7'>
                        {colorList.map((color, index) => (
                                 <ul  key={index} className='mr-24'>
                            <li className={`shadow-lg w-58 h-58 rounded-full ${color}`} onClick={() => handleColorSelect(color)} />
                            </ul>))}
                </div>}
        </div>
    )
}

export default ColorDropDown;
