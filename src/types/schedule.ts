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

export const colorList: { [key: string]: string } = {
  GREY: '#E6E6E6',
  RED: '#E29696',
  GREEN: '#95ED8D',
  YELLOW: '#FFD7A9',
  BLUE: '#A8C5EF',
};
