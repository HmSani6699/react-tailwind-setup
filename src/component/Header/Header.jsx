import React, { useState } from 'react';
import './Header.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className=' bg-orange-300'>
            <div onClick={() => setOpen(!open)} className='md:hidden py-4 px-4'>
                <span>{open ? <XMarkIcon className="h-6 w-6 text-black-500" />
                    : <Bars3Icon className="h-6 w-6 text-black-500" />}
                </span>
            </div>
            <nav className='relative bg-orange-300'>
                <ul className={`md:flex duration-500 md:static absolute ${open ? "top-0" : "-top-60"} bg-orange-300 px-4 py-2`}>
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