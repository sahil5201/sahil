export const Login = data => {
    return {
        type: 'Login',
        payload: data
    }
}

export const user_authentication = () => {
    return {
        type: 'GET',
    }
}

export const Logout = () => {
    return {
        type: 'Logout',
    }
}