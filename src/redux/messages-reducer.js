const sendMessageActionType = "SEND-MESSAGE";

export const getSendMessageAT = (id, message) => {
    return {
        type: sendMessageActionType,
        id,
        message
    }
}


let initialState = [
    {
        id: 0,
        name: "Олег Тинькоф",
        messages: [
            {
                id: 0,
                text: "Хай"
            },
            {
                id: 1,
                text: "Ты крут"
            },
            {
                id: 2,
                text: "Ты реально хорош"
            },
            {
                id: 3,
                text: "Го скину лям"
            },
            {
                id: 4,
                text: "Супер ультра мега хорош"
            }
        ],

    },
    {
        id: 1,
        name: "Мистер Бристл Бекалсон",
        messages: [
            {
                id: 1,
                text: "Привет"
            },
            {
                id: 2,
                text: "Го развалим типов"
            }
        ],
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
                            {
                                id: u.messages.length,
                                text: action.message
                            }
                        ],
                    }
                }
                return u;
            });

        default:
            return state;
    }

}

export default messagesReducer

