import React from 'react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      className={`${
        darkMode ? 'bg-gray-800' : 'bg-blue-500'
      } text-white px-4 py-2 rounded`}
      onClick={toggleDarkMode}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
