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
        return result.body.token;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const profileThunk = createAsyncThunk(
  "login/profile",
  async (token, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        return result.body;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

export const editUserThunk = createAsyncThunk(
  "login/editUser",
  async ({userName, token}, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        body: JSON.stringify({userName}),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        return result.body;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  }
);

const initialState = {
  token: '',
  userName: '',	
  firstName: '',
  lastName: '',
  loggedIn: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setProfile: (state, action) => {
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    logOut: (state, action) => {
      state.userName = '';
      state.firstName = '';
      state.lastName = '';
      state.token = '';
      state.loggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, { payload }) => {
      state.token = payload;
      state.loggedIn = true;
    });
    builder.addCase(profileThunk.fulfilled, (state, {payload}) => {
      state.userName = payload.userName;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
    });
    builder.addCase(editUserThunk.fulfilled, (state, {payload}) => {
      state.userName = payload.userName;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
    });
  },
});

export const { setToken, setProfile, logOut } = loginSlice.actions;

export default loginSlice.reducer;