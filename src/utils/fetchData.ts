export const rehydrateDatabaseEndpoint =
  "https://x8ki-letl-twmt.n7.xano.io/api:TTZQbLxw/rehydrationStatus";
export const bodyPartsEndpoint =
  "https://x8ki-letl-twmt.n7.xano.io/api:TTZQbLxw/body_parts";
export const allExercisesEndpoint =
  "https://x8ki-letl-twmt.n7.xano.io/api:TTZQbLxw/exercises";
export const exerciseBaseUrl =
  "https://x8ki-letl-twmt.n7.xano.io/api:TTZQbLxw/exercise";
export const bodyPartExercisesBaseUrl =
  "https://x8ki-letl-twmt.n7.xano.io/api:TTZQbLxw/bodyPartExercises";
export const equipmentExercisesBaseUrl =
  "https://x8ki-letl-twmt.n7.xano.io/api:TTZQbLxw/equipmentExercises";
export const searchExercisesBaseUrl =
  "https://x8ki-letl-twmt.n7.xano.io/api:TTZQbLxw/searchExercises";
export const targetExercisesBaseUrl =
  "https://x8ki-letl-twmt.n7.xano.io/api:TTZQbLxw/targetExercises";

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY as string,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
} as const;

const fetchData = async (url: string, fetchOptions?: RequestInit) => {
  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    throw new Error("An error occured, status: " + response.status);
  }

  const data = await response.json();
  return data;
};

export default fetchData;
