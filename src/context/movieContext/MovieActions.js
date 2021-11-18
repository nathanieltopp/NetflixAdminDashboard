export const getMoviesStart = () => ({
    type: "GET_MOVIES_START",
});

export const getMoviesSuccess = (fetchedMovies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: fetchedMovies
});

export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE",
});