import { withdrawalLists } from '@/types/withdrawal';

const accessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaG9uaWw6VVNFUiIsImlzcyI6IkRvcm1lYXNlVmFsdW5pUSIsImlhdCI6MTcxNTQ1MTgyNSwiZXhwIjoxNzE1NDUzNjI1fQ.lcLyflbO6CnAqGvyeJxK3_Ntl9_LdIAjdASKdcD40MRyDtk-F2_zQt_raXnVGn0dTNaaK97_2H2OxEXqtnzOEg';

export const getWithdrawalLists = async (page: number): Promise<withdrawalLists> => {
  const res = await fetch(`/api/v1/web/users/management/delete?page=${page}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Server responded with status ${res.status}`);
  }

  const data: withdrawalLists = await res.json();

  return data;
};

export const getWithdrawalSearch = async (page: number, keyword: string): Promise<withdrawalLists> => {
  const res = await fetch(`/api/v1/web/users/management/delete/search?page=${page}&keyword=${keyword}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Server responded with status ${res.status}`);
  }

  const data: withdrawalLists = await res.json();

  return data;
};
