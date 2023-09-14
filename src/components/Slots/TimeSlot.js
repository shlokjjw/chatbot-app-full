import React from 'react';

function TimeSlot({ time, handleClickOnTime, timeOfTheDay, activeElement }) {
  let classes =
    'border-2 p-1 py-2  rounded-md whitespace-nowrap cursor-pointer ';
  const activeClass = classes + 'bg-sky-500 text-white';
  classes += 'text-gray-500 hover:bg-sky-500 hover:text-white';
  return (
    <>
      <p className='m-1 mt-2 text-slate-600 capitalize'>{timeOfTheDay}</p>
      <div className='flex align-middle flex-nowrap justify-evenly'>
        {time.map((item, idx) => {
          return (
            <span
              key={idx}
              onClick={() => {
                handleClickOnTime(item, timeOfTheDay, idx);
              }}
              className={
                activeElement.timeOfTheDay === timeOfTheDay &&
                activeElement.idx === idx
                  ? activeClass
                  : classes
              }
            >
              {item}
            </span>
          );
        })}
      </div>
    </>
  );
}

export default TimeSlot;
