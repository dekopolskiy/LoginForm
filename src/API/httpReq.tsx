import axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';
const instance = axios.create({
    withCredentials: true,
    headers: {
        'Api-key': '3291f849-da91-4ce9-9921-6650bf28d2d0'
    }
})

type LoginDataType = {
    email: string,
    password: string,
    rememberMe?: boolean,
    captcha?: string
}

const httpReq = {
    sign_in: (loginData: LoginDataType) => {
        instance.post(baseURL+"auth/login", loginData)
    }
}