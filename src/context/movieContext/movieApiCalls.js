import axios from "axios";
import {
    getMoviesStart, getMoviesSuccess, getMoviesFailure,
    deleteMoviesStart, deleteMoviesSuccess, deleteMoviesFailure,
} from "./MovieActions";

export const getMoviesCall = async ( dispatch) => {
    dispatch(getMoviesStart());
    try {
        let res = await axios.get("movies/", {headers:{token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`}});
        dispatch(getMoviesSuccess(res.data));
    } catch (error) {
        dispatch(getMoviesFailure());
    }
}

export const deleteMoviesCall = async (id, dispatch) => {
    dispatch(deleteMoviesStart());
    try {
        await axios.delete(`movies/${id}`, {headers:{token: `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}`}});
        dispatch(deleteMoviesSuccess(id));
    } catch (error) {
        dispatch(deleteMoviesFailure());
    }
}