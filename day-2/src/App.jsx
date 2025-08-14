import React from 'react';
import './App.css';
import UserContext from './UserContext';
import UserDashboard from './UserDashboard';

function App() {
  const user = { name: 'Jane Smith', email: 'jane@example.com' };

  return (
    <div className="App">
      <h1>Context API Demo</h1>
      <UserContext.Provider value={user}>
        <UserDashboard />
      </UserContext.Provider>
    </div>
  );
}
export default App;