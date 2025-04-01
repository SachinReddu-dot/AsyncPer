import React from 'react';

const CreateCommunity = () => {
  return (
    <div className="bg-zinc-900 text-white flex flex-col items-center py-20 px-5">
      <h1 className="text-4xl font-semibold text-center text-white mb-8">
        Why Connect with Our Community
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">

        <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-white mb-4">Collaborative Support</h2>
          <p className="text-gray-300 mb-4">
            Be part of a supportive group where ideas flow freely, and we help each other grow, both personally and professionally.
          </p>
          <div className='btn2'>
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
            <span class="button-text">Learn More</span>
          </button>
          </div>
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-white mb-4">Diverse Network</h2>
          <p className="text-gray-300 mb-4">
            Expand your connections with people from various backgrounds, cultures, and professions, enriching your life and perspective.
          </p>
          <div className='btn2'>
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
            <span class="button-text">Learn More</span>
          </button>
          </div>
        </div>

        <div className="bg-zinc-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-white mb-4">Shared Experiences</h2>
          <p className="text-gray-300 mb-4">
            Connect with individuals who share similar goals, struggles, and passions, creating a sense of belonging and shared purpose.
          </p>
          <div className='btn2'>
          <button class="learn-more">
            <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
            </span>
            <span class="button-text">Learn More</span>
          </button>
          </div>
        </div>
      </div>

      <button class="btn"><span>Join Our Community</span><span>Thanks!</span></button>
    </div>
  );
};

export default CreateCommunity;
