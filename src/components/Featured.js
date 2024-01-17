import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'


const Featured = () => {

 

    return (
        <div className='featured'>
            <div className='container'>
                {/* Left */}
                <div className='left'>
                    <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                    {/* <button className='btn'>See More Coins</button> */}

                </div>
            </div>


        </div>
    )
}

export default Featured
