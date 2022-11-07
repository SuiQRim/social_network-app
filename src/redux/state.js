import messagesReducer from "./messages-reducer";
import profileCommentReducer from "./profile-comments-reducer";

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
    
    subscribe(observer) {
        this.renderVD = observer;
    },

    renderVD(){},
    
    dispatch(action)
    {
        this.state.profile = profileCommentReducer(this.state.profile, action);
        this.state.messenger = messagesReducer(this.state.messenger, action);
        this.renderVD(this);
    }
}

window.store = store.state;
export default store;