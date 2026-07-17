import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "Light"
  },
  reducers: {
    toggleTheme(state) {
      state.mode =state.mode === "Light" ? "Dark" : "Light";
    }
  }
});

export const { toggleTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;