import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import useHabitStore from "../store/store";

const AddHabitForm = () => {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState("daily");
  const { addHabit } = useHabitStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addHabit(name, frequency);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          placeholder="Enter habit Name"
        />

        <FormControl fullWidth>
          <InputLabel>Frequency</InputLabel>
          <Select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            label="Age"
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Add Habit
        </Button>
      </Box>
    </form>
  );
};

export default AddHabitForm;
