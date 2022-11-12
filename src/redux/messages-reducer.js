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

    let stateCopy;

    switch (action.type) {

        case sendMessageActionType:

            let index = state.findIndex(c => c.id === action.id);
            stateCopy = [...state]

            stateCopy[index] = {
                ...stateCopy[index],
                messages: [
                    ...stateCopy[index].messages,
                    {
                        text: stateCopy[index].activeMessage
                    }
                ],
                activeMessage: ""
            };

            return stateCopy;

        case newMesTriggerActionType:

            let a = state.findIndex(c => c.id === action.id);
            stateCopy = [...state]

            stateCopy[a] = {
                ...state[a],
                activeMessage: action.text
            }
            return stateCopy;

        default:
            return state;
    }

}

export default messagesReducer

