

const PeriodSetting = () => {
  return (
    <div className="flex items-center">
        <input className="placeholder:text-gray-grayscale30 mr-12 w-76 h-34 rounded-8 border-[0.5px] focus:outline-none border-gray-grayscale40 " type="number" placeholder="연도" />
        <input className="placeholder:text-gray-grayscale30 mr-12 w-76 h-34 rounded-8 border-[0.5px] focus:outline-none border-gray-grayscale40 " type="number" placeholder="월" />
        <input className="placeholder:text-gray-grayscale30 w-76 h-34 rounded-8 border-[0.5px] focus:outline-none border-gray-grayscale40 " type="number" placeholder="일" />
    </div>
  )
}

export default PeriodSetting