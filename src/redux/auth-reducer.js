import { authApi } from "../api/api";

const SET_USER_DATA_AT = "SET_USER_DATA";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isLogin: false
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
            login,
            isLogin: true
        }
    })


export const signIn = () => {
    return (dispatch) => {

        authApi.signIn().then(data => {
            if (data.resultCode === 0) {
                let user = data.data;
                dispatch(setUserData(user.id, user.email, user.login))
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe).then( data => {
            if(data.resultCode === 0) {
                console.log('Вход выполнен')
            }
        })
    }
    
}
export default authReducer

