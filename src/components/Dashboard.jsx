import React from 'react'
import backgroundImage from '../assets/bg-1.jpg'

const Dashboard = ({ onAboutClick, onContactClick }) => {

  return (
    <>
      <div
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="absolute z-50 flex flex-col top-8 left-6 text-black text-2xl gap-4">
          <button
            onClick={onAboutClick}
            className="bg-white p-3 rounded-lg hover:bg-black hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={onContactClick}
            className="bg-white p-3 rounded-lg hover:bg-black hover:text-white transition-colors"
          >
            Contact
          </button>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="flex text-white text-4xl font-bold p-4">Your Name</h1>
        </div>

        <div className="absolute z-10 bottom-4 left-6 text-white text-2xl">
          <span className="block">Surat, Gujarat</span>
          <span className="block">India</span>
        </div>
      </div>
    </>
  );
}

export default Dashboard
