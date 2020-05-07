import { handleJsonResponse, handleError } from "./apiUtils";

const baseUrl = "api/settings";

export async function getAuthSettings() {
  try {
    const response = await fetch(`${baseUrl}/auth`, {
      headers: { Accept: "application/json" },
    });
    return handleJsonResponse(response);
  } catch (error) {
    handleError(error);
  }
}
