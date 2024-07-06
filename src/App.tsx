import React from 'react';
import logo from "./img/logo.png";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

function App() {
  return (
    <div className='flex h-screen w-screen justify-center items-center'>
        <img className='absolute w-[100%] md:w-[30%]' alt="logo" src={logo}></img>
      <div className='absolute bottom-0 md:right-0 md:bottom-0
                      text-white font-teko text-2xl
                      p-6'>
        <div className='flex'>
          <MdEmail className='mr-2 text-custom-gold'/>
          <div>kontakt@kontakt.pl</div>
        </div>
        <div className='flex '>
          <FaPhone className='mr-2 text-custom-gold' />
          <div>+48 000 000 000</div>
        </div>
      </div>

    </div>

  );
}

export default App;
