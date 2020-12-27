import React, {useState} from 'react'

function LoginForm({Login}) {
    const [details, setDetails] = useState({name:"", password:""});
    
    
    const onSubmit = e => {
        e.preventDefault();
        // <Link to='/' />

        Login(details);
    }
   
    return (
        <div>
             <div className='root__container'>
            <div className="box">
                <div className='loginBox'>
                    <div className='logged'>
                        <p className='login__heading'><h1>Login</h1></p>
                        <br/>
                        <form onSubmit={onSubmit}>
                            <div className='log__form'>
                            <input
                                type='text'
                                placeholder='username'
                                required
                                onChange={e => setDetails({...details, name: e.target.value})}
                                value={details.name}
                            />
                            <br/><br/>
                            </div>
                            <div className='log__form'>
                            <input
                                type='password'
                                placeholder='password'
                                onChange={e => setDetails({...details, password: e.target.value})}
                                value={details.password}
                                minLength='10'
                                required
                            />
                            </div>
                        </form>
                        <br/>
                        <button type='submit' onClick={onSubmit}>Sign In</button>
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
        </div>
    )
}

export default LoginForm
