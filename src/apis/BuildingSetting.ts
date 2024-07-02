import { BASE_URL } from '@/constants/path';
import fetchWithToken from '@/utils/fetchWithToken';

//건물 사진 변경
export const postBuildingSettingImage = async (dormitoryId: number, image: File) => {
  const formData = new FormData();
  if (image !== null) {
    formData.append('image', image);
  } else {
    formData.append('image', new Blob([]));
  }

  const res = await fetchWithToken(`${BASE_URL}/api/v1/web/dormitory/setting/${dormitoryId}/image`, {
    method: 'POST',
    body: formData,
  });
  return res.json();
};
