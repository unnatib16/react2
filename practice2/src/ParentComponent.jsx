import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const data = 'Hello from Parent';

  return (
    <div>
      <p>Data from Parent: {data}</p>
      <ChildComponent data={data} />
    </div>
  );
}

export default ParentComponent;