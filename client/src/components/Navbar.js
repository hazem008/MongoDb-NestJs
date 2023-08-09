import React from 'react';
const Navbar = () => {
    return (
        <nav className="navbar">
            <h3 className='logo'>Logo </h3>

            <ul className="nav-links">
                <link to='/'><li>Home</li></link>
                <link to='/about'><li>About</li></link>
                <link to='/contact'><li>Contact</li></link>
                <link to='/dashbord'><li>Dashbord</li></link>

            </ul>
        </nav>
    )
}
export default Navbar;