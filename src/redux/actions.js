import { dispatchActionTypes } from "../utils/constants";
import { toast } from "react-hot-toast";
import {
  addExerciseDataService,
  getExercisesService,
  deleteExerciseService,
} from "../services/exerciseServices";
import {
  addFoodDataService,
  getFoodsService,
  deleteFoodService,
} from "../services/foodServices";
import {
  addGoalDataService,
  getGoalService,
  deleteGoalService,
} from "../services/goalServices";
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
} = dispatchActionTypes;

export const addExercise = (exerciseData) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });
    const response = await addExerciseDataService(exerciseData);

    dispatch({
      type: ADD_EXERCISE_SUCCESS,
      payload: response.data,
    });
    toast.success(response.message);
  } catch (error) {
    console.error(error);
    dispatch({ type: ADD_EXERCISE_ERROR, payload: error });
    throw error;
  }
};
export const addFood = (FoodData) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });
    const response = await addFoodDataService(FoodData);

    dispatch({
      type: ADD_FOOD_SUCCESS,
      payload: response.data,
    });
    toast.success(response.message);
  } catch (error) {
    console.error(error);
    dispatch({ type: ADD_FOOD_ERROR, payload: error });
    throw error;
  }
};
export const addGoal = (goalData) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });
    const response = await addGoalDataService(goalData);
    dispatch({
      type: ADD_GOAL_SUCCESS,
      payload: response.data,
    });
    toast.success(response.message);
  } catch (error) {
    console.error(error);
    dispatch({ type: ADD_GOAL_ERROR, payload: error });
    throw error;
  }
};
export const getExercises = () => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });
    const response = await getExercisesService();
    console.log(response);
    dispatch({
      type: GET_EXERCISES_SUCCESS,
      payload: response?.data,
    });
  
  } catch (error) {
    console.error(error);
    dispatch({ type: GET_EXERCISES_ERRORS, payload: error });
    throw error;
  }
};
export const getFoods = () => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });
    const response = await getFoodsService();
    console.log(response);
    dispatch({
      type: GET_FOODS_SUCCESS,
      payload: response?.data,
    });
  
  } catch (error) {
    console.error(error);
    dispatch({ type: GET_FOODS_ERRORS, payload: error });
    throw error;
  }
};
export const getGoals = () => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });
    const response = await getGoalService();
    console.log(response);
    dispatch({
      type: GET_GOALS_SUCCESS,
      payload: response?.data,
    });
   
  } catch (error) {
    console.error(error);
    dispatch({ type: GET_GOALS_ERRORS, payload: error });
    throw error;
  }
};
export const deleteExercise = (id) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });
    const response = await deleteExerciseService(id);

    if (response) {
      dispatch({
        type: DELETE_EXERCISE_SUCCESS,
        payload: response.data.updatedData,
      });
      toast.success(response.message);
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: DELETE_EXERCISE_ERROR,
      payload: error,
    });
  }
};
export const deleteFood = (id) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });
    const response = await deleteFoodService(id);

    if (response) {
      dispatch({
        type: DELETE_FOOD_SUCCESS,
        payload: response.data.updatedData,
      });
      toast.success(response.message);
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: DELETE_FOOD_ERROR,
      payload: error,
    });
  }
};
export const deleteGoal = (id) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING });
    const response = await deleteGoalService(id);

    if (response) {
      dispatch({
        type: DELETE_GOAL_SUCCESS,
        payload: response.data.updatedData,
      });
      toast.success(response.message);
    }
  } catch (error) {
    console.error(error);
    dispatch({
      type: DELETE_GOAL_ERROR,
      payload: error,
    });
  }
};
