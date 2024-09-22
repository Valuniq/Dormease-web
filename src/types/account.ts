export type AdminAccountResponse = {
  check: boolean;
  information: {
    schoolName: string;
    loginId: string;
    adminName: string;
  };
};

export interface SecurityCodeResponse {
  check: boolean;
  information: {
    checked: boolean;
  };
}
