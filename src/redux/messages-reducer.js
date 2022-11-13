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
        id: 0,
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

    switch (action.type) {

        case sendMessageActionType:
            return state.map(u => {
                if (u.id === action.id) {
                    return {
                        ...u,
                        messages: [
                            ...u.messages,
                            { text: u.activeMessage }
                        ],
                        activeMessage: ""
                    }
                }
                return u;
            });

        case newMesTriggerActionType:
            return state.map(u => {
                if (u.id === action.id) {
                    return {
                        ...u,
                        activeMessage: action.text
                    }
                }
                return u;
            });

        default:
            return state;
    }

}

export default messagesReducer

