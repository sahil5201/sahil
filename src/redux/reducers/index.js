import TaskReducer from "./TaskReducer";
import UserReducer from "./UserReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    Task : TaskReducer,
    User : UserReducer
})

export default rootReducer;