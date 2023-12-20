import { dispatchActionTypes } from '../utils/constants'

const {
  SET_LOADING,

  GET_EXERCISES_SUCCESS,
  GET_EXERCISES_ERRORS,

  GET_FOODS_SUCCESS,
  GET_FOODS_ERRORS,

  GET_GOALS_SUCCESS,
  GET_GOALS_ERRORS,

  ADD_EXERCISE_SUCCESS,
  ADD_EXERCISE_ERROR,

  ADD_FOOD_SUCCESS,
  ADD_FOOD_ERROR,
  ADD_GOAL_SUCCESS,
  ADD_GOAL_ERROR,
  DELETE_GOAL_SUCCESS,
  DELETE_FOOD_SUCCESS,
  DELETE_EXERCISE_SUCCESS,

  DELETE_GOAL_ERROR,
  DELETE_FOOD_ERROR,
  DELETE_EXERCISE_ERROR,

} = dispatchActionTypes

const initialState = {
  foods: [],
  goals: [],
  exercises: [],
  loading: false,
  error: null
}

const fitnessReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case SET_LOADING:
      return { ...state, loading: true }
    case GET_EXERCISES_SUCCESS:
      return { ...state, exercises: payload, loading: false }
    case GET_GOALS_SUCCESS:
      return { ...state, goals: payload, loading: false }
    case GET_FOODS_SUCCESS:
      return { ...state, foods: payload, loading: false }
    case ADD_EXERCISE_SUCCESS:
      return { ...state, exercises: [...state.exercises, payload], loading: false }
    case ADD_FOOD_SUCCESS:
      return { ...state, foods: [...state.foods, payload], loading: false }
    case ADD_GOAL_SUCCESS:
      return { ...state, goals: [...state.goals, payload], loading: false }
    case DELETE_EXERCISE_SUCCESS:
      return { ...state, exercises: payload, loading: false }
    case DELETE_GOAL_SUCCESS:
      return { ...state, goals: payload, loading: false }
    case DELETE_FOOD_SUCCESS:
      return { ...state, foods: payload, loading: false }
    case GET_EXERCISES_ERRORS:
      return { ...state, loading: false, error: payload }
    case GET_FOODS_ERRORS:
      return { ...state, loading: false, error: payload }
    case GET_GOALS_ERRORS:
      return { ...state, loading: false, error: payload }
    case ADD_EXERCISE_ERROR:
      return { ...state, loading: false, error: payload }
    case ADD_FOOD_ERROR:
      return { ...state, loading: false, error: payload }
    case ADD_GOAL_ERROR:
      return { ...state, loading: false, error: payload }
    case DELETE_EXERCISE_ERROR:
      return { ...state, loading: false, error: payload };
    case DELETE_FOOD_ERROR:
      return { ...state, loading: false, error: payload }
    case DELETE_GOAL_ERROR:
      return { ...state, loading: false, error: payload }
    default:
      break;
  }
}

export { fitnessReducer }