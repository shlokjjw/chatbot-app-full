import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <p className='text-center m-2 font-medium'>Student Enrollment System</p>
      <div className='w-full bg-slae-400 h-[100vh] flex items-center justify-center ml-16'>
        <div className='flex h-[70%]'>
          <div className='mr-5'>
            <button
              className='border-2 border-sky-500 p-2 rounded-md bg-sky-500 text-white hover:bg-sky-400 hover:border-sky-400'
              onClick={() => navigate('/enroll-bot')}
            >
              Enroll Now!
            </button>
          </div>
          <div
            style={{
              minWidth: '300px',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
