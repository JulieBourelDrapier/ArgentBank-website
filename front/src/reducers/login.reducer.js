import{ Login } from '../actions/login.action';

const initialState = {};

export default function login(state = initialState, action) {
  switch (action.type) {
    case login:
      return action.payload;
    default:
      return state;
  }
}