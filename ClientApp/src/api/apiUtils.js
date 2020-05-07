export async function handleJsonResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Error calling api - ${response.statusText}`);
  }
}

export async function handleEmptyResponse(response) {
  if (response.ok) {
    return true;
  } else {
    throw new Error(`Error calling api - ${response.statusText}`);
  }
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}