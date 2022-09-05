import { combineReducers } from "redux";
import CakeReducer from './cake/cackReducer'
import IceReducer from './iceCream/iceReducer'
import UserReducer from "./users/userReducer";


const rootReducer = combineReducers({
    cake : CakeReducer,
    iceCream : IceReducer,
    user : UserReducer
})

export default rootReducer