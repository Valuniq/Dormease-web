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

export type CalendarRequest = {
  startDate: string;
  endDate: string;
  title: string;
  content: string;
  color: string;
};

export type CalendarDateResponseInformation = {
  calendarId: number;
  title: string;
  color: string;
};

export type CalendarDetailResponseInformation = {
  calendarId: number;
  startDate: string;
  endDate: string;
  title: string;
  content: string;
  color: string;
};

export const colorList = [
  { name: 'GREY', value: 'bg-gray-grayscale10', text: 'text-gray-grayscale10' },
  { name: 'RED', value: 'bg-red-red10', text: 'text-red-red10' },
  { name: 'GREEN', value: 'bg-green-green10', text: 'text-green-green10' },
  { name: 'YELLOW', value: 'bg-orange-orange', text: 'text-orange-orange' },
  { name: 'BLUE', value: 'bg-blue-blue20', text: 'text-blue-blue20' },
];
