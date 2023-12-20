import React, { useEffect } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import { getExercises, getFoods, getGoals } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state?.exercises);
  const goals = useSelector((state) => state?.goals);
  const foods = useSelector((state) => state?.foods);
  const loading = useSelector((state) => state?.loading);

  useEffect(() => {
    dispatch(getGoals());
    dispatch(getFoods());
    dispatch(getExercises());
  }, [dispatch]);

  const totalCaloriesConsumed = foods?.reduce((acc, curr) => curr.calories + acc, 0);
  const caloriesBurned = exercises?.reduce((acc, curr) => curr.totalCalories + acc, 0);
  const totalCaloriesGoal = goals?.reduce((acc, curr) => curr?.targetCalories || 0 + acc, 0);
  const remainingCalories = totalCaloriesGoal + totalCaloriesConsumed - caloriesBurned;

  return (
    <div>
      <h1>Dashboard</h1>

      {loading && <Loader />}
      {!loading && (
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <Paper className="dashboard-container">
              <RestaurantIcon />
              <Typography variant="h5">
                Total Calories intake: {totalCaloriesConsumed}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className="dashboard-container">
              <WhatshotIcon />
              <Typography variant="h5">
                Total Calories burned: {caloriesBurned}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className="dashboard-container">
              <TrackChangesIcon />
              <Typography variant="h5">
                Total Calories Goal: {totalCaloriesGoal}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className="dashboard-container">
              <SportsMartialArtsIcon />
              <Typography variant="h5">
                Total Calories remaining: {remainingCalories}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Home;
