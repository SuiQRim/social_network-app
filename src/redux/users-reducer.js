let initialState = []

const addFriendActiontType = "ADD-FRIEND";
const deleteFriendActiontType = "DELETE-FRIEND";
const setUsersActionType = "SET-USERS"

export let addFriendAT = (userId) => {
    return {
        type: addFriendActiontType,
        userId: userId
    }
}

export let deleteFriendAT = (userId) => {
    return {
        type: deleteFriendActiontType,
        userId: userId
    }
}
export let setUsersAT = (users) => {
    return {
        type : setUsersActionType,
        users : users
    }
}

let usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case addFriendActiontType:
            return state.map(u => {
                if (u.id === action.userId)
                    return {
                        ...u,
                        followed : true
                    }
                return u;
            })

        case deleteFriendActiontType:
            return state.map(u => {
                if (u.id === action.userId)
                    return {
                        ...u,
                        followed : false
                    }
                return u;
            })

        case setUsersActionType:
            return [...state, ...action.users]
        default:
            return state;
    }

}

export default usersReducer
