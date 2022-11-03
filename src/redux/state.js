const activeComTriggerActiontType = "ACTIVE-COMMENT-TRIGGER";
const addCommentActiontType = "ADD-COMMENT";

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
                    name: "Олег Тинькоф",
                    lastMessage: "Го скину лям долларов"
                },
                {
                    name: "Мистер Бристл Бекалсон",
                    lastMessage: "Хай"
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
        this.renderVD(this);
        this.state.profile.comments.push(post);
        this.state.profile.activeComment = "";
    },

    subscribe(observer) {
        this.renderVD = observer;
    },

    _renderVD(){},
    
    dispatch(action)
    {
        if(action.type === addCommentActiontType) {

            this._addComment();
        }

        else if(action.type === activeComTriggerActiontType) {

            this._activeCommentTrigger(action.text);
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

window.store = store;
export default store;