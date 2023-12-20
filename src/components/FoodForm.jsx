import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../redux/actions";
import { TextField, Button } from "@mui/material";
import './style/FoodForm.css'; // Import your CSS file for additional styling

export function FoodForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    protein: "",
    calories: "",
    fat: "",
    carbohydrate: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addFood(formData));
    setFormData({
      name: "",
      protein: "",
      calories: "",
      fat: "",
      carbohydrate: "",
    });
    onClose();
  };

  return (
    <>
      <form className="food-form" onSubmit={onSubmitHandler}>
        <hr className="separator"></hr>
        <TextField
          label="Food name"
          variant="outlined"
          type="text"
          id="name"
          name="name"
          required
          onChange={onChangeHandler}
          value={formData.name}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Calories"
          variant="outlined"
          type="number"
          id="calories"
          name="calories"
          required
          onChange={onChangeHandler}
          value={formData.calories}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Protein"
          variant="outlined"
          type="number"
          id="protein"
          name="protein"
          required
          onChange={onChangeHandler}
          value={formData.protein}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Carbohydrate"
          variant="outlined"
          type="number"
          id="carbohydrate"
          name="carbohydrate"
          required
          onChange={onChangeHandler}
          value={formData.carbohydrate}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Fat"
          variant="outlined"
          type="number"
          id="fat"
          name="fat"
          required
          onChange={onChangeHandler}
          value={formData.fat}
          fullWidth
          margin="normal"
        />

        <Button variant="contained" type="submit" className="add-button">
          Add Meal
        </Button>
        <hr className="separator"></hr>
      </form>
    </>
  );
}
