import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { FadeIn } from 'react-anim-kit';
import Slide from './Slide';
import TimeSlot from './TimeSlot';
import { getWeekDay } from '../../helpers/helperFunctions';
import { useDispatch } from 'react-redux';
import { setDateTimeSlot } from '../../redux/reducer';

function Slot(props) {
  const dispatch = useDispatch();

  const moring = ['08:00 am', '09:00 am', '10:00 am', '11:00 pm'];
  const afternoon = ['02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm'];
  const evening = ['06:00 pm', '07:00 pm', '08:00 pm', '09:00 pm'];
  const [hidden, setHidden] = useState(false);
  const mDay = moment().format('MMM DD');
  const wDay = getWeekDay(moment().day());
  const [selectedDate, setSelectedDate] = useState(mDay + ', ' + wDay);
  const [selectedTime, setSelectedTime] = useState({
    idx: null,
    timeOfTheDay: null,
  });
  const [dates, setDates] = useState([
    {
      date: moment().subtract(1, 'day'),
      id: Date.now() - 3,
    },
    {
      date: moment(),
      id: Date.now() - 2,
    },
    {
      date: moment().add(1, 'day'),
      id: Date.now() - 1,
    },
  ]);

  const handleHide = () => setHidden(true);
  const handleDateClick = (date) => {
    let monthDay = moment(date).format('MMM DD');
    let weekDay = getWeekDay(moment(date).day());
    setSelectedDate(monthDay + ', ' + weekDay);
  };

  const handleScrollLeft = () => {
    let yesterday = moment().subtract(2, 'day');
    let d = moment(dates[0].date).subtract(1, 'day');
    handleDateClick(d);
    let lastDay = d.isSame(yesterday, 'day');
    if (lastDay) return;
    let obj = {
      date: d,
      id: Date.now(),
    };
    let date = [...dates];
    date.pop();
    setDates([obj, ...date]);
    setSelectedTime({
      idx: null,
      timeOfTheDay: null,
    });
  };

  const handleScrollRight = () => {
    let d = moment(dates[dates.length - 1].date).add(1, 'day');
    handleDateClick(d);
    let obj = {
      date: d,
      id: Date.now(),
    };
    let date = [...dates];
    date.shift();
    setDates([...date, obj]);
    setSelectedTime({
      idx: null,
      timeOfTheDay: null,
    });
  };

  const handleClickOnTime = (date, timeOfTheDay, idx) => {
    let dateTime = selectedDate;
    dateTime += ' ' + date;
    setSelectedTime({
      idx,
      timeOfTheDay,
    });
    dispatch(setDateTimeSlot(dateTime));
    setTimeout(() => {
      props.actionProvider.handleUserMessage(dateTime);
      handleHide();
    }, 400);
    setTimeout(() => props.actionProvider.askUserName(), 900);
  };

  return (
    <>
      {hidden ? (
        <></>
      ) : (
        <FadeIn right by={30}>
          <div className='mb-1'>
            <Slide
              data={dates}
              handleDateClick={handleDateClick}
              handleScrollLeft={handleScrollLeft}
              handleScrollRight={handleScrollRight}
            />
            <div className='text-xs'>
              <TimeSlot
                activeElement={selectedTime}
                handleClickOnTime={handleClickOnTime}
                time={moring}
                timeOfTheDay='morning'
              />
              <TimeSlot
                activeElement={selectedTime}
                handleClickOnTime={handleClickOnTime}
                time={afternoon}
                timeOfTheDay='afternoon'
              />
              <TimeSlot
                activeElement={selectedTime}
                handleClickOnTime={handleClickOnTime}
                time={evening}
                timeOfTheDay='evening'
              />
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
}

export default Slot;
