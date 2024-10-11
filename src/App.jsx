import { Box, Container, Typography } from "@mui/material";
import AddHabitForm from "./components/add-habit-form";
import HabitList from "./components/habit-list";
import { useEffect } from "react";
import useHabitStore from "./store/store";

const App = () => {
  const { fetchHabits } = useHabitStore();

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <Container>
      <Box>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Tracker
        </Typography>
        {/* Form */}
        <AddHabitForm />
        {/* List */}
        <HabitList />
        {/* Stats */}
      </Box>
    </Container>
  );
};

export default App;
