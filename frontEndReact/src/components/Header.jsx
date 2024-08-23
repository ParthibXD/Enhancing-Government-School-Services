import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white py-4 px-8 shadow-md">
      <img className="w-24" src="./logo1.png" alt="Government Logo" />
      <div className="text-center">
        <h1 className="text-2xl font-bold">Enhancing Government School Services</h1>
        <nav className="mt-2">
          <a href="#home" className="mx-2 text-black">Home</a>
          <a href="#facilities" className="mx-2 text-black">Facilities</a>
          <a href="#FAQ" className="mx-2 text-black">FAQ</a>
          <a href="#query" className="mx-2 text-black">Query</a>
          <a href="#feedback" className="mx-2 text-black">Feedback</a>
        </nav>
      </div>
      <div className="flex justify-center mt-4">
        <form className="flex items-center w-64 border-2 border-gray-300 rounded-full">
          <input type="text" className="w-full px-4 py-2 outline-none" placeholder="Give Input" required />
          <button type="submit" className="px-4 py-2 bg-gray-700 text-white rounded-r-full">Search</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
