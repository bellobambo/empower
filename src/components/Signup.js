import React from 'react'


import Crypto from '../assets/trade.png'

const Signup = () => {
    return (
        <div className='signup m-4'>
            <div className='container'>
                {/* left */}
                <div className='text-center flex items-center justify-center'>
                    <div className='right  text-center justify-center flex flex-col'>
                        <h2 className='text-[20px] font-semibold'>Earn passive income with crypto.</h2>
                        <p className='text-[20px] font-semibold'>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically <br></br> earn rewards at the end of each month  with no lockups and no limits.</p>

                    </div>
                    <img className='w-[200px] ' src={Crypto} alt='' />
                </div>





            </div>
        </div>
    )
}

export default Signup
