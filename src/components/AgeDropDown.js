import React, { useState } from 'react';
import Select from 'react-dropdown-select';
import { FadeIn } from 'react-anim-kit';
import { useDispatch } from 'react-redux';
import { setUserAge } from '../redux/reducer';

function AgeDropDown(props) {
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(false);
  const handleHide = () => setHidden(true);
  const onChange = (value) => {
    props.actionProvider.handleUserMessage(value[0].value);
    handleHide();
    setTimeout(() => props.actionProvider.handleUserAge(), 500);
    dispatch(setUserAge(value[0].value));
  };
  const options = Array.from({ length: 23 }, (_, index) => {
    return {
      //array from 18 to 40
      value: 18 + index,
      label: 18 + index,
    };
  });

  return (
    <>
      {hidden ? (
        <></>
      ) : (
        <FadeIn right by={300}>
          <div className='flex items-center justify-center'>
            <Select
              dropdownPosition='auto'
              autoFocus
              dropdownGap={1}
              dropdownHeight={'100px'}
              style={{ width: '120px' }}
              options={options}
              onChange={(values) => onChange(values)}
              searchable={false}
            />
          </div>
        </FadeIn>
      )}
    </>
  );
}

export default AgeDropDown;
