import React, { Fragment } from 'react';

import './Loading.scss';

const Loading = () => {
  return (
    <Fragment>
      <div className="loading-content">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Fragment>
  );
}

export { Loading }