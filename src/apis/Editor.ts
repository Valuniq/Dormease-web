import { BASE_URL } from '@/constants/path';
import fetchWithTokens from '@/utils/fetchWithTokens';

export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append('image', file);

  const response = await fetchWithTokens(`${BASE_URL}/api/v1/web/images`, {
    method: 'POST',
    body: formData,
  });

  return response;
};

export const deleteImage = async (imageUrlList: string[]) => {
  const response = await fetchWithTokens(`${BASE_URL}/api/v1/web/images`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ imageUrlList }),
  });

  return response;
};
