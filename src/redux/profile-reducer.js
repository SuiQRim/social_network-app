const activeComTriggerActiontType = "ACTIVE-COMMENT-TRIGGER";
const addCommentActiontType = "ADD-COMMENT";

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

let initialState =
{
    name: "Роман",
    comments:
        [
            {
                name: "User1",
                text: "комментарии1"
            },
            {
                name: "User2",
                text: "комментарии2"
            },
            {
                name: "User4",
                text: "комментарии3"
            },
            {
                name: "User4",
                text: "комментарии4"
            }
        ],
    activeComment: "",

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
                    name: state.name,
                    text: state.activeComment,
                }],
                activeComment: state.activeComment
            };
        default:
            return state;

    }
}

export default profileReducer