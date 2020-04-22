import { combineReducers } from "redux";

import TaskReducer from "./TaskReducer";
import UserReducer from "./UserReducer";
import ScheduleReducer from "./ScheduleReducer";


const rootReducer = combineReducers({
    Task : TaskReducer,
    User : UserReducer,
    Schedule : ScheduleReducer
})

export default rootReducer;