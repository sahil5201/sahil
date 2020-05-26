const defaultState = {
  task: null,
  loading:false
}

const TaskReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true
      };
    case "GET":
      return {
        ...state,
        loading: false,
        task: action.payload
      };
    default:
      return state;
  }
}

export default TaskReducer;