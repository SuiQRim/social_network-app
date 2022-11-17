import { userApi } from "../api/api";

const activeComTriggerActiontType = "ACTIVE-COMMENT-TRIGGER";
const addCommentActiontType = "ADD-COMMENT";
const SET_PROFILE_INFO_AT = "SET_PROFILE"

let initialState = {

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
            id : 2,
            name: "User4",
            text: "комментарии3"
        },
        {
            id : 3,
            name: "User4",
            text: "комментарии4"
        }
    ],
    activeComment : ""

}

let profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case activeComTriggerActiontType:
            return {
                ...state,
                activeComment: action.text
            }

        case addCommentActiontType:
            return {
                ...state,
                comments: [...state.comments, {
                    id : state.comments.length,
                    name: state.name,
                    text: state.activeComment,
                    
                }],
                activeComment: state.activeComment
            };

        case SET_PROFILE_INFO_AT:
            return {
                ...state,
                information: { ...action.profileInfo }
            }
        default:
            return state;

    }
}

export const getActiveComTriggerAT = (text) => {
    return {
        type: activeComTriggerActiontType,
        text: text
    }
}

export const getAddCommentAT = () => {
    return {
        type: addCommentActiontType
    }
}

export const setProfileInfo = (profileInfo) => {
    return {
        type: SET_PROFILE_INFO_AT,
        profileInfo
    }
}


export const getProfile = (userId) => {
    return (dispatch) => {
        
        userApi.getProfile(userId).then(data => {
            dispatch(setProfileInfo(data));
        })  
    }
}


export default profileReducer