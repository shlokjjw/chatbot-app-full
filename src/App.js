import React from 'react';
import 'react-chatbot-kit/build/main.css';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Result from './pages/Result';
import ChatBot from './pages/ChatBot';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/enroll-bot' element={<ChatBot />} />
      <Route path='/enrolled' element={<Result />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
