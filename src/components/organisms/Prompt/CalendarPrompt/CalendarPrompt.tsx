import CalendarInputText from "@/components/atoms/InputText/CalendarInputText/CalendarInputText"


const CalendarPrompt = () => {
  return (
    <div>
        <h1>기간 설정</h1>
        <div>기간 설정 atoms</div>
        <h1>제목 설정</h1>
        <CalendarInputText input={""} setInput={()=>console.log('test')} placeholder={""} />
        <div>색상 설정 atoms</div>
        <div>내용 입력 창
            <div>글자 수 </div>
        </div>
        <div>
            <button>취소</button>
            <button>확인</button>
        </div>
    </div>
  )
}

export default CalendarPrompt