import React, { useState } from 'react';
import './register.css'
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom"
import Status from '../components/status';
import Send from '../components/send';
import Transactions from '../components/transactions';
import LoginForm from './loginForm';

function Register(props) {

    const adminuser= {
        username: "jingles",
        password: "deer<3candy"
    }
    const [user, setUser] = useState({username:""});
    
    const  Login = (details) => {
        console.log(details);
        
        if(details.name == adminuser.username && details.password == adminuser.password){
            console.log("Logged in");
            setUser({
                username: details.username,
            })
        }else{
            console.log("Details do not match");
        }
    }

    return (
        <div>
            {
                (user.username != "") ? (
                    <div>
                        <Status/>
                        <Send/>
                        <Transactions/>
                    </div>
                ) : (
                    <LoginForm Login={Login}/>
                )
            }
        </div>
    )
}
export default Register
