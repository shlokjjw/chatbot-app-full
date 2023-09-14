import React, { useState } from 'react';
import { FadeIn } from 'react-anim-kit';

function GotIt(props) {
  const [delay, setDelay] = useState(false);
  const [hidden, setHidden] = useState(false);
  const handleHide = () => setHidden(true);

  setTimeout(() => {
    setDelay(true);
  }, 3500);

  return (
    <>
      {delay && !hidden ? (
        <FadeIn right by={30}>
          <span
            onClick={() => {
              props.actionProvider.handleUserMessage('Got it!');
              handleHide();
              setTimeout(() => props.actionProvider.calenderSlots(), 1000);
            }}
            className='p-2 border-2 rounded-md border-sky-300 cursor-pointer'
          >
            Got it!
          </span>
        </FadeIn>
      ) : (
        <></>
      )}
    </>
  );
}

export default GotIt;
