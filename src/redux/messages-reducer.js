const sendMessageActionType = "SEND-MESSAGE";

export const getSendMessageAT = (id, text) => {
    return {
        type: sendMessageActionType,
        id: id,
        text: text
    }
}

let messagesReducer = (state, action) => {
    switch(action.type){

        case sendMessageActionType:
            let mes = {
                text: action.text
            }
            state.find(c => c.id === action.id).messages.push(mes);
            return state;
        default :
            return state;
    }

}

export default messagesReducer

