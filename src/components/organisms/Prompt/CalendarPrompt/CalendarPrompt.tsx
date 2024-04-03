import CalendarInputText from "@/components/atoms/InputText/CalendarInputText/CalendarInputText"
import ColorDropDown from "@/components/atoms/Prompt/CalendarPrompt/ColorDropDown"
import PeriodSetting from "@/components/atoms/Prompt/CalendarPrompt/PeriodSetting"


const CalendarPrompt = () => {
  return (
    <div className="flex flex-col items-start">
        <h1 className="mb-20">기간 설정</h1>
        <div className="flex items-center"><PeriodSetting /><h1 className="mx-26">~</h1><PeriodSetting /></div>
        <h1 className="mt-20 mb-12">제목 설정</h1>
        <CalendarInputText input={""} setInput={()=>console.log('test')} placeholder={"Caption_calendar"} />
        <div className="mt-16 mb-12"><ColorDropDown isOn={true} colorList={['bg-gray-grayscale5','bg-red-red10','bg-green-green10','bg-orange-orange','bg-blue-blue20']} select={""} setSelect={()=>console.log('test')} setIsOn={()=>console.log('test')} /></div>
        <div> 
            <textarea placeholder="내용을 입력하세요." className="rounded-8 relative w-911 h-180 border-1 border-gray-grayscale30 p-8 placeholder:text-gray-grayscale30">내용 입력 창</textarea> {/* 수정: textarea에는 텍스트만 포함되도록 수정 */}
       
        </div>
        <div className="mt-23 flex ml-auto">
            <button className="w-86 h-32 mr-17">취소</button>
            <button className="w-86 h-32">확인</button>
        </div>
    </div>
  )
}

export default CalendarPrompt;