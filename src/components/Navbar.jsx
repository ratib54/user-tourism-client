import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  
 const [isOpen, setIsOpen] = useState(false);
 const location = useLocation();

 useEffect(() => {
  setIsOpen(false);
 }, [location]);

 const navItems = [
  { name: 'Home', path: '/' },
  { name: 'All Tourist Spots', path: '/alltouristspot' },
  { name: 'My List', path: '/mylist' },
  { name: 'Login', path: '/login' },
  { name: 'Register', path: '/register' },
 ];

 const navLinkStyle = ({ isActive }) =>
  `text-[14px] font-medium block px-4 py-2 rounded-md transition duration-300 ${isActive
   ? 'text-black bg-[#fff] shadow-md'
   : 'text-white hover:bg-green-500/20'
  }`;

 return (
  <nav className="fixed top-2 max-w-[1500px] mx-auto ml-[5%]  rounded-3xl w-full z-50 bg-black shadow-lg">
   <div className="max-w-[1500px] mx-auto px-4 py-1  flex justify-between items-center">
    {/* Logo & Brand */}
    <NavLink to="/" className="flex items-center space-x-2">
         <span className="text-xl font-bold text-white tracking-wide lato-bold ">
           DiscoverThai
     </span>
    </NavLink>

    <div className="md:hidden text-white">
     <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
      {isOpen ? <X size={28} /> : <Menu size={28} />}
     </button>
    </div>

    <div
     className={`md:flex md:space-x-6 absolute md:static top-20 left-4 right-4 md:right-auto bg-white/10 backdrop-blur-lg md:bg-transparent rounded-xl md:rounded-none p-4 md:p-0 transition-all duration-300 ${isOpen ? 'block' : 'hidden md:block'
      }`}
    >
     {navItems.map((item) => (
      <NavLink key={item.path} to={item.path} className={navLinkStyle}>
       {item.name}
      </NavLink>
     ))}
    </div>
   </div>
  </nav>
 );
};

export default Navbar;
