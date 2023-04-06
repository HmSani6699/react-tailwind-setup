import React from 'react';
import './Header.css';
import { Bars3Icon } from '@heroicons/react/24/solid';
const Header = () => {
    return (
        <div className=' bg-orange-300 py-4 px-4'>
            <div className='md:hidden'>
                <Bars3Icon className="h-6 w-6 text-black-500" />
            </div>
            <nav className=''>
                <ul className=' md:flex'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;