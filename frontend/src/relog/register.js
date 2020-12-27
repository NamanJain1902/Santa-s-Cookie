import React, { Component ,  useSatate } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Form, Container, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import './register.css'

class Register extends React.Component {

//    const [formData, setFormData] = useSatate({
//        username: '',
//        password: '',
//    });
//    const { username, password } = formData;
//    const onChange = e => setFormData({ ...formData, [e.target.name]:e.target.value });
//    const onSubmit = e => {
//        e.preventDefault();
//    }
    render() {
        return(
            <div className='root__container'>
                <div className="box">
                    <div className='loginBox'>
                        <div className='logged'>
                            <p className='login__heading'><h1>Login</h1></p>
                            <br/>
                            <form>
                                <div className='log__form'>
                                <input
                                    type='text'
                                    placeholder='username'
                                    required
                                />
                                <br/><br/>
                                </div>
                                <div className='log__form'>
                                <input
                                    type='password'
                                    placeholder='password'
//                                    value={password}
//                                    onChange={e => onChange(e)}
                                    minLength='10'
                                    required
                                />
                                </div>
                            </form>
                            <br/>
                            <button type='submit' >Sign In</button>
                            <br/><br/>
                            <div className='condition'>
                                <p><small>By continuing, you agree to <b>Chritmas's </b><a href='#'>Conditions of Gifts</a> and <a href='#'>Cookies</a>.</small></p>
                            </div>
                        </div>

                        <div className="right">
                            <img src="https://media.giphy.com/media/VJwoZTIPOOfsdqWsqV/giphy.gif" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register