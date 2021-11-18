import axios from "axios";
import {getMoviesStart, getMoviesSuccess, getMoviesFailure} from "./MovieActions";

export const getMoviesCall = async ( dispatch) => {
    dispatch(getMoviesStart());
    try {
        let res = await axios.post("movies/", {headers:{token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`}});
        // console.log(res);
        dispatch(getMoviesSuccess(res.data));
    } catch (error) {
        dispatch(getMoviesFailure());
    }
}