const SET_USER_DATA_AT = "SET_USER_DATA";


let initialState = {
    userId: null,
    email: null,
    login: null
}

let authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA_AT:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }

}


export const setUserData = (userId, email, login) => (
    {
        type: SET_USER_DATA_AT,
        data: {
            userId,
            email,
            login
        }
    })

export default authReducer

