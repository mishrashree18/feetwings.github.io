import React from 'react'
import Comingsoon from '../components/comingsoon';
import Navbar from '../components/navbar';
import Subscribe from '../components/Subscribe';
import Footer from "../components/footer";

function TOC() {
  return (
    <div>
    <Navbar/>
    <Comingsoon/>
    <br></br>
    <Subscribe/>
    <Footer/>
    </div>
  )
}

export default TOC