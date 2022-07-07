const initialState ={
    playlist:[]
}
export const playListReducer = (state=initialState,action) =>{
    const {type,payload} =action
    switch(type){
        case "SUCCED" :
            return{
                ...state,
                playlist:payload
            }
    }
    return state
}