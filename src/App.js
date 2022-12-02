import React from 'react';
import { ToastContainer } from 'react-toastify';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <div>
      <Home/>
      <ToastContainer />
    </div>
  );
};

export default App;