import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  selectedTask: null,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setSelectedTask: (state, action: PayloadAction<any>) => {
      state.selectedTask = action.payload;
    },
  },
});

export const { setSelectedTask } = taskSlice.actions;
export default taskSlice.reducer;
