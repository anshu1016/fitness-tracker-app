import { useDispatch } from "react-redux";
import { useState } from "react";
import { addGoal } from "../redux/actions";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import './style/GoalsForm.css'; // Import your CSS file for additional styling

export function GoalsForm({ onClose }) {
  const [formData, setData] = useState({
    name: "",
    description: "",
    targetDate: "",
    targetCalories: "",
    status: "In Progress",
  });
  const dispatch = useDispatch();

  const handleformInput = (e) => {
    const { value, name } = e.target;
    setData({ ...formData, [name]: value });
  };

  function onSubmitHandler(e) {
    e.preventDefault();
    console.log(formData);
    dispatch(addGoal(formData));
    setData({
      name: "",
      description: "",
      targetDate: "",
      targetCalories: "",
      status: "",
    });
    onClose();
  }

  return (
    <>
      <form className="goals-form" onSubmit={onSubmitHandler}>
        <TextField
          label="Name"
          variant="outlined"
          placeholder="Lose weight"
          name="name"
          onChange={handleformInput}
          value={formData.name}
          required
        />
        <TextField
          label="Description"
          variant="outlined"
          placeholder="I will lose 10 kgs using a diet plan"
          name="description"
          onChange={handleformInput}
          value={formData.description}
        />
        <TextField
          label="Target Date"
          variant="outlined"
          type="date"
          name="targetDate"
          min="2023-10-01"
          onChange={handleformInput}
          value={formData.targetDate}
          required
        />
        <TextField
          label="Target Calories to Burn"
          variant="outlined"
          type="number"
          min={10}
          name="targetCalories"
          onChange={handleformInput}
          value={formData.targetCalories}
          required
        />
        <FormControl variant="outlined" className="status-select">
          <InputLabel>Status</InputLabel>
          <Select name="status" value={formData.status} onChange={handleformInput} label="Status" required>
            <MenuItem value={"In Progress"}>In progress</MenuItem>
            <MenuItem value={"Achieved"}>Achieved</MenuItem>
            <MenuItem value={"Abandoned"}>Abandoned</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" type="submit" className="add-button">
          Add New Goal
        </Button>
      </form>
    </>
  );
}
