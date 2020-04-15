const defaultState = {
    user: null
}

const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "Login":
            window.sessionStorage.setItem("user",JSON.stringify(action.payload))
            return {
                ...state,
                user: action.payload
            };
        case "Logout":
            window.sessionStorage.setItem("user",JSON.stringify({}))
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}

export default UserReducer;