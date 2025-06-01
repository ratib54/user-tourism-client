import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
const MainLay = () => {
 return (
  <div className='bg-[#ffffff] h-screen'>
   <Navbar />
  <div className='pt-20 p-9'>
    <Outlet />
  </div>
  </div>
 );
};

export default MainLay;