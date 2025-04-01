import React from 'react';

const Card = ({ data }) => {
    
    const {title, description, category, date, imageUrl} = data; 

  return (
    <div className="bg-zinc-900 w-full max-w-xs relative min-h-[420px] shadow-lg rounded-lg overflow-hidden">
  <img 
    src={imageUrl} 
    alt="Card Image" 
    className="w-full h-52 object-cover object-center"
  />
  <div className="p-4">
    <h2 className="text-2xl font-semibold mb-2 sm:text-xl md:text-2xl">{title}</h2>

    <p className="text-sm mb-4 sm:text-xs">{description}</p>

    <div className="flex items-center justify-between text-sm mb-4">
      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm">{category}</span>
      <span className="text-xs sm:text-sm">{date}</span>
    </div>

    <button 
      className="bg-blue-500 absolute bottom-5 right-0 text-white py-2 px-4 rounded-lg w-full sm:w-full hover:bg-blue-600 transition"
    >
      Read More
    </button>
  </div>
</div>

  );
};

export default Card;
