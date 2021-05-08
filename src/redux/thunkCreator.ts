import { LoginDataType } from './../API/httpReq';
import { httpReq } from "../API/httpReq";

export const set_user_thunk = (payload: LoginDataType) => {
    return (dispatch:any) => {
        httpReq.sign_in(payload)
        .then( data => console.log(data))
    }
}