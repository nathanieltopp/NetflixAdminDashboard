import React, {useState, useContext} from 'react';
import "./login.css";
import {AuthContext} from "../../context/authContext/AuthContext";
import {loginCall} from "../../context/authContext/apiCalls";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, dispatch} = useContext(AuthContext)

    function handleSubmit(){
        loginCall({email, password}, dispatch);
    }

    return (
        <div className="login">
            <form className="loginForm">
                <h2 className="loginTItle">Login</h2>
                <input type="text" className="loginInput" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" className="loginInput" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                <button type="button" className="loginButton" onClick={handleSubmit} disabled={isFetching}>Login</button>
            </form>
        </div>
    )
}
