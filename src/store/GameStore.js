import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  levels: [
    { status: "pending", id: 1, icon: "fa-solid fa-magnifying-glass" }, // ili 'success' ili 'failure'
    { status: "pending", id: 2, icon: "fa-solid fa-fingerprint" },
    { status: "pending", id: 3, icon: "fa-solid fa-question" },
    { status: "pending", id: 4, icon: "fa-solid fa-memory" },
    { status: "pending", id: 5, icon: "fa-solid fa-box-open" },
  ],
};
const gameSlice = createSlice({
  name: "isCompleted",
  initialState: initialState,
  reducers: {
    levelCompleted(state, action) {
      state.levels[action.payload - 1].status = "success";
    },
  },
});

const store = configureStore({
  reducer: gameSlice.reducer,
});

export default store;

export const gameActions = gameSlice.actions;
