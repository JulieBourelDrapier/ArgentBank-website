export const POST = "POST";

export function login() {
  return (dispatch) => {
    return fetch("http://localhost:3001/user/login")
      .then((response) => response.json())
      .then((result) => {
      dispatch({
        type: 'POST',
        payload: result.data
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }; 
};