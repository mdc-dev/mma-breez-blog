import React from 'react'
import './nav.scss'

const Nav = () => {
  return (
    <nav className="nav-container">
        <div className="left">
            <div className="logo">LOGO</div>
        </div>
        <div className="right">
            <ul className="nav-items">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/podcast">Podcast</a></li>
                <li className="nav-item">Videos</li>
                <li className="nav-item">News</li>
                <li className="nav-item">Contact</li>
            </ul>
            <ul className="social-icons">
                <li className="social-item"><i class="fa-brands fa-twitter"></i></li>
                <li className="social-item"><i class="fa-brands fa-instagram"></i></li>
                <li className="social-item"><i class="fa-brands fa-youtube"></i></li>
                <li className="social-item"><i class="fa-brands fa-facebook"></i></li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav