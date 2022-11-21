import { profileApi } from "../api/api";

const addCommentActiontType = "ADD-COMMENT";
const SET_PROFILE_INFO_AT = "SET_PROFILE"
const SET_STATUS_AT = "SET_STATUS"

let initialState = {
    
    status : null,
    comments:
        [
            {
                id: 0,
                name: "User1",
                text: "комментарии1"
            },
            {
                id: 1,
                name: "User2",
                text: "комментарии2"
            },
            {
                id: 2,
                name: "User4",
                text: "комментарии3"
            },
            {
                id: 3,
                name: "User4",
                text: "комментарии4"
            }
        ],
}

let profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case addCommentActiontType:
            debugger;
            return {
                ...state,
                comments: [...state.comments, {
                    id: state.comments.length,
                    name: state.information.fullName,
                    text: action.text,

                }],
            };

        case SET_PROFILE_INFO_AT:
            return {
                ...state,
                information: { ...action.profileInfo }
            }

        case SET_STATUS_AT:
            return {
                ...state,
                status : action.status
            }
            
        default:
            return state;

    }
}

export const addComment = (text) => {
    return {
        type: addCommentActiontType,
        text
    }
}

export const setProfileInfo = (profileInfo) => {
    return {
        type: SET_PROFILE_INFO_AT,
        profileInfo
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS_AT,
        status
    }
}



export const getProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId).then(data => {
            dispatch(setProfileInfo(data));
        })
    }
}

export const getStatus = (id) => {
    return (dispatch) => {
        profileApi.getStatus(id).then(data => {
            dispatch(setStatus(data));
        })
    }
}


export const editStatus = (status) => {
    return (dispatch) => {
        profileApi.editStatus(status).then(data => {
            if(data.resultCode === 0)
                dispatch(setStatus(status));
        })
    }
}


export default profileReducer