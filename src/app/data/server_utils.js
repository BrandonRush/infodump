export async function getFromServer(resource) {
  let response;
  try {
    response = await fetch(resource);
    response = response.text();
  } catch (error) {
    console.error(error);
    response = 'Not Found';
  }
  return response;
}
