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