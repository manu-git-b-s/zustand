import { Box, Container, Typography } from "@mui/material";
import useHabitStore from "./store/store";

const App = () => {
  // const store = useHabitStore();
  return (
    <Container>
      <Box>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Tracker
        </Typography>
        {/* Form */}

        {/* List */}
        {/* Stats */}
      </Box>
    </Container>
  );
};

export default App;
