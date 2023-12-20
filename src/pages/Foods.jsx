import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { boxStyle } from "../utils/constants";
import { useEffect, useState } from "react";
import { FoodForm } from "../components/FoodForm";
import { getFoods, deleteFood } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Loader } from "../components/Loader";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";

export default function Foods() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const foods = useSelector((state) => state?.foods);
  const loading = useSelector((state) => state?.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px", background: "#f0f0f0", minHeight: "100vh" }}>
      <Typography variant="h3" gutterBottom style={{ color: "#333", marginBottom: "20px" }}>
        <span>
          Daily Calorie Intake <FastfoodIcon />
        </span>{" "}
        <Button variant="contained" onClick={handleOpen} style={{ marginLeft: "20px", background: "#4caf50", color: "white" }}>
          Add New Food
        </Button>
      </Typography>
      {loading && <Loader />}
      {!loading && (
        <>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {foods?.length > 0 ? (
              foods?.map((item) => (
                <FoodsBox key={item._id} obj={item} dispatch={dispatch} />
              ))
            ) : (
              <Typography variant="h5" gutterBottom style={{ color: "#666" }}>
                No data found. Please add some food data.
              </Typography>
            )}
          </div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={boxStyle}>
              <FoodForm onClose={handleClose} />
            </Box>
          </Modal>
        </>
      )}
    </div>
  );
}

function FoodsBox({ obj, dispatch }) {
  return (
    <Paper elevation={3} style={{ position: "relative", borderRadius: "8px", padding: "20px", margin: "10px", minWidth: "250px" }} key={obj._id}>
      <IconButton
        onClick={() => {
          dispatch(deleteFood(obj._id));
        }}
        style={{ position: "absolute", top: "10px", right: "10px", color: red[500] }}
      >
        <DeleteOutlineIcon />
      </IconButton>
      <Typography variant="h5" gutterBottom style={{ color: "#333" }}>
        {obj?.name}
      </Typography>
      <Typography variant="body1" gutterBottom style={{ color: "#666" }}>
        Carbohydrate: {obj?.carbohydrate}
      </Typography>
      <Typography variant="body1" gutterBottom style={{ color: "#666" }}>
        Fat: {obj?.fat}
      </Typography>
      <Typography variant="body1" gutterBottom style={{ color: "#666" }}>
        Protein: {obj?.protein}
      </Typography>
      <Typography variant="body1" gutterBottom style={{ color: "#666" }}>
        Calories: {obj?.calories}
      </Typography>
    </Paper>
  );
}
