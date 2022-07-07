

const inisialState = {
    token: {
       
    },
    authenticate: false,
    authenticating: false,
  };
  
  export const signInReducer = (state = inisialState, action) => {
    switch (action.type) {
      case " LOGIN_FAILED":
        state = {
          ...state,
          authenticating: false,
        };
        break;
      case "LOGIN_SUCCESS":
        state = {
          ...state,
  
          token: action.payload.token,
      
          authenticate: true,
     
        };
        console.log(action.payload.token);
        break;
  
      case "LOGOUT_SUCCESS":
        state = {
          ...inisialState,
        };
        break;
  
      default:
    }
  
    return state;
  };