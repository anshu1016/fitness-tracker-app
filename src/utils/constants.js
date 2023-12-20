export const baseUrl = 'fitnesstracker.anushkajaiswal7.repl.co'
export const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  border: "2px solid #000",
  borderRadius: "10px",
  color: "#ddd",
  backgroundColor: "#111",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};
export const dispatchActionTypes = {
  GET_EXERCISES_SUCCESS: "GET_EXERCISES_SUCCESS",
  GET_EXERCISES_ERRORS: "GET_EXERCISES_ERRORS",

  GET_FOODS_SUCCESS: "GET_FOODS_SUCCESS",
  GET_FOODS_ERRORS: "GET_FOODS_ERRORS",

  GET_GOALS_SUCCESS: "GET_GOALS_SUCCESS",
  GET_GOALS_ERRORS: "GET_GOALS_ERRORS",

  ADD_EXERCISE_SUCCESS: "ADD_EXERCISE_SUCCESS",
  ADD_EXERCISE_ERROR: "ADD_EXERCISE_ERROR",

  ADD_FOOD_SUCCESS: "ADD_FOOD_SUCCESS",
  ADD_FOOD_ERROR: "ADD_FOOD_ERROR",

  ADD_GOAL_SUCCESS: "ADD_GOAL_SUCCESS",
  ADD_GOAL_ERROR: "ADD_GOAL_ERROR",

  DELETE_GOAL_SUCCESS:"DELETE_GOAL_SUCCESS",
  DELETE_FOOD_SUCCESS:"DELETE_FOOD_SUCCESS",
  DELETE_EXERCISE_SUCCESS:"DELETE_EXERCISE_SUCCESS",
 
  DELETE_GOAL_ERROR:"DELETE_GOAL_ERROR",
  DELETE_FOOD_ERROR:"DELETE_FOOD_ERROR",
  DELETE_EXERCISE_ERROR:"DELETE_EXERCISE_ERROR",

  SET_LOADING:"SET_LOADING"

}
export const EXERCISEDATA = [
  {
    exercise: 'Light Walking (2.0 mph)',
    caloriesPerMinute: 3,
  },
  {
    exercise: 'Brisk Walking (3.5-4.0 mph)',
    caloriesPerMinute: 4,
  },
  {
    exercise: 'Power Walking (5.0 mph+)',
    caloriesPerMinute: 6,
  },
  {
    exercise: 'Jogging (5.0 mph)',
    caloriesPerMinute: 7,
  },
  {
    exercise: 'Running (6.0 mph)',
    caloriesPerMinute: 9,
  },
  {
    exercise: 'Sprinting (8.0 mph+)',
    caloriesPerMinute: 12,
  },
  {
    exercise: 'Casual Biking (10 mph)',
    caloriesPerMinute: 4,
  },
  {
    exercise: 'Moderate Cycling (12-14 mph)',
    caloriesPerMinute: 8,
  },
  {
    exercise: 'Vigorous Cycling (16-20 mph+)',
    caloriesPerMinute: 12,
  },
  {
    exercise: 'Leisure Swimming',
    caloriesPerMinute: 5,
  },
  {
    exercise: 'Freestyle Swimming (moderate pace)',
    caloriesPerMinute: 7,
  },
  {
    exercise: 'Competitive Swimming',
    caloriesPerMinute: 10,
  },
  {
    exercise: 'Low-Intensity Strength Training',
    caloriesPerMinute: 3,
  },
  {
    exercise: 'Medium-Intensity Strength Training/Circuit Training',
    caloriesPerMinute: 6,
  },
  {
    exercise: 'High-Intensity-Strength Training or CrossFit',
    caloriesPerMinute: 8,
  },
  {
    exercise: 'Hatha Yoga (gentle)',
    caloriesPerMinute: 2,
  },
  {
    exercise: 'Power Yoga/Vinyasa Flow',
    caloriesPerMinute: 3,
  },
  {
    exercise: 'Hot Yoga/Bikram Yoga',
    caloriesPerMinute: 4,
  },
  {
    exercise: 'Ballroom Dancing',
    caloriesPerMinute: 3,
  },
  {
    exercise: 'Aerobic Dance/Zumba',
    caloriesPerMinute: 5,
  },
  {
    exercise: 'Hip-Hop/High-Intensity Dance',
    caloriesPerMinute: 7,
  },
];