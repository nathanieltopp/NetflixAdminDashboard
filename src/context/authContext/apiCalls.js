import axios from "axios";
import {loginStart, loginSuccess, loginFailure} from "./AuthActions";

export const loginCall = async (userCredentials, dispatch) => {
    dispatch(loginStart());
    try {
        let res = await axios.post("auth/login", userCredentials);
        // console.log(res);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}