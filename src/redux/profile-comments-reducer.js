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

let profileCommentReducer = (state, action) => {

    switch(action.type){

        case activeComTriggerActiontType:
            state.activeComment = action.text;
            return state;
        
        case addCommentActiontType:
            let post = {
                name: state.name,
                text: state.activeComment,
            }
            state.comments.push(post);
            state.activeComment = "";
            return state;
        default :
            return state;

    }
}

export default profileCommentReducer