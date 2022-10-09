import React from 'react'
import './home.css'
import Navbar from '../Navbar/Navbar';
import  { images } from '../constants/index';
import Button from '../Button';

const Home = () => {
  return (<>
  
    <Navbar/>
    <div className='section'>
      <div className='text'>
        <h1>Farm Assist System</h1>
        <p>Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals, and happiness.</p>
        <Button value="About Us" href=""/>
      </div>
      <div className='image'>
        <img src={images.main} alt="" />
      </div>
    </div>
    <div className='footer'>
      <p>All rights. reserved. Farm Assist System &copy;</p>
    </div>
  </>)
}

export default Home