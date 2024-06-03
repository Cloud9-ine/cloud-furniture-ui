import React from 'react';

import MainFooter from './MainFooter';

import './External.css';

const External = (props) => {
  return (
    <MainFooter>
      <div>
        <h5>This application is built with MERN (MongoDB, Express, React, NodeJS) stack for self-learning.</h5>
        <h5 className='footer-text'>Learn more about this at GitHub:
          &nbsp;
          <a href="https://github.com/Cloud9-ine/cloud-furniture-ui">
            UI
          </a>
          &nbsp;
          &nbsp;
          <a href="https://github.com/Cloud9-ine/cloud-furniture-api">
            API
          </a>
          &nbsp;
        </h5>
      </div>
      <div>
        <h5>Author: Claude Sun</h5>
      </div>
    </MainFooter>
  );
}

export default External;