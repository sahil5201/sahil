const defaultState = {
    task: null
}

const ScheduleReducer = (state=defaultState,action) => {
    switch (action.type) {
        case "INSERT":
          return {
            ...state,
          };
        case "DELETE":
          return {
            ...state,
          };
        case "Check":
          return {
            ...state,
          };
        case "GET":
          return {
            ...state,
            task: action.payload
          };
        default:
          return state;
      }
}

export default ScheduleReducer
