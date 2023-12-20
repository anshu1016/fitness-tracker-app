import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddExerciseForm } from "../components/ExerciseForm";
import { Loader } from "../components/Loader";
import { deleteExercise, getExercises } from "../redux/actions";
import { boxStyle } from "../utils/constants";

export default function Exercise() {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state?.exercises);
  const loading = useSelector((state) => state?.loading);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getExercises());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px", background: "#f0f0f0", minHeight: "100vh" }}>
      <Typography variant="h3" gutterBottom style={{ color: "#333", marginBottom: "20px" }}>
        <span>
          Exercises <FitnessCenterIcon />
        </span>{" "}
        <Button variant="contained" onClick={handleOpen} style={{ marginLeft: "20px", background: "#4caf50", color: "white" }}>
          Add New Exercise
        </Button>
      </Typography>
      {loading && <Loader />}
      {!loading && (
        <>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {exercises?.length > 0 ? (
              exercises?.map((item) => (
                <ExerciseBox obj={item} key={item._id} dispatch={dispatch} />
              ))
            ) : (
              <Typography variant="h5" gutterBottom style={{ color: "#666" }}>
                No exercise data found. Please add some exercises.
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
              <AddExerciseForm onClose={handleClose} />
            </Box>
          </Modal>
        </>
      )}
    </div>
  );
}

function ExerciseBox({ obj, dispatch }) {
  return (
    <Paper elevation={3} style={{ borderRadius: "8px", padding: "20px", margin: "10px", minWidth: "250px" }} key={obj._id}>
      <Typography variant="h5" gutterBottom style={{ color: "#333" }}>
        {obj?.name}
        <DeleteOutlineIcon
          onClick={() => {
            dispatch(deleteExercise(obj._id));
          }}
          style={{ cursor: "pointer", marginLeft: "10px", color: "#d32f2f" }}
        />
      </Typography>
      <Typography variant="body1" gutterBottom style={{ color: "#666" }}>
        Duration: {obj?.duration}
      </Typography>
      <Typography variant="body1" gutterBottom style={{ color: "#666" }}>
        Total Calories burned: {obj?.totalCalories}
      </Typography>
    </Paper>
  );
}
