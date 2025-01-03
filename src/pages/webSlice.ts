import { createSlice } from "@reduxjs/toolkit";

// A slice with states and reducers that set the state
const initialState = {
  overlayState: 0,
};

// Create a slice (action + reducer)
const webSlice = createSlice({
  name: "webStore",
  initialState,
  reducers: {
    setFocus: (state, action) => {
      state.overlayState = action.payload;
    },
  },
});

// Export actions
export const { setFocus } = webSlice.actions;

// Selectors
export const selectFocus = (state: any) => state.webStore.overlayState;

// Export the reducer to be used in the store
export default webSlice.reducer;
