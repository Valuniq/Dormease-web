import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import { useEffect, useRef, useState } from 'react';
import { EventInput } from '@fullcalendar/core';
import './Custom.css';
import CalendarPromptAdd from '@/components/organisms/Prompt/CalendarPrompt/CalendarPromptAdd';
import CalendarPrompt from '@/components/organisms/Prompt/CalendarPrompt/CalendarPrompt';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import PlusDateBtn from './PlusDateBtn';
import CalendarDatePrompt from './CalendarDatePrompt';
import { CalendarResponseInformation, TDateResponse, TDayResponse } from '@/types/schedule';
import { useCalendarList } from '@/apis/schedule';

const colors: { [key: string]: string } = {
  GREY: '#E6E6E6',
  RED: '#E29696',
  GREEN: '#95ED8D',
  YELLOW: '#FFD7A9',
  BLUE: '#A8C5EF',
};

const dummyData: TDateResponse[] = [
  {
    calendarId: 1,
    title: '수강신청',
    color: 'GREEN',
  },
  {
    calendarId: 2,
    title: '수강신청',
    color: 'GREY',
  },
  {
    calendarId: 3,
    title: '이부분에서최대로작성할수있는글자영역입니이부분에서최대로작성할수있는글자영역입니다다.',
    color: 'BLUE',
  },
  {
    calendarId: 4,
    title: '수강신청',
    color: 'GREEN',
  },
  {
    calendarId: 5,
    title: '수강신청',
    color: 'GREY',
  },
  {
    calendarId: 6,
    title: '이부분에서최대로작성할수있는글자영역입니다.',
    color: 'BLUE',
  },
  {
    calendarId: 7,
    title: '수강신청',
    color: 'GREEN',
  },
  {
    calendarId: 8,
    title: '수강신청',
    color: 'GREY',
  },
  {
    calendarId: 9,
    title: '이부분에서최대로작성할수있는글자영역입니다.',
    color: 'BLUE',
  },
];

//글자수 제한
const truncateTitle = (title: string, length: number) => {
  return title.length > length ? title.slice(0, length) + '...' : title;
};

