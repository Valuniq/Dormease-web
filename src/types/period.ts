export type PeriodResponse = {
  check: boolean;
  information: {
    periodId: number;
    startDate: string;
    endDate: string;
    periodType: string;
  };
};
