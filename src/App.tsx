import React from 'react';
import logo from './sosremont.png';
import './App.css';

function App() {
  return (
    <div className='w-screen animated-background h-screen bg-gradient-to-r from-stone-950 via-stone-900 to-zinc-900'>
      <p className="flex h-screen w-full justify-center items-center">
            <img src={logo} className="w-100" alt="logo" />
      </p>
    </div>

  );
}

export default App;