//YYYY-MM-DD 형식
const formatDateToString = (dateString: Date | string, days: number): string => {
  let date: Date;

  if (typeof dateString === 'string') {
    date = new Date(dateString);
  } else {
    date = dateString;
  }
  date.setDate(date.getDate() + days);

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const CustomCalendar = () => {
  const calendarRef = useRef<FullCalendar | null>(null);
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear().toString()); //오늘 연도
  const [currentMonth, setCurrentMonth] = useState((today.getMonth() + 1).toString()); //오늘 월

  const { data, error, isLoading, mutate } = useCalendarList(Number(currentYear), Number(currentMonth));

  const [selectedDates, setSelectedDates] = useState({ start: '', end: '' }); //선택한 날짜
  const [color, setColor] = useState('GREY'); //색상
  const [title, setTitle] = useState(''); //제목
  const [contents, setContents] = useState(''); //내용
  const [yearList, setYearList] = useState<string[]>([]); //연도 드롭다운 리스트
  const [isShowYearList, setIsShowYearList] = useState(false); //연도 드롭다운
  const [isShowEventDetail, setIsShowEventDetail] = useState(false); //일정 조회 프롬프트
  const [isShowMoreDetail, setIsShowMoreDetail] = useState(false); //일별 일정 목록 조회 프롬프트
  const [isShowAddButton, setIsShowAddButton] = useState(false); //새로운 일정 추가 프롬프트
  const [selectedEvent, setSelectedEvent] = useState<TDayResponse>(); //이벤트 자세히 보기
  const [hoveredDate, setHoveredDate] = useState<{
    date: Date;
    cell: HTMLElement;
  } | null>(null); //hover한 이벤트
  const [events, setEvents] = useState<EventInput[]>([]); //이벤트 목록

  useEffect(() => {
    if (data?.information) {
      setEvents(
        data.information.map((data) => ({
          title: truncateTitle(data.title, 10),
          start: data.startDate,
          end: formatDateToString(data.endDate, 1),
          backgroundColor: colors[data.color],
          className: 'text-right rounded-8 cursor-pointer pointer-events-none',
        })),
      );
    }
  }, [data]);

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      const formattedMonth = currentMonth.padStart(2, '0');
      try {
        calendarApi.gotoDate(`${currentYear}-${formattedMonth}-01`);
      } catch (error) {
        console.error(error);
      }
    }
  }, [currentYear]);

  useEffect(() => {
    //일정 드롭다운 연도 20개 출력
    const years = Array.from({ length: 19 }, (_, i) => String(Number(currentYear) + i - 1));
    setYearList(years);
  }, [currentYear]);

  //일정이 있는지 여부 (있으면 true, 없으면 false)
  const hasEventOnDate = (date: Date): boolean => {
    const dateString = formatDateToString(date, 0);

    return events.some((event) => {
      if (event.start !== undefined && event.end !== undefined) {
        const eventStart = event.start;
        const eventEnd = formatDateToString(String(event.end), -1);
        return (dateString >= eventStart && dateString <= eventEnd) || dateString === eventStart;
      }
      return false;
    });
  };

  const handleDatesSet = (dateInfo: any) => {
    const midDate = new Date((new Date(dateInfo.start).getTime() + new Date(dateInfo.end).getTime()) / 2);
    const currentYear = midDate.getFullYear();
    const currentDay = new Date(dateInfo.start).toLocaleString('ko-KR', { day: 'numeric' }).replace('일', '');
    const currentMonth = new Date(dateInfo.start).toLocaleString('ko-KR', { month: 'long' }).replace('월', '');

    if (Number(currentDay) > 10) {
      if (Number(currentMonth) === 12) {
        const newMonth = 1;
        setCurrentMonth(String(newMonth));
      } else {
        const newMonth = Number(currentMonth) + 1;
        setCurrentMonth(String(newMonth));
      }
    } else {
      setCurrentMonth(String(currentMonth));
    }

    setCurrentYear(String(currentYear));
  };

  const handleMouseEnter = (date: Date, cell: HTMLElement) => {
    if (hasEventOnDate(date)) {
      setHoveredDate(null);
    } else {
      setHoveredDate({ date, cell });
    }
  };

  const handleMouseLeave = () => {
    setHoveredDate(null);
  };

  return (
    <div className='w-[1290px]'>
      {isShowYearList && (
        <div className='absolute z-[40] flex flex-col gap-5 items-center mt-78 ml-[520px] w-178 rounded-10 bg-gray-grayscale5 max-h-324 overflow-y-auto scrollbar-table'>
          {yearList.map((year, index) => (
            <ul key={index}>
              <li
                className={`h-58 cursor-pointer year-text w-154 ${currentYear === year ? 'text-blue-blue30' : 'text-gray-grayscale30'}`}
                onClick={() => {
                  setIsShowYearList(false);
                  setCurrentYear(year);
                }}
              >
                {year}
              </li>
            </ul>
          ))}
        </div>
      )}
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        dayCellDidMount={(info) => {
          const cell = info.el;
          cell.addEventListener('mouseenter', () => handleMouseEnter(info.date, cell));
          cell.addEventListener('mouseleave', handleMouseLeave);
        }}
        height='auto'
        dayMaxEventRows={3}
        moreLinkText={(num) => `+${num}`}
        moreLinkClick={() => {
          setIsShowMoreDetail(true);
          return 'none';
        }}
        customButtons={{
          customText: {
            text: '일정 관리',
            click: () => {},
          },
          customYear: {
            text: currentYear,
            click: () => {
              setIsShowYearList(!isShowYearList);
            },
          },
          customYearBtn: {
            text: `${isShowYearList ? '▼' : '▲'}`,
            click: () => {
              setIsShowYearList(!isShowYearList);
            },
          },
          customMonth: {
            text: currentMonth,
            click: () => {},
          },
        }}
        datesSet={handleDatesSet}
        headerToolbar={{ start: 'customText', center: 'prev,customYear,customYearBtn,customMonth,next', end: '' }}
        events={events}
        nowIndicator={true}
        selectable={true}
        selectMirror={true}
        firstDay={1}
        fixedWeekCount={false}
        select={(selectInfo) => {
          const startDate = selectInfo.startStr;
          const endDate = selectInfo.end.toISOString().split('T')[0];

          setSelectedDates({ start: startDate, end: endDate });
          if (startDate === endDate && hasEventOnDate(new Date(startDate))) {
            setIsShowMoreDetail(true);
          } else {
            setIsShowAddButton(true);
          }
        }}
      />
      {hoveredDate && (
        <div
          style={{
            position: 'absolute',
            top: hoveredDate.cell.getBoundingClientRect().top + window.scrollY + 30,
            left: hoveredDate.cell.getBoundingClientRect().left + 42,
            zIndex: 30,
            pointerEvents: 'none',
          }}
        >
          <PlusDateBtn />
        </div>
      )}
      <div className='absolute top-0 left-0 z-50'>
        {isShowAddButton && (
          <BackDrop isOpen={isShowAddButton}>
            <CalendarPromptAdd
              onCancel={() => {
                setIsShowAddButton(false);
                setTitle('');
                setContents('');
                setColor('GREY');
              }}
              onConfirm={() => {
                setIsShowAddButton(false);
                setTitle('');
                setContents('');
                setColor('GREY');
              }}
              startDate={selectedDates.start}
              endDate={selectedDates.end}
              title={title}
              setTitle={setTitle}
              contents={contents}
              setContents={setContents}
              color={color}
              setColor={setColor}
              setSelectedDates={setSelectedDates}
            />
          </BackDrop>
        )}
        {isShowEventDetail && selectedEvent && (
          <BackDrop isOpen={isShowEventDetail}>
            <CalendarPrompt
              item={selectedEvent}
              onDelete={() => setIsShowEventDetail(false)}
              onCancel={() => setIsShowEventDetail(false)}
              onEdit={() => setIsShowEventDetail(false)}
            />
          </BackDrop>
        )}
        {isShowMoreDetail && (
          <BackDrop isOpen={isShowMoreDetail}>
            <CalendarDatePrompt
              date={selectedDates.start}
              item={dummyData}
              onCancel={() => setIsShowMoreDetail(false)}
              onCreate={() => {
                setIsShowMoreDetail(false);
                setIsShowAddButton(true);
              }}
              onDetail={() => setIsShowEventDetail(true)}
            />
          </BackDrop>
        )}
      </div>
    </div>
  );
};

export default CustomCalendar;
