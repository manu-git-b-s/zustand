import { create } from "zustand";

const useHabitStore = create((set, get) => {
  return {
    habits: [],
  };
});

export default useHabitStore;
