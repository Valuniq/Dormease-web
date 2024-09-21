export type AdminAccountResponse = {
  check: boolean;
  information: {
    schoolName: string;
    loginId: string;
    adminName: string;
  };
};
