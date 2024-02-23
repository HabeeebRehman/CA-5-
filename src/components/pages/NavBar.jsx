import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserData } from '../UserData';

const NavBar = () => {
    const [user] = useContext(UserData);

    return (
        <div className='navbar'>
            <nav>
                <div className='logo-container'>
                    <img className='logo' src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="logo" />
                    <h1 className='title'>Kalvium Books</h1>
                </div>
                <div className='register'>
                    {!user && (
                        <Link to='form'>
                            <button className='register-button'>Sign Up</button>
                        </Link>
                    )}
                    {user && (
                        <div className='user-details'>
                            <h1>Welcome</h1>
                            <h2>{user.firstName.toUpperCase()}</h2>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
