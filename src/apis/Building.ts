import { buildingAddDelete, buildingLists } from '@/types/building';

const accessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaG9uaWw6VVNFUiIsImlzcyI6IkRvcm1lYXNlVmFsdW5pUSIsImlhdCI6MTcxNTk2NDkwNCwiZXhwIjoxNzE1OTY2NzA0fQ.zjG2LC5GPKVM69P9oCtD59VpP2KE1HnvTzz0NGX7-YrtMu23mRbWaTQt-GWnxwG5NnvetGVnDQIuyPSqP6oSNw';

export const getBuildingLists = async (url: string): Promise<buildingLists> => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
  });
  if (!res.ok) {
    throw new Error(`Server responded with status ${res.status}`);
  }
  return res.json();
};

export const postAddBuilding = async (name: string, image: File | null): Promise<buildingAddDelete> => {
  const formData = new FormData();
  formData.append('registerDormitoryReq', new Blob([JSON.stringify({ name: name })], { type: 'application/json' }));
  if (image !== null) {
    formData.append('image', image);
  } else {
    formData.append('image', new Blob([]));
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/setting`, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${accessToken}`,
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error(`Server responded with status ${res.status}`);
  }

  const data = await res.json();

  console.log(data);
  return data;
};

export const deleteBuilding = async (dormitoryId: number): Promise<buildingAddDelete> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/web/dormitory/setting/${dormitoryId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Server responded with status ${res.status}`);
  }

  const data = await res.json();

  return data;
};
