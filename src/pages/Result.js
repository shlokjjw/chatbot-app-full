import React from 'react';
import { useSelector } from 'react-redux';

function Result() {
  const { name, age } = useSelector((state) => state.user);
  return (
    <div>
      <p className='text-center m-2 font-medium'>Student Enrollment System</p>

      <div className='w-full h-[70vh] flex items-center justify-center'>
        <div className='border-2 p-10 border-gray-100 text-blue-500'>
          <p>
            Your name <span className='capitalize font-medium'>{name}</span>{' '}
            aged <span className='capitalize font-medium'>{age}</span> has been
            added to student system. You may now exit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Result;
