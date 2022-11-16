const initialState = {
    items: [],
    pagesCount: 0,
    itemsInPageCount: 4,
    totalUserCount: 0,
    selectedCount: 1,
    diapasone: 5,
    diapasoneStart: 1
}

const addFriendActiontType = "ADD-FRIEND";
const deleteFriendActiontType = "DELETE-FRIEND";
const setUsersActionType = "SET-USERS"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_PAGE_AT = "SET_PAGE"


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
        type: setUsersActionType,
        users: users
    }
}

export let setTotalUserCountAC = (totalUserCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUserCount: totalUserCount
    }
}

export let setPageAC = (pageNumber) => {
    return {
        type: SET_PAGE_AT,
        pageNumber: pageNumber
    }
}

let usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case addFriendActiontType:
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.userId)
                        return {
                            ...u,
                            followed: true
                        }
                    return u;
                })
            }


        case deleteFriendActiontType:
            return {
                ...state,
                items: state.items.map(u => {
                    if (u.id === action.userId)
                        return {
                            ...u,
                            followed: false
                        }
                    return u;
                })
            }

        case setUsersActionType:
            return {
                ...state,
                items: [...action.users]
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.totalUserCount,
                pagesCount: Math.ceil(action.totalUserCount / state.itemsInPageCount)
            }

        case SET_PAGE_AT:
            let n = action.pageNumber
            if(n < 1 ^ n > state.totalUserCount) return state;

            let diapasoneStart;
            if ((n < state.diapasoneStart) ^ (n > state.diapasoneStart + state.diapasone - 1)) {
                switch(n){
                    case 1:
                        diapasoneStart = 1
                        break;
                    case state.pagesCount:
                        diapasoneStart = state.pagesCount - state.diapasone + 1;
                        break;
                    default:
                        diapasoneStart = Math.ceil(n - (state.diapasone / 2));
                        break;
                }
            }
            else {diapasoneStart = state.diapasoneStart}


            return {
                ...state,
                selectedCount: n,
                diapasoneStart: diapasoneStart
            }
        default:
            return state;
    }

}

export default usersReducer
