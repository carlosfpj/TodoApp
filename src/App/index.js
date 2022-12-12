import React, { useEffect, useState } from 'react';
import { AppUi } from './AppUi.js';
import { TodoProvider } from '../TodoContext/index.js';
import './App.css';

function App() {

  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
}

export default App;
