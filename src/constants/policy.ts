// Notice, FAQ
export const POL_NOTIFICATIONS = {
  title: {
    maxLength: 50, // 제목의 최대 길이
  },
  description: {
    maxLength: 2000, // 내용의 최대 길이
  },
  fileName: {
    maxLength: 12,
  },
  file: {
    maxCount: 5, // 파일 선택의 최대 개수
  },
};

// Accounts
export const POL_ACCOUNTS = {
  password: {
    maxLength: 20,
    minLength: 6,
    defaultLabel: '영문 대문자와 소문자, 숫자, 특수문자 중 2가지 이상을 조합하여 6~20자로 입력해주세요.',
    messages: {
      invalid: '비밀번호가 기준에 맞지 않습니다.',
      mismatch: '비밀번호가 서로 일치하지 않습니다.',
    },
  },
  name: {
    defaultLabel: '*관리자명은 공지사항과 FAQ 작성 시 표시됩니다.',
    maxLength: 8, // 이름 최대 길이
  },
};

// Calendar
export const POL_CALENDAR = {
  title: {
    maxLength: 30, //제목의 최대 길이
  },
  description: {
    maxLength: 200, //내용의 최대 길이
  },
};

// 건물 관리 + 건물 설정
export const POL_DORM = {
  name: {
    maxLength: 10, //건물명 최대 길이
  },
  memo: {
    maxLength: 200, //메모 최대 길이
  },
};

// 기준 설정
export const POL_STANDARD = {
  pledgeWriting: {
    maxLength: 5000, // 입사 서약서 최대 글자수
  },
};
