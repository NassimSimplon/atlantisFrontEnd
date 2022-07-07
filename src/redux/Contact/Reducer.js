const initialState ={
    contact :{
    
    }
}

export const contactReducer = (state = initialState ,action) =>{
    const {type,payload} = action;
    switch(type){
        case "ADD_CONTACT":
            return{
                ...state,
                contact:payload
            }
    }
    return state
}


export const ListContactReducer = (state = { contact: [] }, action) => {
    switch (action.type) {
      case "CONTACT_LIST_REQUEST":
        return { loading: true, contact: [] };
      case "CONTACT_LIST_SUCCESS":
        //if it succeeded getting Contacts Contacts will be filled with payload(our results)
        return { loading: false, contact: action.payload };
      case "CONTACT_LIST_FAIL":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
 


  export const contactDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case "CONTACT_DELETE_REQUEST":
        return { loading: true };
      case "CONTACT_DELETE_SUCCESS":
        //if it succeeded getting  CONTACT will be filled with payload(our results)
        return { loading: false, success: true };
      case "CONTACT_DELETE_FAIL":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };