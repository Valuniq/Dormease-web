const accessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwaG9uaWw6VVNFUiIsImlzcyI6IkRvcm1lYXNlVmFsdW5pUSIsImlhdCI6MTcxNTg3MDE2OCwiZXhwIjoxNzE1ODcxOTY4fQ.9nhY78ME6CoTpBdkUb3RWNtxX21UCw6h4qqDnOIwom17uc06Fz_2GoykaeREC25NxN7w1sW4yNX5dGE4YQyFTQ';

export const getBuildingLists = async (url: string) => {
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

export const postAddBuilding = async (name: string, image: File | null): Promise<{ message: string }> => {
  const formData = new FormData();
  formData.append('registerDormitoryReq', new Blob([JSON.stringify({ name: name })], { type: 'application/json' }));
  if (image !== null) {
    formData.append('image', image);
  } else {
    formData.append('image', new Blob([]));
  }

  const res = await fetch(`/api/v1/web/dormitory/setting`, {
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

export const deleteBuilding = async (dormitoryId: number): Promise<{ message: string }> => {
  const res = await fetch(`/api/v1/web/dormitory/setting/${dormitoryId}`, {
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
