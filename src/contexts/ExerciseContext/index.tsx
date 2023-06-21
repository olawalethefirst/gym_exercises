import { createContext, FunctionComponent, PropsWithChildren } from "react";

import useExercises, {
  CONTEXT_VALUE,
  updateBodyPart,
  updateBodyParts,
  updateExercises,
  updateExercisesOffset,
  updateLoadingExercises,
  updateSearchString,
} from "./useExercise";

const ExercisesContext = createContext<CONTEXT_VALUE>({} as CONTEXT_VALUE);

export const ExercisesProvider: FunctionComponent<PropsWithChildren> =
  function ({ children }) {
    const context = useExercises();

    return (
      <ExercisesContext.Provider value={context}>
        {children}
      </ExercisesContext.Provider>
    );
  };

export default ExercisesContext;
export {
  updateBodyPart,
  updateBodyParts,
  updateExercises,
  updateExercisesOffset,
  updateLoadingExercises,
  updateSearchString,
};
