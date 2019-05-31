import axios from 'axios';

export async function getFromServer(resource) {
  console.log(resource);
  let response;
  try {
    response = await axios(resource);
    response = response.data;
  } catch (error) {
    console.error(error);
    response = 'Not Found';
  }
  return response;
}
