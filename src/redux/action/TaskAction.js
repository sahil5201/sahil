import Axios from 'axios';

export const fetchData = () => {
    return (useDispatch) => {
        Axios.get("http://192.168.1.104:4400/task").then(response=>{
            useDispatch(GET(response.data))
        })
    }
}

export const GET = data => {
    return {
        type: 'GET',
        payload: data
    }
}

export const insert = () => {
    return {
        type: 'INSERT',
    }
}

export const update = () => {
    return {
        type: 'UPDATE',
    }
}

export const Delete = () => {
    return {
        type: 'DELETE',
    }
}

export const Check = () => {
    return {
        type: 'Check',
    }
}


