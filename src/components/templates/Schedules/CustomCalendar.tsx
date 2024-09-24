import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';
import { EventInput } from '@fullcalendar/core';
import './Custom.css';
import CalendarPromptAdd from '@/components/organisms/Prompt/CalendarPrompt/CalendarPromptAdd';
import CalendarPrompt from '@/components/organisms/Prompt/CalendarPrompt/CalendarPrompt';
import BackDrop from '@/components/organisms/BackDrop/Backdrop';
import CalendarAddBtn from './CalendarAddBtn';

type Event = {
  title: string;
  contents?: string;
  start: string;
  end: string;
  color: string;
};

const CustomCalendar = () => {
  const [showAddButton, setShowAddButton] = useState(false);
  const [selectedDates, setSelectedDates] = useState({ start: '', end: '' });
  const [color, setColor] = useState('GREY');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [currentYear, setCurrentYear] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [isShowMoreDetail, setIsShowMoreDetail] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event>();
  const [hoveredDate, setHoveredDate] = useState<{
    date: Date;
    cell: HTMLElement;
  } | null>(null);

  const colors: { [key: string]: string } = {
    RED: '#E29696',
    YELLOW: '#FFD7A9',
    BLUE: '#A8C5EF',
    GREY: '#F3F3F3',
    GREEN: '#95ED8D',
  };

  const newEventData = [
    {
      calendarId: 1,
      title: '휴강휴강휴강휴강휴강휴강휴강',
      startDate: '2024-09-01',
      endDate: '2024-09-03',
      color: 'RED',
    },
    { calendarId: 2, title: '수강신청수강신청수강신청', startDate: '2024-09-15', endDate: '2024-09-18', color: 'BLUE' },
    { calendarId: 3, title: '종강', startDate: '2024-09-15', endDate: '2024-09-19', color: 'GREY' },
    { calendarId: 4, title: '종강', startDate: '2024-09-22', endDate: '2024-09-21', color: 'RED' },
    { calendarId: 5, title: '종강', startDate: '2024-09-24', endDate: '2024-09-24', color: 'RED' },
    { calendarId: 6, title: '종강', startDate: '2024-09-24', endDate: '2024-09-26', color: 'BLUE' },
    { calendarId: 7, title: '종강', startDate: '2024-09-24', endDate: '2024-09-26', color: 'GREEN' },
    { calendarId: 8, title: '종강', startDate: '2024-09-24', endDate: '2024-09-26', color: 'GREEN' },
  ];

  const truncateTitle = (title: string) => {
    return title.length > 10 ? title.slice(0, 10) + '...' : title;
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

  const [events, setEvents] = useState<EventInput[]>(
    newEventData.map((data) => ({
      title: truncateTitle(data.title),
      start: data.startDate,
      end: formatDateToString(data.endDate, 1),
      backgroundColor: colors[data.color],
      className: 'text-right rounded-8 cursor-pointer',
    })),
  );

  const addNewEvent = (newEvent: EventInput) => {
    setEvents((currentEvents) => [...currentEvents, newEvent]);
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

  const hasEventOnDate = (date: Date): boolean => {
    const dateString = formatDateToString(date, 0);

    return events.some((event) => {
      if (event.start !== undefined && event.end !== undefined) {
        const eventStart = event.start;
        const eventEnd = formatDateToString(String(event.end), -1);
        return (dateString >= eventStart && dateString <= eventEnd) || dateString === eventStart;
      }
      return true;
    });
  };

  return (
    <div className='w-[1290px]'>
      <FullCalendar
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
            click: () => {},
          },
          customMonth: {
            text: currentMonth,
            click: () => {},
          },
        }}
        datesSet={handleDatesSet}
        headerToolbar={{ start: 'customText', center: 'prev,customYear,customMonth,next', end: '' }}
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
          setShowAddButton(true);
        }}
        eventClick={(clickInfo) => {
          setSelectedEvent({
            title: clickInfo.event.title,
            start: clickInfo.event.startStr,
            end: clickInfo.event.endStr,
            color: clickInfo.event.backgroundColor,
          });
          setShowEventDetails(true);
        }}
      />
      {hoveredDate && (
        <div
          style={{
            position: 'absolute',
            top: hoveredDate.cell.getBoundingClientRect().top + window.scrollY + 30,
            left: hoveredDate.cell.getBoundingClientRect().left + 42,
            zIndex: 100,
            pointerEvents: 'none',
          }}
        >
          <CalendarAddBtn />
        </div>
      )}
      <div className='absolute top-0 left-0 z-50'>
        {showAddButton && (
          <BackDrop isOpen={showAddButton}>
            <CalendarPromptAdd
              onCancel={() => {
                setShowAddButton(false);
                setTitle('');
                setContents('');
                setColor('GREY');
              }}
              onConfirm={() => {
                addNewEvent({
                  title: title,
                  start: selectedDates.start,
                  end: selectedDates.end,
                  color: colors[color],
                  className: 'text-right rounded-8',
                });
                setShowAddButton(false);
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
        {showEventDetails && selectedEvent && (
          <BackDrop isOpen={showEventDetails}>
            <CalendarPrompt
              title={selectedEvent.title}
              contents={selectedEvent.contents}
              color={selectedEvent.color}
              startDate={selectedEvent.start}
              endDate={selectedEvent.end}
              onDelete={() => setShowEventDetails(false)}
              onCancel={() => setShowEventDetails(false)}
              onEdit={() => setShowEventDetails(false)}
            />
          </BackDrop>
        )}
        {showEventDetails && selectedEvent && (
          <BackDrop isOpen={showEventDetails}>
            <CalendarPrompt
              title={selectedEvent.title}
              contents={selectedEvent.contents}
              color={selectedEvent.color}
              startDate={selectedEvent.start}
              endDate={selectedEvent.end}
              onDelete={() => setShowEventDetails(false)}
              onCancel={() => setShowEventDetails(false)}
              onEdit={() => setShowEventDetails(false)}
            />
          </BackDrop>
        )}
        {isShowMoreDetail && (
          <BackDrop isOpen={showEventDetails}>
            <div onClick={() => setIsShowMoreDetail(false)}>아아</div>
          </BackDrop>
        )}
      </div>
    </div>
  );
};

export default CustomCalendar;
