import React from 'react';

export default function Card({ title, image, description, onClick }) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 sm:m-8 md:m-12 lg:m-16 bg-gray-200'>
      <div className='px-6 py-4 hover:bg-gray-300 transition duration-300 ease-in-out'>
        <img className="w-full object-cover h-36 sm:h-50 md:h-50 lg:h-60" src={image} alt={title} />
        <h2 className='font-bold text-xl sm:text-2xl md:text-3xl mt-4 mb-2'>{title}</h2>
        <p className='text-gray-700 text-sm sm:text-base md:text-lg'>{description}</p>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={onClick}>
          Play now
        </button>
      </div>
    </div>
  );
}
