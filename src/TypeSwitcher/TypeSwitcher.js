import React, { useState } from 'react';
import BookSelection from './BookSelection';
import DVDSelection from './DVDSelection';
import FurnitureSelection from './FurnitureSelection';
import "./TypeSwitcher.css"
function TypeSwitcher() {
  const [selectedOption, setSelectedOption] = useState('TypeSwitcher');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div className='type-switcher-container'>
        <div className='type-dropdown'>
        <label id='label1'>Type Switcher</label>
      <select className='type-switcher' value={selectedOption} onChange={handleSelectChange}>
        <option value="DVD" id='DVD'>DVD</option>
        <option value="Furniture" id='Furniture'>Furniture</option>
        <option value="Book" id='Book'>Book</option>
      </select>
      </div>
      <div className='type-holder'>
      {selectedOption === 'DVD' && <DVDSelection />}
      {selectedOption === 'Furniture' && <FurnitureSelection/>}
      {selectedOption === 'Book' && <BookSelection />}
      </div>
    </div>
  );
}

export default TypeSwitcher
