const baseUrl = "https://pokeapi.co/api/v2/";

export const baseFetch = async <T = unknown>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  let res: Response;
  try {
    res = await fetch(`${baseUrl}${url}`, options);
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }

  if (!res.ok) {
    const errorText = await res.text();
    const errorMessage = errorText ? errorText : "Unknown error";
    throw new Error(`Error ${res.status}: ${res.statusText} - ${errorMessage}`);
  }

  const json = await res.json();

  return json;
};
