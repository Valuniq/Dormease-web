import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import { useState } from 'react';
import CalendarPromptAdd from '../Prompt/CalendarPrompt/CalendarPromptAdd';
import { EventInput } from '@fullcalendar/core';
import './Custom.css';
import CalendarPrompt from '../Prompt/CalendarPrompt/CalendarPrompt';
import { EventClickArg } from '@fullcalendar/core';

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
  const [color, setColor] = useState('gray');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  const [currentYear, setCurrentYear] = useState('');
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event>();

  const colors: { [key: string]: string } = {
    red: '#E29696',
    orange: '#FFD7A9',
    blue: '#A8C5EF',
    gray: '#F3F3F3',
    green: '#95ED8D',
  };

  const newEventData = [
    { id: 1, title: '휴강', start: '2024-05-01', end: '2024-05-03', backgroundColor: 'red' },
    { id: 2, title: '수강신청', start: '2024-05-15', end: '2024-05-18', backgroundColor: 'blue' },
    { id: 3, title: '종강', start: '2024-05-15', end: '2024-06-01', backgroundColor: 'orange' },
  ];

  const [events, setEvents] = useState<EventInput[]>(
    newEventData.map((data) => ({
      title: data.title,
      start: data.start,
      end: data.end,
      backgroundColor: colors[data.backgroundColor],
      className: 'text-right rounded-8',
    })),
  );

  const addNewEvent = (newEvent: EventInput) => {
    setEvents((currentEvents) => [...currentEvents, newEvent]);
  };

  const adjustDate = (dateString: string, days: number): string => {
    const date = new Date(dateString);
    date.setDate(date.getDate() + days);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

  const handleDatesSet = (dateInfo: any) => {
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

    setCurrentYear('2024년'); //연도 받아오는거 수정 필요
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        customButtons={{
          customMonth: {
            text: '일정 관리 - ' + currentMonth + '월',
            click: () => {},
          },
          customYear: {
            text: currentYear,
            click: () => {},
          },
        }}
        datesSet={handleDatesSet}
        headerToolbar={{ start: 'customMonth, prev,next', center: 'customYear', end: '' }}
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
      <div className='absolute top-0 left-0 z-10'>
        {showAddButton && (
          <CalendarPromptAdd
            onCancel={() => {
              setShowAddButton(false);
              setTitle('');
              setContents('');
              setColor('gray');
            }}
            onConfirm={() => {
              const adjustedEndDate = adjustDate(selectedDates.end, 1);

              addNewEvent({
                title: title,
                start: selectedDates.start,
                end: adjustedEndDate,
                color: colors[color],
                className: 'text-right rounded-8',
              });
              setShowAddButton(false);
              setTitle('');
              setContents('');
              setColor('gray');
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
        )}
        {showEventDetails && selectedEvent && (
          <CalendarPrompt
            title={selectedEvent.title}
            contents={selectedEvent.contents}
            color={selectedEvent.color}
            startDate={selectedEvent.start}
            endDate={adjustDate(selectedEvent.end, -1)}
            onDelete={() => setShowEventDetails(false)}
            onCancel={() => setShowEventDetails(false)}
            onEdit={() => setShowEventDetails(false)}
          />
        )}
      </div>
    </div>
  );
};

export default CustomCalendar;
