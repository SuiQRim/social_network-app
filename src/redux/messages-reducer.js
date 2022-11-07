const sendMessageActionType = "SEND-MESSAGE";

export const getSendMessageAT = (id, text) => {
    return {
        type: sendMessageActionType,
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
        ]
    }

]

let messagesReducer = (state = initialState, action) => {
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

