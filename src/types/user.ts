export interface UserLoginRequest {
  loginId: string;
  password: string;
}

export interface UserLoginResponse {
  check: boolean;
  information: {
    accessToken: string;
    refreshToken: string;
    userType: string;
  };
}
