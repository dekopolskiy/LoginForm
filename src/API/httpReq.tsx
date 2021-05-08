import axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';
const instance = axios.create({
    withCredentials: true,
    headers: {
        'Api-key': '3291f849-da91-4ce9-9921-6650bf28d2d0'
    }
})

export type LoginDataType = {
    email: string,
    password: string,
    rememberMe?: boolean,
    captcha?: string
}

export type UserIdType = {
    userId: number
}

export type ReturnDataType = {
    resultCode: number,
    messages: Array<string>,
    data: UserIdType,
}

export const httpReq = {
    sign_in: (loginData: LoginDataType) => {
        instance.post(baseURL+"auth/login", loginData);
    }
}