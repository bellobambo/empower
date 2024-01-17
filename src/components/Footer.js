import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {

    return (
        <footer className="footer m-4 ml-[100px] p-10  text-neutral-content ">
            <aside >
                <img src='/logo.png' className='h-50 w-80 mt-3' alt='Logo' />

                Copyright © 2024 - All right reserved
                {/* <p>Empower Personal Dashboard </p> */}
            </aside>


        </footer>
    )
}

export default Footer
