// AddExerciseForm.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExercise } from "../redux/actions";
import { EXERCISEDATA } from "../utils/constants";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import './style/AddExerciseForm.css'; // Import your CSS file for additional styling

export const AddExerciseForm = ({ onClose }) => {
  const [formData, setData] = useState({
    name: "",
    duration: "",
    exerciseType: {
      exercise: "",
      caloriesPerMinute: "",
    },
  });
  const dispatch = useDispatch();

  const handleformInput = (e) => {
    const { value, name } = e.target;
    if (name === "exerciseType") {
      setData({
        ...formData,
        exerciseType: EXERCISEDATA.find((item) => item.exercise === value),
      });
    } else setData({ ...formData, [name]: value });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addExercise(formData));
    setData({
      name: "",
      duration: "",
      exerciseType: {
        exercise: "",
      },
    });
    onClose();
  };

  return (
    <>
      <form className="exercise-form" onSubmit={formSubmitHandler}>
        <TextField
          label="Name of the Exercise"
          variant="outlined"
          type="text"
          name="name"
          placeholder="Pull ups"
          value={formData.name}
          onChange={handleformInput}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Duration"
          variant="outlined"
          type="number"
          name="duration"
          min={1}
          placeholder="Duration in minutes"
          value={formData.duration}
          onChange={handleformInput}
          required
          fullWidth
          margin="normal"
        />
        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel>Exercise Type</InputLabel>
          <Select
            name="exerciseType"
            onChange={handleformInput}
            value={formData.exerciseType.exercise || ""}
            required
          >
            <MenuItem value="">Select Exercise Type</MenuItem>
            {EXERCISEDATA.map((item) => (
              <MenuItem key={item.exercise} value={item.exercise}>
                {item.exercise}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" type="submit" className="add-button">
          Add Exercise
        </Button>
      </form>
    </>
  );
};
