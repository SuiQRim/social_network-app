let initialState =  [
    {
        id: 0,
        title: "Роман обучается React js",
        content: "Невероятная новость",
        likeCount: "5000000000"
    },
    {
        id: 1,
        title: "Курс ir-kamas",
        content: "Шикарный курс, бесплатный, смотреть на 1.75x очень балдежно",
        likeCount: "444"
    }
]

let tapeReducer = (state = initialState, action) => {

    switch(action.type) {
        default:
            return state;
    }
    
}

export default tapeReducer;
