import React from 'react'
import { Link } from 'react-router-dom'
import BackgroundImage from '../../assets/images/bgw.jpg'

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

export default function HomePage() {
    return (
        <div style={ HeaderStyle } className="text-center">
            <h1 className="main-title home-page-title">Welcome to Test Captcha</h1>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
