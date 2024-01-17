import React from 'react'
import Featured from './components/Featured'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Footer from './components/Footer'
import Updates from './components/Updates'
import News from './components/News'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />

      <Updates/>
      <Signup />
      <h1 className=' text-center font-bold text-[40px] p-3'>Bulletin</h1>

      <News/>
      <Footer />
    </>
  );
}

export default App;
