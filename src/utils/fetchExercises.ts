import { fetchData } from "./";
import { Exercise } from "../types";
import withImageUriCheckAsync from "./withImageUriCheckAsync";
import withRehydrateDatabaseAsync from "./withRehydrateDatabaseAsync";

async function fetchExercises(exercisesUrl: string) {
  let exercisesData: Exercise[] = await fetchData(exercisesUrl);

  if (exercisesData.length > 0) {
    // test if image urls have changed using a raandom exercise from exercises result
    // the randomness is just mundane addition, for in case the start switching out images URL randomly
    const randomIndex = Math.floor(Math.random() * exercisesData.length);
    await withImageUriCheckAsync(
      exercisesData[randomIndex].gifUrl,
      async (isValidUri) => {
        if (!isValidUri) {
          await withRehydrateDatabaseAsync(async () => {
            exercisesData = await fetchData(exercisesUrl);
          })();
        }
      }
    )();
  }

  return exercisesData;
}

export default fetchExercises;
