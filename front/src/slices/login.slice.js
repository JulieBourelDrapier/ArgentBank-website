import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loginThunk = createAsyncThunk(
  "login/signIn",
  async (form, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        return result.body.token;
      } else {
        return new Error();
      }
    } catch (error) {
      console.error(error);
    }
  }
);

const initialState = {
  login: false,
  token: '',
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      console.log("coucou");
      state.token = payload;
    });
  },
});

export const { setToken } = loginSlice.actions;

export default loginSlice.reducer;