const defaultState = {
    user: window.sessionStorage.getItem("user") ? JSON.parse(window.sessionStorage.getItem("user")) : null
}

const UserReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "Login":
            window.sessionStorage.setItem("user", JSON.stringify(action.payload))

            return {
                ...state,
               // user: window.sessionStorage.getItem("user") ? window.sessionStorage.getItem("user") : action.payload
            };
        case "GET":
            return {
                ...state,
                user: window.sessionStorage.getItem("user") ? JSON.parse(window.sessionStorage.getItem("user")) : null
            };
        case "Logout":
            window.sessionStorage.setItem("user", JSON.stringify({}))
            window.sessionStorage.removeItem('user');
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}

export default UserReducer;