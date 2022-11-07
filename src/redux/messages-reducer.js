const sendMessageActionType = "SEND-MESSAGE";
const newMesTriggerActionType = "NEW-MESSAGE-TRIGGER";

export const getSendMessageAT = (id) => {
    return {
        type: sendMessageActionType,
        id: id,
    }
}
export const getNewMesTriggerAT = (id, text) => {
    return {
        type: newMesTriggerActionType,
        id: id,
        text: text
    }
}


let initialState = [
    {
        id : 0,
        name: "Олег Тинькоф",
        messages: [
            {
                text: "Хай"
            },
            {
                text: "Ты крут"
            },
            {
                text: "Ты реально хорош"
            },
            {
                text: "Го скину лям"
            },
            {
                text: "Супер ультра мега хорош"
            }
        ],
        activeMessage: ""
        
    },
    {
        id: 1,
        name: "Мистер Бристл Бекалсон",
        messages: [
            {
                text: "Привет"
            },
            {
                text: "Го развалим типов"
            }
        ],
        activeMessage: ""
    }

]

let messagesReducer = (state = initialState, action) => {
    switch(action.type){

        case sendMessageActionType:
            let dialog = state.find(c => c.id === action.id);
            let mes = {
                text: dialog.activeMessage
            }
            dialog.messages.push(mes);
            dialog.activeMessage = "";
            return state;

        case newMesTriggerActionType:
            state.find(c => c.id === action.id).activeMessage = action.text;
            return state;
        default :
            return state;
    }

}

export default messagesReducer

