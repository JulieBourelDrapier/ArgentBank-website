import { createAsyncThunk } from "@reduxjs/toolkit";

export const LOGIN = "login";

export function login() {
  return createAsyncThunk(
    LOGIN,
    async (form, thunkAPI) => {
      try {
        const response = fetch("http://localhost:3001/api/v1/user/login",{
          method: "POST",
          body: form,
        })
        if (response.ok) {
          return response.json().body.token
        }
        else {
          return new Error(response.json().message)
        }
      } catch (error) {
        console.error(error);
      }
    }
  )
}