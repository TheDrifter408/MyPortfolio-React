import React, { useMemo } from 'react'
import { useState } from 'react';


const Header = () => {
  const [isDark,setIsDark] = useState(false);
  const [symbol,setSymbol] = useState("☀️");
  {/* A simple dark mode function */}
  function darkMode(){
    if(isDark === false){
      document.body.classList.add("dark");
      setSymbol("🌙");
      setIsDark(!isDark);
    }
    else{
      document.body.classList.remove("dark");
      setSymbol("☀️");
      setIsDark(false);
    }
  }
  return (
    <header>
        <div className="links">
            <a href="">Github</a>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
        </div>
        <div className="btn-container">
            <button onClick={darkMode}>{symbol}</button>
        </div>
    </header>
  )
}

export default Header