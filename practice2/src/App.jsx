import React from 'react';
import './App.css';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div className="App">
      <h1>Prop Drilling Demo</h1>
      <ParentComponent />
    </div>
  );
}

export default App;


