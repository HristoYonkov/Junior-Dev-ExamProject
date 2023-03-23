import { Link } from 'react-router-dom';

import './Login.css'

export const Login = () => {


    return (
        <>
            <section className="login">

                <form className='login-form'>
                    <h1>Login</h1>

                    <div className='input-wrapper'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id='email' placeholder='email' />
                        <p className='err-msg'>Invalid E-mail!</p>
                    </div>

                    <div className='input-wrapper'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id='password' placeholder='password' />
                        <p className='err-msg'>Password must be between 3 and 15 character's long!</p>
                    </div>

                    <p>If you don't have an account go to <Link to="/register">REGISTER</Link> page!</p>

                    <button>Login</button>
                </form>

            </section>
        </>
    );
}