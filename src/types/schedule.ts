export type CalendarResponse = {
  check: boolean;
  information: CalendarResponseInformation[];
};

export type CalendarResponseInformation = {
  calendarId: number;
  startDate: string;
  endDate: string;
  title: string;
  color: string;
};

export type TDateResponse = {
  calendarId: number;
  title: string;
  color: string;
};

export type TDayResponse = {
  calendarId: number;
  startDate: string;
  endDate: string;
  title: string;
  content: string;
  color: string;
};

export const colorList = [
  { name: 'GREY', value: 'bg-gray-grayscale10' },
  { name: 'RED', value: 'bg-red-red10' },
  { name: 'GREEN', value: 'bg-green-green10' },
  { name: 'YELLOW', value: 'bg-orange-orange' },
  { name: 'BLUE', value: 'bg-blue-blue20' },
];
