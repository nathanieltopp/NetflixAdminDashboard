import "./movieList.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import {MovieContext} from "../../context/movieContext/MovieContext";
import {getMoviesCall, deleteMoviesCall} from "../../context/movieContext/movieApiCalls";

export default function MovieList() {
    const [data, setData] = useState(productRows);
    const {movies, dispatch} = useContext(MovieContext);

    useEffect(() => {
        getMoviesCall(dispatch);
    }, [dispatch]);

    function handleDelete(id) {
        // setData(data.filter(d => d.id !== id));   used this before setting up context
        console.log("handle delete called");
        deleteMoviesCall(id, dispatch);
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 90 },
        { field: 'movie', headerName: 'Movie', width:200, renderCell: (params) => {
            return (
                <div className="movieListItem">
                    <img className="movieListImage" src={params.row.img} alt="" />
                    {params.row.title}
                </div>
            )
        } },
        { field: 'genre', headerName: 'Genre', width: 120 },
        { field: 'year', headerName: 'Year', width: 120 },
        { field: 'limit', headerName: 'limit', width: 120 },
        { field: 'isSeries', headerName: 'isSeries', width: 120 },
        // {field: 'status', headerName: 'Status', width: 120},
        // {field: 'price', headerName: 'Price Volune', width: 160},
        {field: 'action', headerName: 'Actions', width: 150, renderCell: (params) => {
            return (
                <>
                    <Link to={`/movies/${params.row._id}`} state={{movie:params.row}}>
                        <button className="movieListEdit">Edit</button>
                    </Link> 
                    <DeleteOutline className="movieListDelete" onClick={() => handleDelete(params.row._id)} />
                </>
            )
        }}
      ];

    return (
        <div className="movieList">
            <DataGrid
                rows={movies}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
                disableSelectionOnClick
                getRowId={(r) => r._id}
            />
        </div>
    )
}
