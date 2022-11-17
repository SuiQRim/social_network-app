import { userApi } from "../api/api";

const addFriendActiontType = "ADD-FRIEND";
const deleteFriendActiontType = "DELETE-FRIEND";
const setUsersActionType = "SET-USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_PAGE_AT = "SET_PAGE";
const TOGGLE_FETCHING_AT = "TOGGLE_FETCHING";
const SET_FOLLOWING_PROGRESS_STATUS_AT = "SET_FOLLOWING_PROGRESS_STATUS";

const initialState = {
    items: [],
    pagesCount: 0,
    itemsInPageCount: 4,
    totalUserCount: 0,
    selectedCount: 1,
    diapasone: 5,
    diapasoneStart: 1,
    isFetching: false,
    isFollowingInProgress : []
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
            let n = action.pageNumber;
            if(n < 1 ^ n > state.pagesCount) return state;
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

        case TOGGLE_FETCHING_AT:
            return{
                ...state,
                isFetching : action.isFetching
            }

        case SET_FOLLOWING_PROGRESS_STATUS_AT:

                return {
                    ...state,
                    isFollowingInProgress : action.status 
                    ?   [...state.isFollowingInProgress, action.userId]:
                        state.isFollowingInProgress.filter(f => f !== action.userId)
                }
            
            

        default:
            return state;
    }

}


export let addFriend = (userId) => {
    return {
        type: addFriendActiontType,
        userId: userId
    }
}

export let deleteFriend = (userId) => {
    return {
        type: deleteFriendActiontType,
        userId: userId
    }
}
export let setUsers = (users) => {
    return {
        type: setUsersActionType,
        users: users
    }
}

export let setTotalUserCount = (totalUserCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUserCount: totalUserCount
    }
}

export let setPage = (pageNumber) => {
    return {
        type: SET_PAGE_AT,
        pageNumber: pageNumber
    }
}

export let toggleFetching = (isFetching) => {
    return {
        type: TOGGLE_FETCHING_AT,
        isFetching: isFetching,
    }
}

export let setFollowingProgressStataus = (userId, status) => {
    return {
        type: SET_FOLLOWING_PROGRESS_STATUS_AT,
        userId,
        status
    }
}

export const getUsers = (itemsInPage, selectedPage) => {
    return (dispatch) => {
        
        dispatch(toggleFetching(true));

        userApi.getUsers(itemsInPage, selectedPage).then(data => {

            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount));
            dispatch(toggleFetching(false));      

        })   
    }
}


export const follow = (userId) => {
    return (dispatch) => {

        dispatch(setFollowingProgressStataus(userId, true));
        userApi.follow(userId).then(data => {

            if (data.resultCode === 0)
                dispatch(addFriend(userId));

                dispatch(setFollowingProgressStataus(userId,false));
        });

    }
}


export const unFollow = (userId) => {
    return (dispatch) => {
        
        dispatch(setFollowingProgressStataus(userId,true));
        userApi.unFollow(userId).then(data => {

            if (data.resultCode === 0)
                dispatch(deleteFriend(userId));
                dispatch(setFollowingProgressStataus(userId,false));
        });

    }
}

export default usersReducer
