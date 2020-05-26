import { combineReducers } from "redux";

import TaskReducer from "./TaskReducer";
import UserReducer from "./UserReducer";
import ScheduleReducer from "./ScheduleReducer";
import TeamReducer from "./TeamReducer";


const rootReducer = combineReducers({
    Task : TaskReducer,
    User : UserReducer,
    Schedule : ScheduleReducer,
    Team : TeamReducer
})

export default rootReducer;