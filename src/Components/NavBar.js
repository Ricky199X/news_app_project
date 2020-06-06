import React from 'react'

const NavBar = () => {
    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">News App</a>
                <ul class="right" id="nav-options">
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Stories</a></li>
                    <li><a href="#">Favorites</a></li>
                    <li><a href="#">Account</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar