const activeComTriggerActiontType = "ACTIVE-COMMENT-TRIGGER";
const addCommentActiontType = "ADD-COMMENT";
const sendMessageActionType = "SEND-MESSAGE";

let store = {

    state: {
        profile:
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
        },

        tape:
            [
                {
                    title: "Роман обучается React js",
                    content: "Невероятная новость",
                    likeCount: "5000000000"
                },
                {
                    title: "Курс ir-kamas",
                    content: "Шикарный курс, бесплатный, смотреть на 1.75x очень балдежно",
                    likeCount: "444"
                }
            ],

        messenger:
            [
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
    },
    
    _activeCommentTrigger(text) {
        this.state.profile.activeComment = text;
        this.renderVD(this);
    },

    _addComment() {
        let post = {
            name: this.state.profile.name,
            text: this.state.profile.activeComment,
        }
        this.state.profile.comments.push(post);
        this.state.profile.activeComment = "";
        this.renderVD(this);
    },

    _addMessage(id, text) {

        let mes = {
            text: text
        }
        this.state.messenger.find(c => c.id === id).messages.push(mes);
        this.renderVD(this);
    },

    subscribe(observer) {
        this.renderVD = observer;
    },

    renderVD(){},
    
    dispatch(action)
    {
        if(action.type === addCommentActiontType) {

            this._addComment();
        }

        else if(action.type === activeComTriggerActiontType) {

            this._activeCommentTrigger(action.text);
        }
        else if(action.type === sendMessageActionType)
        {
            this._addMessage(action.id, action.text);
        }
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

export const getSendMessageAT = (id, text) => {
    return {
        type: sendMessageActionType,
        id: id,
        text: text
    }
}
window.store = store;
export default store;