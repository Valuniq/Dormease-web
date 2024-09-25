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
import { CalendarDateResponseInformation, CalendarDetailResponseInformation } from '@/types/schedule';
import {
  deleteCalendar,
  getCalendarDateList,
  getCalendarDetail,
  postCalendar,
  putCalendar,
  useCalendarList,
} from '@/apis/schedule';

const colors: { [key: string]: string } = {
  GREY: '#E6E6E6',
  RED: '#E29696',
  GREEN: '#95ED8D',
  YELLOW: '#FFD7A9',
  BLUE: '#A8C5EF',
};

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
  const todayRef = useRef(new Date());
  const [currentYear, setCurrentYear] = useState(todayRef.current.getFullYear().toString()); //오늘 연도
  const [currentMonth, setCurrentMonth] = useState((todayRef.current.getMonth() + 1).toString()); //오늘 월

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
  const [selectedEvent, setSelectedEvent] = useState<CalendarDetailResponseInformation>(); //일정 상세 조회
  const [hoveredDate, setHoveredDate] = useState<{
    date: Date;
    cell: HTMLElement;
  } | null>(null); //hover한 이벤트
  const [events, setEvents] = useState<EventInput[]>([]); //연도, 월별 일정 목록 (캘린더)
  const [dateList, setDateList] = useState<CalendarDateResponseInformation[]>([]); //일별 일정 목록
  const [editId, setEditId] = useState(0); //캘린더 ID

  //초기 데이터
  useEffect(() => {
    if (data?.information) {
      const newEvents = data.information.map((data) => ({
        title: truncateTitle(data.title, 10),
        start: data.startDate,
        end: formatDateToString(data.endDate, 1),
        backgroundColor: colors[data.color],
        className: 'text-right rounded-5 cursor-pointer pointer-events-none',
      }));
      setEvents(newEvents);
    }
  }, [data]);

  //일정 드롭다운 연도 20개 저장
  useEffect(() => {
    const years = Array.from({ length: 19 }, (_, i) => String(todayRef.current.getFullYear() + i - 1));
    setYearList(years);
  }, []);

  //연도로 캘린더 불러오기
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
  }, [currentMonth, currentYear]);

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

  //연도, 월 저장
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

  //마우스 hover 동작 관리
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

  //일별 일정 목록 조회
  const loadDateSchedule = async (startDate: string) => {
    const response = await getCalendarDateList(startDate);
    if (response.check) {
      setDateList(response.information);
      setIsShowMoreDetail(true);
    }
  };

  //일정 상세 조회
  const loadDetailSchedule = async (id: number) => {
    const response = await getCalendarDetail(id);
    if (response.check) {
      setSelectedEvent(response.information);
      setIsShowEventDetail(true);
    }
  };

  //일정 등록
  const handleAddCalendar = async () => {
    const data = {
      startDate: selectedDates.start,
      endDate: selectedDates.end,
      title: title,
      content: contents,
      color: color,
    };
    await postCalendar(data);
    await mutate();

    setIsShowMoreDetail(false);
    setIsShowAddButton(false);
    setTitle('');
    setContents('');
    setColor('GREY');
  };

  //일정 수정
  const handleEditCalendar = async () => {
    const data = {
      startDate: selectedDates.start,
      endDate: selectedDates.end,
      title: title,
      content: contents,
      color: color,
    };
    await putCalendar(editId, data);
    await mutate();

    setIsShowMoreDetail(false);
    setIsShowAddButton(false);
    setTitle('');
    setContents('');
    setColor('GREY');
    setEditId(0);
  };

  //일정 삭제
  const handleDeleteCalendar = async (id: number) => {
    await deleteCalendar(id);
    await mutate();

    setIsShowEventDetail(false);
    setIsShowMoreDetail(false);
  };

  return (
    <div className='w-[994px]'>
      {isShowYearList && (
        <div className='absolute z-[40] flex flex-col gap-5 items-center mt-65 ml-[392px] w-150 rounded-10 bg-gray-grayscale5 max-h-314 overflow-y-auto scrollbar-table'>
          {yearList.map((year, index) => (
            <ul key={index}>
              <li
                className={`h-58 cursor-pointer year-text w-140 hover:text-blue-blue30 ${currentYear === year ? 'text-blue-blue30' : 'text-gray-grayscale30'}`}
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
            loadDateSchedule(startDate);
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
            left: hoveredDate.cell.getBoundingClientRect().left + 31,
            zIndex: 30,
            pointerEvents: 'none',
          }}
        >
          <PlusDateBtn />
        </div>
      )}
      {(isShowAddButton || isShowEventDetail || isShowMoreDetail) && (
        <BackDrop isOpen={true}>
          {isShowAddButton ? (
            <CalendarPromptAdd
              onCancel={() => {
                setIsShowAddButton(false);
                setTitle('');
                setContents('');
                setColor('GREY');
              }}
              onConfirm={editId === 0 ? handleAddCalendar : handleEditCalendar}
              startDate={selectedDates.start}
              endDate={selectedDates.end}
              setSelectedDates={setSelectedDates}
              title={title}
              setTitle={setTitle}
              contents={contents}
              setContents={setContents}
              color={color}
              setColor={setColor}
              isColor={
                title !== '' && selectedDates.start !== '' && selectedDates.end !== ''
                  ? (editId === 0 && selectedEvent?.startDate !== selectedDates.start) ||
                    selectedEvent?.endDate !== selectedDates.end ||
                    selectedEvent?.title !== title ||
                    selectedEvent?.content !== contents ||
                    selectedEvent?.color !== color
                  : false
              }
            />
          ) : isShowEventDetail && selectedEvent ? (
            <CalendarPrompt
              item={selectedEvent}
              onDelete={handleDeleteCalendar}
              onCancel={() => setIsShowEventDetail(false)}
              onEdit={() => {
                setSelectedDates({ start: selectedEvent.startDate, end: selectedEvent.endDate });
                setTitle(selectedEvent.title);
                setContents(selectedEvent.content);
                setColor(selectedEvent.color);
                setEditId(selectedEvent.calendarId);

                setIsShowEventDetail(false);
                setIsShowAddButton(true);
              }}
            />
          ) : isShowMoreDetail ? (
            <CalendarDatePrompt
              date={selectedDates.start}
              item={dateList}
              onCancel={() => setIsShowMoreDetail(false)}
              onCreate={() => setIsShowAddButton(true)}
              onDetail={loadDetailSchedule}
            />
          ) : (
            <></>
          )}
        </BackDrop>
      )}
    </div>
  );
};

export default CustomCalendar;
