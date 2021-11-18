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


export const deleteMoviesStart = () => ({
    type: "DELETE_MOVIES_START",
});

export const deleteMoviesSuccess = (id) => ({
    type: "DELETE_MOVIES_SUCCESS",
    payload: id
});

export const deleteMoviesFailure = () => ({
    type: "DELETE_MOVIES_FAILURE",
});