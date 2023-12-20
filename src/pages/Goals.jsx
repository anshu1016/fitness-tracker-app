import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoalsForm } from "../components/GoalForm";
import { deleteGoal, getGoals } from "../redux/actions";
import { boxStyle } from "../utils/constants";
import { Loader } from "../components/Loader";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { createDate } from "../utils/utilityFunctions";

export default function Goals() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const goals = useSelector((state) => state?.goals);
  const loading = useSelector((state) => state?.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoals());
  }, [dispatch]);

  return (
    <div style={{ padding: "20px", background: "#f0f0f0", minHeight: "100vh" }}>
      <Typography variant="h3" gutterBottom style={{ color: "#333", marginBottom: "20px" }}>
        <span>
          Goals <TrackChangesIcon />
        </span>{" "}
        <Button
          variant="contained"
          onClick={handleOpen}
          style={{ marginLeft: "20px", background: "#4caf50", color: "white" }}
        >
          Add New Goal
        </Button>
      </Typography>
      {loading && <Loader />}
      {!loading && (
        <>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {goals?.length > 0 ? (
              goals?.map((item) => <TargetBox key={item._id} obj={item} dispatch={dispatch} />)
            ) : (
              <Typography variant="h5" gutterBottom style={{ color: "#666" }}>
                No data found. Please add some goals.
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
              <GoalsForm onClose={handleClose} />
            </Box>
          </Modal>
        </>
      )}
    </div>
  );
}

function TargetBox({ obj, dispatch }) {
  const date = createDate(obj?.targetDate);
  return (
    <Paper elevation={3} style={{ position: "relative", borderRadius: "8px", padding: "20px", margin: "10px", minWidth: "250px" }} key={obj._id}>
      <IconButton
        onClick={() => {
          dispatch(deleteGoal(obj._id));
        }}
        style={{ position: "absolute", top: "10px", right: "10px", color: red[500] }}
      >
        <DeleteOutlineIcon />
      </IconButton>
      <Typography variant="h5" gutterBottom style={{ color: "#333" }}>
        {obj?.name}
      </Typography>
      {obj.description && (
        <Typography variant="body1" gutterBottom style={{ color: "#666" }}>
          Description: {obj.description}
        </Typography>
      )}
      <Typography variant="body1" gutterBottom style={{ color: "#666" }}>
        Target Date: {date}
      </Typography>
      <Typography variant="body1" gutterBottom style={{ color: "#666" }}>
        Target Calories: {obj?.targetCalories}
      </Typography>
    </Paper>
  );
}
