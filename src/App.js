import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Calendar from './components/Calendar/Calendar'

function App() {
  const [year, setYear] = useState(new Date().getFullYear())

  const handleDecYear = () => {
    setYear(year - 1)
  }
  const handleIncYear = () => {
    setYear(year + 1)
  }
  return (
    <div className="App">
      <Navbar year={year} decYear={handleDecYear} incYear={handleIncYear}/>
      <Calendar />
    </div>
  );
}

export default App;
