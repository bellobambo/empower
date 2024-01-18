import React, { useState, useEffect } from 'react';
import data from './News.json';

const News = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    // No need for fetch here, use the imported JSON data directly
    setCryptoData(data);
  }, []); // The empty dependency array ensures the effect runs only once after the initial render

  const displayCryptoData = cryptoData.slice(0, 20); // Display only the first 20 items

  const getFormattedDate = () => {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <div className='grid m-4 lg:grid-cols-3'>
        {displayCryptoData.map((crypto) => (
          <div className='m-2 border-2 rounded-md border-red-400 p-3' key={crypto.headline}>
            <h2 className='font-bold text-[20px]'>{crypto.headline}</h2>
            <p>{crypto.content}</p>
            <p>Date: {getFormattedDate()}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
