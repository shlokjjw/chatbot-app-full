import React, { useState } from 'react';
import Loader from '../chatbot/Loader';

function InitialChatMessage() {
  const [chatMsg, setChatMsg] = useState('');

  setTimeout(() => {
    setChatMsg('Hello, Welcome to student info system!');
  }, 3030);

  return <>{chatMsg ? <> {chatMsg}</> : <Loader />}</>;
}

export default InitialChatMessage;
