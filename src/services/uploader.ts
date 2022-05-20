import axios from 'axios';

export async function uploadFile(file: Blob) {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const { data } = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    return { url: null };
  }
}
