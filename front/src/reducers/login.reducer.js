// import { loginThunk } from "./slices/login.slice";
const initialState = {};

export default function login(state = initialState, action) {
  switch (action.type) {
    case loginThunk.fulfilled.type:
      return action.payload;
    default:
      return state;
  }
}
