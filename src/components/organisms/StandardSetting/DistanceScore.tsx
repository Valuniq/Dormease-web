// import MediumInputText from '@/components/atoms/InputText/MediumInputText/MediumInputText';
// import React from 'react';

// type Props = {
//   scores: number[];
//   inputs: string[];
//   setInput: (index: number, value: string) => void;
// };

// const DistanceScore = ({ scores, inputs, setInput }: Props) => {
//   return (
//     <table className=' border-1 border-gray-grayscale50'>
//       <tbody className='H4 text-gray-grayscale50 '>
//         {scores.map((score, index, array) => (
//           <tr
//             className={` ${index === array.length - 1 ? '' : ' border-b-[1.5px] border-b-gray-grayscale20'} h-41`}
//             key={index}
//           >
//             <td className='w-217 text-center border-r-[0.5px] border-r-gray-grayscale20'>{score}점</td>
//             <td className='w-333 text-center'>
//               <MediumInputText
//                 placeholder={'거리 점수 사유를 입력해주세요.'}
//                 input={inputs[index] || ''}
//                 setInput={(input) => setInput(index, input)}
//               />
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default DistanceScore;
import React from 'react';

const DistanceScore = () => {
  return <div>DistanceScore</div>;
};

export default DistanceScore;
