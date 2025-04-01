
import React, { useState } from 'react';
import { EventContext } from '../context/ContextApi';

const AddEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    category: '',
    imageUrl: ''
  });

  const [data, setData] = EventContext()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setData([
      ...data, formData
    ])

    localStorage.setItem("event", JSON.stringify(data))
    
  };
  

  return (
    <>
        <div className='w-full flex min-h-screen items-center justify-center py-5 max-sm:mt-10'>
  <form onSubmit={handleSubmit} className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 bg-zinc-900 rounded-xl p-10 flex flex-col gap-4">
    <h1 className='text-center text-3xl font-semibold mb-5'>Add Event</h1>
    
    <div>
      <label className='text-xl'>Title</label>
      <input
        name='title'
        onChange={handleChange}
        value={formData.title}
        className='w-full rounded-lg bg-zinc-800 outline-none p-3'
        type="text" 
      />
    </div>

    <div>
      <label className='text-xl'>Date</label>
      <input
        name='date'
        onChange={handleChange}
        value={formData.date}
        className='w-full rounded-lg bg-zinc-800 outline-none p-3'
        type="date" 
      />
    </div>

    <div>
      <label className='text-xl'>Description</label>
      <textarea
        name='description'
        onChange={handleChange}
        value={formData.description}
        className='w-full rounded-lg bg-zinc-800 outline-none p-3'
        type="text" 
      />
    </div>

    <div>
      <label className='text-xl'>Category</label>
      <input
        name='category'
        onChange={handleChange}
        value={formData.category}
        className='w-full rounded-lg bg-zinc-800 outline-none p-3'
        type="text" 
      />
    </div>

    <div>
      <label className='text-xl'>Image Url</label>
      <input
        name='imageUrl'
        onChange={handleChange}
        value={formData.imageUrl}
        className='w-full rounded-lg bg-zinc-800 outline-none p-3'
        type="url" 
      />
    </div>

    <button className='w-full rounded-lg bg-blue-700 text-xl p-3 mt-3 hover:bg-blue-600 transition'>
      Add Event
    </button>
  </form>
</div>

    </>
  );
};

export default AddEvent;
