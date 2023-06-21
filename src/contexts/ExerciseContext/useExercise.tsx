import { useReducer, Dispatch } from "react";

import { Exercise } from "../../types";

// TYPES
interface BaseAction {
  type: string;
  payload: {
    [key: string]: any;
  };
}
// ACTION OBJECTS
interface UpdateBodyPartA extends BaseAction {
  type: typeof UPDATE_BODY_PART;
  payload: {
    bodyPart: string;
  };
}
interface UpdateExercisesOffsetA extends BaseAction {
  type: typeof UPDATE_EXERCISES_OFFSET;
  payload: {
    exercisesOffset: number;
  };
}
interface UpdateExercisesA {
  type: typeof UPDATE_EXERCISES;
  payload: {
    exercises: Exercise[];
  };
}
interface UpdateBodyPartsA {
  type: typeof UPDATE_BODY_PARTS;
  payload: {
    bodyParts: string[];
  };
}
interface UpdateLoadingExercisesA {
  type: typeof UPDATE_LOADING_EXERCISES;
  payload: {
    loadingExercises: boolean;
  };
}
interface UpdateSearchStringA {
  type: typeof UPDATE_SEARCH_STRING;
  payload: {
    searchString: string;
  };
}
export type Action =
  | UpdateBodyPartA
  | UpdateExercisesOffsetA
  | UpdateExercisesA
  | UpdateBodyPartsA
  | UpdateLoadingExercisesA
  | UpdateSearchStringA;

// CONTEXT VALUE
export interface CONTEXT_VALUE {
  state: typeof initialExerciseState;
  dispatch: Dispatch<Action>;
}

// INITIAL STATE
const initialBodyPart = "all";
const initialBodyParts = ["search", initialBodyPart];
const initialExerciseState = {
  loadingExercises: false,
  exercises: [
    // ...exercisesJSON
  ] as Exercise[],
  bodyPart: initialBodyPart,
  exercisesOffset: 0,
  bodyParts: initialBodyParts,
  searchString: "",
};

// ACTIONS TYPES
const UPDATE_BODY_PART = "UPDATE_BODY_PART";
const UPDATE_EXERCISES_OFFSET = "UPDATE_EXERCISES_OFFSET";
const UPDATE_EXERCISES = "UPDATE_EXERCISES";
const UPDATE_BODY_PARTS = "UPDATE_BODY_PARTS";
const UPDATE_LOADING_EXERCISES = "UPDATE_LOADING_EXERCISES";
const UPDATE_SEARCH_STRING = "UPDATE_SEARCH_STRING";
// ACTION DISPATCHERS
export const updateBodyPart =
  (dispatch: React.Dispatch<Action>) => (bodyPart: string) => {
    dispatch({
      type: UPDATE_BODY_PART,
      payload: {
        bodyPart,
      },
    });
  };
export const updateExercisesOffset =
  (dispatch: React.Dispatch<Action>) => (exercisesOffset: number) => {
    dispatch({
      type: UPDATE_EXERCISES_OFFSET,
      payload: {
        exercisesOffset,
      },
    });
  };
export const updateExercises =
  (dispatch: React.Dispatch<Action>) => (exercises: Exercise[]) => {
    dispatch({
      type: UPDATE_EXERCISES,
      payload: {
        exercises,
      },
    });
  };
export const updateBodyParts =
  (dispatch: React.Dispatch<Action>) => (bodyParts: string[]) => {
    dispatch({
      type: UPDATE_BODY_PARTS,
      payload: {
        bodyParts,
      },
    });
  };
export const updateLoadingExercises =
  (dispatch: React.Dispatch<Action>) => (loadingExercises: boolean) => {
    dispatch({
      type: UPDATE_LOADING_EXERCISES,
      payload: {
        loadingExercises,
      },
    });
  };
export const updateSearchString =
  (dispatch: React.Dispatch<Action>) => (searchString: string) => {
    dispatch({
      type: UPDATE_SEARCH_STRING,
      payload: {
        searchString,
      },
    });
  };

// REDUCER
const exerciseReducer = (
  state: typeof initialExerciseState,
  action: Action
): typeof initialExerciseState => {
  switch (action.type) {
    case UPDATE_EXERCISES_OFFSET:
      return {
        ...state,
        exercisesOffset: action.payload.exercisesOffset,
      };
    case UPDATE_BODY_PART:
      return {
        ...state,
        bodyPart: action.payload.bodyPart,
      };
    case UPDATE_BODY_PARTS:
      return {
        ...state,
        bodyParts: initialBodyParts.concat(action.payload.bodyParts),
      };
    case UPDATE_EXERCISES:
      return {
        ...state,
        exercises: action.payload.exercises,
      };
    case UPDATE_LOADING_EXERCISES:
      return {
        ...state,
        loadingExercises: action.payload.loadingExercises,
      };
    case UPDATE_SEARCH_STRING:
      return {
        ...state,
        searchString: action.payload.searchString,
      };
    default:
      return state;
  }
};

const useExercises = function (): CONTEXT_VALUE {
  const [exercisesState, dispatch] = useReducer(
    exerciseReducer,
    initialExerciseState
  );

  return { state: exercisesState, dispatch };
};

export default useExercises;
