export const CreateTeam = data => {
    return {
        type: 'CREATE',
        payload: data
    }
}

export const JoinTeam = data => {
    return {
        type: 'JOIN',
        payload: data
    }
}

export const TeamRequest = () => {
    return {
        type: 'LOAD'
    }
}

export const GetTeam = data => {
    return {
        type: 'GETTEAM',
        payload: data
    }
}