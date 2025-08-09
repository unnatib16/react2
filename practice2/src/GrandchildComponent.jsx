import React from 'react';

function GrandchildComponent(props) {
  return (
    <div>
      <p>Data from Grandchild: {props.data}</p>
    </div>
  );
}

export default GrandchildComponent;