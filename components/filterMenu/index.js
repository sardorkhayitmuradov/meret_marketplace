import { useState } from 'react';

const FilterMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
        onClick={toggleMenu}
      >
        Menu
      </button>

      {isOpen && (
        <div className="absolute top-8 right-0 bg-white text-black shadow-md rounded-md">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="#">Home</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="#">About</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="#">Services</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterMenu;