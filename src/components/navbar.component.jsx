import React from 'react';
import './navbar.css';


const Navbar = () => {
    return(
        <div className='nav-bar'>
            <ul className='nav-list'>
                <li><a href="/">Home</a></li>
                <li><a href="/AboutUs">About Us</a></li>
                <li><a href="/Products">Products</a></li>
                <li><a href="/Services">Services</a></li>
                <li><a href="/CareerPage">Careers</a></li>
                <li><a href="/Blog">Blog</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>
        </div>
    )
}


export default Navbar;