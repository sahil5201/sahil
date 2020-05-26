export const GET = data => {
    return {
        type: 'GET',
        payload: data
    }
}

export const LOADING = () => {
    return {
        type: 'LOADING'
    }
}