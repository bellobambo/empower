import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header  py-3 bg-base-200'>
            <div className='container'>
            <img src='/logo.png' className='h-50 w-80 mt-3' alt='Logo' />

                {/* <h1 className='font-bold text-[50px] m-2 mt-3'>Empower<span className='primary'>Cooperation</span></h1> */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  
                    <li>
                    </li>
                </ul>
                        <a className='text-white' href='/'>Contact</a>
                <div className='btn-group'>
                    {/* <button className='btn'>Connect Wallet</button> */}
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
