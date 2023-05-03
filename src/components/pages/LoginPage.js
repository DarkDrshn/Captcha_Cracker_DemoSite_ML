import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import CapImg from './captcha'
import BackgroundImage from '../../assets/images/bgw.jpg'

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

export default function SignInPage() {

    return (
        <header style={ HeaderStyle }>
            <br/><br/><br/><br/>
        <div id='log_box' className="text-center">
            <h2>Sign in to us</h2>
            <form action="/home">
            <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required /><br/>
                </p>

                <CapImg/>

                <p>
                    <button id="sub_btn"  type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </header>
    )
}
