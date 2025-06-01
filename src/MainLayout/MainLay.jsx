import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
const MainLay = () => {
 return (
  <div className='bg-[#011813] h-screen'>
   <Navbar />
  <div className='pt-20'>
    <Outlet />
  </div>
  </div>
 );
};

export default MainLay;