import { BuildingAddDeleteResponse, BuildingSettingsResponse } from '@/types/building';

const accessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjAxOkFETUlOIiwiaXNzIjoiRG9ybWVhc2VWYWx1bmlRIiwiaWF0IjoxNzE2MjgwNTE4LCJleHAiOjE3MTYyODIzMTh9.6V6LdYt92tAZIOxxrAiRNK8L9e6bWk1GU44aZQ8PKKQ89hxyVugrqR3o0DjZQn_Qhx9jwj1xAsl-rXUCoU7TeA';

export const getBuildingLists = async (url: string): Promise<BuildingSettingsResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${accessToken}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Server responded with status ${res.status}`);
  }

  const data: BuildingSettingsResponse = await res.json();

  return data;
};

export const postAddBuilding = async (name: string, image: File | null): Promise<BuildingAddDeleteResponse> => {
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

  const data: BuildingAddDeleteResponse = await res.json();

  return data;
};

export const deleteBuilding = async (dormitoryId: number): Promise<BuildingAddDeleteResponse> => {
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

  const data: BuildingAddDeleteResponse = await res.json();

  return data;
};
