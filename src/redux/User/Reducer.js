
  export const ListUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case "USER_LIST_REQUEST":
        return { loading: true, users: [] };
      case "USER_LIST_SUCCESS":
        //if it succeeded getting USERSs USERSs will be filled with payload(our results)
        return { loading: false, users: action.payload };
      case "USER_LIST_FAIL":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
 
  export const createUserReducer = (state = {}, action) => {
    switch (action.type) {
      case "USER_CREATE_REQUEST":
        return { loading: true,error:false,success:false };
      case "USER_CREATE_SUCCESS":
        //if it succeeded getting  MOTOR will be filled with payload(our results)
        return { loading: false, success: true,users:action.payload };
      case "USER_CREATE_FAIL":
        return { loading: false, error: action.payload };
        case "USER_CREATE_RESE":
          return { };
      default:
        return state;
    }
  };

  export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case "USER_DELETE_REQUEST":
        return { loading: true };
      case "USER_DELETE_SUCCESS":
        //if it succeeded getting  CONTACT will be filled with payload(our results)
        return { loading: false, success: true };
      case "USER_DELETE_FAIL":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
