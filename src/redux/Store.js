import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import {playListReducer} from './cours/reducer'
import {contactReducer} from './Contact/Reducer'
import {signInReducer} from './SignIn/Reducer'
import {ListContactReducer,contactDeleteReducer} from './Contact/Reducer'
import {ListUsersReducer,createUserReducer,userDeleteReducer} from './User/Reducer'
const all = combineReducers({
    playListStore:playListReducer,
    contactStore: contactReducer,
    signInStore :signInReducer,
    listContact:ListContactReducer,
    contactDeleted: contactDeleteReducer,
    listUsers:ListUsersReducer,
    createUser:createUserReducer,
    deleteUser:userDeleteReducer
    
})
const store = createStore(all,applyMiddleware(thunk))
export default store
