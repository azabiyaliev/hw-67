import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface passwordState {
  value: string;
  bg: string;
  type: string;
}

const initialState: passwordState = {
  value: "",
  bg: "body",
  type: "password",
};

export const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    press: (state, action: PayloadAction<string>) => {
      if (state.value.length <= 3) {
        state.value += action.payload;
      } else {
        alert("The password must be no more than 4 characters long.");
      }
    },
    passwordChange: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
        if (state.value === "Access Granted") {
          state.bg = "success";
          state.type = "text";
        } if (state.value === "Access Denied") {
          state.type = "text";
          state.bg = "danger";
      }
    },
    deletePassword: (state) => {
      if (state.value === "Access Granted" || state.value === "Access Denied") {
        state.value = "";
        state.bg = "body";
        state.type = "password";
      }
      state.value = state.value.slice(0, state.value.length - 1);
    }
  }
});

export const passwordReducer = passwordSlice.reducer;

export const {press} = passwordSlice.actions;
export const {passwordChange} = passwordSlice.actions;
export const {deletePassword} = passwordSlice.actions;