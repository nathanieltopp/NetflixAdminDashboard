import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import "./movie.css";
import { Publish } from "@material-ui/icons";

export default function Movie() {
    const location = useLocation();
    const movie = location.state.movie;
    
    // useEffect(() => {

    // }, [movieId])
    return (
        <div className="movie">
            <div className="movieTitleContainer">
                <h1 className="movieTitle">Movie</h1>
                <Link to="/newmovie">
                    <button className="movieAddButton">Create</button>
                </Link>
            </div>
            <div className="movieTop">
                {/* <div className="movieTopLeft">
                    <Chart data={productData} dataKey="sales" title="Sales Performance"/>
                </div> */}
                <div className="movieTopRight">
                    <div className="movieInfoTop">
                        <img src={movie.img} alt="" className="movieInfoImage" />
                        <span className="movieName">{movie.title}</span>
                    </div>
                    <div className="movieInfoBottom">
                        <div className="movieInfoItem">
                            <span className="movieInfoKey">Id:</span>
                            <span className="movieInfoValue">{movie._id}</span>
                        </div>
                        <div className="movieInfoItem">
                            <span className="movieInfoKey">Genre:</span>
                            <span className="movieInfoValue">{movie.genre}</span>
                        </div>
                        <div className="movieInfoItem">
                            <span className="movieInfoKey">Year:</span>
                            <span className="movieInfoValue">{movie.year}</span>
                        </div>
                        <div className="movieInfoItem">
                            <span className="movieInfoKey">Limit:</span>
                            <span className="movieInfoValue">{movie.limit}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="movieBottom">
                <form className="movieForm">
                    <div className="movieFormLeft">
                        <label>movie Name</label>
                        <input type="text" placeholder={movie.title}/>
                        <label>Year</label>
                        <input type="text" placeholder={movie.year}/>
                        <label>Genre</label>
                        <input type="text" placeholder={movie.genre}/>
                        <label>Limit</label>
                        <input type="text" placeholder={movie.limit}/>
                        <label>Trailer</label>
                        <input type="file" placeholder={movie.trailer}/>
                        <label>Video</label>
                        <input type="file" placeholder={movie.video}/>
                    </div>
                    <div className="movieFormRight">
                        <div className="movieUpload">
                            <img src={movie.img} alt="" className="movieUploadImage" />
                            <label htmlFor="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display: "none"}}/>
                        </div>
                        <button className="movieButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
