import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
  user: "",
  token: "",
  loading: false
};

export const loginUser = createAsyncThunk("user", async (body) => {
  let res = await fetch("", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    },
    body: JSON.stringify(body)
  });
  return await res.json();
});

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorag.getItem("token");
    },

    addUser: (state, action) => {
      state.user = localStorag.getItem("user");
    }
  },

  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.loading = ture;
    },

    [loginUser.fulfilled]: (state, { payload: { user, token } }) => {
      state.loading = false;
      state.token = token;
      state.user = user;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(user));
    },

    [loginUser.rejected]: (state, action) => {
      state.loading = ture;
    }
  }
});

export const { addToken, addUser } = authSlice.actions;
export default authSlice.reducer;
