import React from 'react';
import UserProfile from './UserProfile';

function UserDashboard() {
  const user = { name: 'John Doe', email: 'john@example.com' };

  return (
    <div>
      <h1>User Dashboard</h1>
      <UserProfile />
    </div>
  );
}

export default UserDashboard;