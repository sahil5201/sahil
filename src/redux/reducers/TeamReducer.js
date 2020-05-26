const defaultState = {
  team: null,
  teamid: null,
  loading: false
}

const TeamReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CREATE":
      return {
        ...state,
        teamid: action.payload,
        loading: false
      };
    case "LOAD":
      return {
        ...state,
        loading: true
      };
    case "JOIN":
      return {
        ...state,
        loading: false
      };
    case "GETTEAM":
      return {
        ...state,
        team: action.payload,
        loading: false
      };
    default:
      return state;
  }
}

export default TeamReducer
