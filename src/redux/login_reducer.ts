import { LoginDataType } from './../API/httpReq';
export const SET_USER = "rememberMe/user/SET_USER";

const initialState: LoginDataType = {
    email: '',
    password: '',
    captcha: '',
    rememberMe: false,
}

type ActionType = {
    type: string,
    payload: any
}

export const login_reducer = (state: LoginDataType = initialState, action: ActionType): LoginDataType => {
    switch (action.type) {
        case SET_USER:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export type SetUserType = {
    type: typeof SET_USER,
    payload: LoginDataType
}
export const set_user_ac = (payload: LoginDataType): SetUserType => {
    return {
        type: SET_USER,
        payload
    }
}