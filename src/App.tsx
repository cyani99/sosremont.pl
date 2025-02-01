import React from 'react';
import logo from "./img/logo.png";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

function App() {
  return (
    <div className='flex h-screen w-screen justify-center items-center bg-[#1A1A1A] relative'>
      {/* Logo */}
      <img className='absolute w-[80%] md:w-[30%] max-w-sm' alt="logo" src={logo} />
      
      {/* Informacje kontaktowe */}
      <div className='absolute bottom-6 md:right-6 text-white font-teko text-2xl p-4 bg-opacity-50 bg-black rounded-lg shadow-lg'>
        <div className='flex items-center mb-2'>
          <MdEmail className='mr-2 text-custom-gold text-3xl' />
          <div className='text-lg'>kontakt@sosremont.pl</div>
        </div>
        <div className='flex items-center'>
          <FaPhone className='mr-2 text-custom-gold text-3xl' />
          <div className='text-lg'>+48 579 644 075</div>
        </div>
      </div>
    </div>
  );
}

export default App;