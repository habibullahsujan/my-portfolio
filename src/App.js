import React from 'react';
import { Toaster } from 'react-hot-toast';

import Home from './Components/Home/Home';

const App = () => {
  return (
    <div>
      <Home/>
      <Toaster />
    </div>
  );
};

export default App;