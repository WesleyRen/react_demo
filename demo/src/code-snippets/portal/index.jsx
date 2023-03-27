import React from 'react';

import NoPortalExample from './NoPortalExample';
import PortalExample from './PortalExample';
import './style.css';

export default function PortalDemo() {
  return (
    <div>
      <h2>Portal Demo</h2>
      <div className="clipping-container">
        <NoPortalExample  />
      </div>
      <div className="clipping-container">
        <PortalExample />
      </div>
    </div>
  );
}
