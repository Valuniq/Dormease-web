import { withdrawalLists } from '@/types/withdrawal';

const accessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaG9uaWw6VVNFUiIsImlzcyI6IkRvcm1lYXNlVmFsdW5pUSIsImlhdCI6MTcxNTk2MDI1OCwiZXhwIjoxNzE1OTYyMDU4fQ.mqaEjf0Z698RoxpLo0eVPJ7PVh8EJTKRKhjX43yxnTIRtpjwEZ7vObDKjXK1hWMLeE0l5ULJ-YVaksKaw6v5mQ';

export const getWithdrawalLists = async (page: number): Promise<withdrawalLists> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/users/management/delete?page=${page}`, {
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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/users/management/delete/search?page=${page}&keyword=${keyword}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${accessToken}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Server responded with status ${res.status}`);
  }

  const data: withdrawalLists = await res.json();

  return data;
};
