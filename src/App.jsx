import { useState } from 'react'

import { Element } from 'react-scroll';
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Features from './Components/Features';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
   <div>
    <Header/>
    <Element name="home">
<Home/>
    </Element>

    <Element name="about">
<About/>
    </Element>

    <Element name="feature">
<Features/>
    </Element>

    <Element name="contact">
<Contact/>
    </Element>
    <Footer/>
   </div>
  )
}

export default App;
