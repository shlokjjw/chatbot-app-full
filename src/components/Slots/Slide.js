import React, { useEffect, useRef, useState } from 'react';
import rightImg from '../../images/right.png';
import leftImg from '../../images/left.png';
import moment from 'moment';
import { getWeekDay, checkPrevDate } from '../../helpers/helperFunctions';

function Slide({ data, handleDateClick, handleScrollLeft, handleScrollRight }) {
  const ref = useRef();
  const selectedRef = useRef(1);
  const [timeoutId, setTimeoutId] = useState('');
  const [scrollX, setScrollX] = useState({
    side: '',
  });
  const [selectedDate, setSelectedDate] = useState(1);
  const [enablePrev, setEnablePrev] = useState(checkPrevDate(data[1].date));

  const handleScrollList = (side) => {
    if (side === 'left') {
      handleScrollLeft();
    } else {
      if (side === 'right') {
        handleScrollRight();
        setEnablePrev(true);
      }
    }
    setScrollX((prev) => ({ ...prev, side }));
  };

  const handleOnWheel = (e) => {
    clearTimeout(timeoutId);
    let id = setTimeout(() => {
      if (e.deltaX < 0)
        if (!enablePrev) return;
        else handleScrollList('left');
      else if (e.deltaX > 0) handleScrollList('right');
    }, 300);

    setTimeoutId(id);
  };

  useEffect(() => {
    if (scrollX.side === 'right') {
      ref.current.scrollLeft += 65;
    } else if (scrollX.side === 'left') {
      ref.current.scrollLeft -= 65;
    }
    setSelectedDate('');
  }, [scrollX]);

  return (
    <div className='w-full flex items-center'>
      <span
        className={`bg-slate-300 p-2 rounded-full cursor-pointer ${
          enablePrev ? '' : 'opacity-60 cursor-auto'
        }`}
        onClick={() => {
          if (!enablePrev) {
            return;
          }
          handleScrollList('left');
        }}
      >
        <img
          className={`${enablePrev ? '' : 'opacity-60'}`}
          width={20}
          src={leftImg}
        />
      </span>
      <div
        className='m-1 flex overflow-x-scroll w-64 scroll-smooth container-scroll'
        ref={ref}
        onWheel={(e) => {
          handleOnWheel(e);
        }}
      >
        {data.map((d, i) => {
          let classes = {
            container: '',
            date: '',
            week: '',
          };
          if (selectedDate.id === d.id)
            classes = {
              container: 'bg-sky-500',
              date: 'text-white',
              week: 'text-black',
            };
          else if (selectedRef.current === i)
            classes = {
              container: 'bg-sky-500',
              date: 'text-white',
              week: 'text-black',
            };
          let yesterday = moment().subtract(1, 'day');
          let lastDay = d.date.isSame(yesterday, 'day');
          return (
            <div
              className={`text-xs rounded-md p-2 m-1 border-2 cursor-pointer ${
                classes.container
              } ${lastDay ? 'opacity-60 cursor-auto' : ''}`}
              key={d.id}
              onClick={() => {
                if (lastDay) return;
                setSelectedDate(d);
                selectedRef.current = i;
                handleDateClick(d.date);
              }}
            >
              <p className='flex items-center justify-center flex-col'>
                <span
                  className={`whitespace-nowrap uppercase text-sky-500 ${classes.date}`}
                >
                  {moment(d.date).format('MMM DD')}
                </span>
                <span className={`text-slate-500 ${classes.week}`}>
                  {getWeekDay(moment(d.date).day())}
                </span>
              </p>
            </div>
          );
        })}
      </div>
      <span
        className='bg-slate-300 p-2 rounded-full cursor-pointer'
        onClick={() => handleScrollList('right')}
      >
        <img width={20} src={rightImg} />
      </span>
    </div>
  );
}

export default Slide;
