import React, { useState, useEffect } from 'react';
import data from './response_1705492264439.json';

const CryptoData = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    // No need for fetch here, use the imported JSON data directly
    setCryptoData(data);
  }, []); // The empty dependency array ensures the effect runs only once after the initial render

  const displayCryptoData = cryptoData.slice(0, 20); // Display only the first 20 items

  return (
<div>
<h1 className=' text-center font-bold text-[40px] p-3'>Live Crypto Updates</h1>

    <div className='grid  grid-cols-4'>

      {displayCryptoData.map((crypto) => (
        <div className='m-2 p-2' key={crypto.id}>
          <h2 className='font-bold text-[20px]'>{crypto.name}</h2>
          <img width={40} height={40} src={crypto.image} alt={crypto.name} />
          <p>Market Rank : {crypto.market_cap_rank}</p>
          <p>Market Cap : {crypto.market_cap}</p>

          {/* Add more information as needed */}
        </div>
      ))}
    </div>

</div>
  );
};

export default CryptoData;
