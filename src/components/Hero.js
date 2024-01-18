import React from 'react'

import Crypto from '../assets/hero-img.png'

const Hero = () => {
    return (
        <div className='hero my-6 m-4'>
            <div className='container'>

                {/* Left Side */}
                <div className='left text-center flex justify-center flex-col font-medium text-[30px]'>
                    <p>Buy & Sell Crypto 24/7 using your retirement account</p>
                    <h1>Invest in Cryptocurreny with Your IRA</h1>
                    <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                    <img src={Crypto} alt=''/>

                    {/* <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div> */}
                </div>


                {/* Right Side */}
                <div className='right '>
                    <div className='img-container'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
