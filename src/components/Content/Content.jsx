import React from 'react';

import { RoutesList, Workspace } from '..';

function Content() {
  return (
    <div className="content">
      <RoutesList />
      <Workspace />
    </div>
  );
}

export default Content;