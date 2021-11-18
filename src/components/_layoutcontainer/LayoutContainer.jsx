import React from 'react';
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/topbar/TopBar";
import Home from "../../pages/home/Home";
import UserList from "../../pages/userList/UserList";
import User from "../../pages/user/User";
import NewUser from "../../pages/newUser/NewUser";
import MovieList from "../../pages/movieList/MovieList";
import Movie from "../../pages/movie/Movie";
import NewMovie from "../../pages/newMovie/NewMovie";
import {
    Routes,
    Route,
  } from "react-router-dom";

export default function LayoutContainer() {

    return (
        <>
            <TopBar />
            <div className="container">
                <SideBar />
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact  path="/users" element={<UserList />}/>
                    <Route exact  path="/users/:userid" element={<User />}/>
                    <Route exact  path="/newUser" element={<NewUser />}/>
                    <Route exact  path="/movies" element={<MovieList />}/>
                    <Route exact  path="/movies/:movieid" element={<Movie />}/>
                    <Route exact  path="/newMovie" element={<NewMovie />}/>
                </Routes>
            </div>
        </>
    )
}
