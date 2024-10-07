// DarkModeToggle.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/darkModeSlice';

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div>
      <label htmlFor="dark-mode-toggle">
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </label>
      <input
        id="dark-mode-toggle"
        type="checkbox"
        checked={darkMode}
        onChange={handleToggle}
      />
    </div>
  );
};

export default DarkModeToggle;
