import "./newMovie.css";
import React, {useState} from "react";

export default function NewProduct() {
    const [movie, setMovie] = useState(null);
    const [img, setImg] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);
    const [imgSm, setImgSm] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setMovie({...movie, [name]:value});
    }
    // console.log("movie:", movie);
    // console.log("image:", img);
    return (
        <div className="newMovie">
            <h1 className="newMovieHeading">New Movie</h1>
            <form className="newMovieForm">
                <div className="newMovieFormInputs">
                    <div className="newMovieFormItem">
                        <label className="newMovieFormLabel" htmlFor="img">Image</label>
                        <input type="file" name="file" id="img" name="img" onChange={(e)=>setImg(e.target.files[0])}/>
                    </div>
                    <div className="newMovieFormItem">
                        <label className="newMovieFormLabel" htmlFor="imgTitle">Title Image</label>
                        <input type="file" name="file" id="imgTitle" name="imgTitle" onChange={(e)=>setImgTitle(e.target.files[0])}/>
                    </div>
                    <div className="newMovieFormItem">
                        <label className="newMovieFormLabel" htmlFor="imgSm">Thumbnail Image</label>
                        <input type="file" name="file" id="imgSm" name="imgSm" onChange={(e)=>setImgSm(e.target.files[0])}/>
                    </div>
                    <div className="newMovieFormItem">
                        <label className="newMovieFormLabel" htmlFor="title">Title</label>
                        <input className="newMovieFormInput" type="text" id="title" name="title" placeholder="John Wick" onChange={handleChange}/>
                    </div>
                    <div className="newMovieFormItem">
                        <label className="newMovieFormLabel" htmlFor="des">Description</label>
                        <input className="newMovieFormInput" type="text" id="des" name="des" placeholder="description"onChange={handleChange}/>
                    </div>
                    <div className="newMovieFormItem">
                        <label className="newMovieFormLabel" htmlFor="year">Year</label>
                        <input className="newMovieFormInput" type="text" id="year" name="year" placeholder="Year" onChange={handleChange}/>
                    </div>
                    <div className="newMovieFormItem">
                        <label className="newMovieFormLabel" htmlFor="genre">Genre</label>
                        <input className="newMovieFormInput" type="text" id="genre" name="genre" placeholder="Genre" onChange={handleChange}/>
                    </div>
                    <div className="newMovieFormItem">
                        <label className="newMovieFormLabel" htmlFor="duration">Duration</label>
                        <input className="newMovieFormInput" type="text" id="duration" name="duration" placeholder="Duration" onChange={handleChange}/>
                    </div>
                    <div className="newMovieFormItem">
                        <label className="newMovieFormLabel" htmlFor="limit">Limit</label>
                        <input className="newMovieFormInput" type="text" id="limit" name="limit" placeholder="+18" onChange={handleChange}/>
                    </div>
                    <div className="newMovieFormItem">
                        <label className="newMovieFormLabel" htmlFor="isseries">Is Series?</label>
                        <select className="newMovieFormSelect" id="isseries" name="isseries" onChange={handleChange}>
                            <option value="no">False</option>
                            <option value="yes">True</option>
                        </select>
                    </div>
                    <div className="newMovieFormItem">
                        <label className="newMovieFormLabel" htmlFor="trailer">Trailer</label>
                        <input type="file" name="file" id="trailer" name="trailer" onChange={(e)=>setTrailer(e.target.files[0])}/>
                    </div>
                    <div className="newMovieFormItem">
                        <label className="newMovieFormLabel" htmlFor="video">Video</label>
                        <input type="file" name="file" id="video" name="video" onChange={(e)=>setVideo(e.target.files[0])}/>
                    </div>
                </div>
                <button className="newMovieButton">Create</button>
            </form>
        </div>
    )
}
