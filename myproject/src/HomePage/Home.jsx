import React from 'react'
import FristNav from "../Navbar/FristNav";
import Catbar from "../Navbar/Catbar";
import Carousels from "../Carousels/Carousels";
import Main from '../LandingPage/Main';
import Footer from '../Footer/Footer';
function Home() {
  return (
    <div>
       <FristNav />
      <Catbar />
      <Carousels/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home