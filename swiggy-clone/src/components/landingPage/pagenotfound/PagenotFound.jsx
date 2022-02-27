import React from 'react';
import "./pagenotfound.css";

const PagenotFound = () => {
    return (<div className='pageNotFoundContainer'>
        <div id="notFoundDiv">
  <div className="bgImg bgImg1" />
  <div className="notFoundTitle">Page not found</div>
  <div className="notFoundContent">
    Uh-oh! Looks like the page you are trying to access, doesn't exist. Please
    start afresh.
  </div>
  <a href="/location/delhi" className="routeto">
    GO HOME
  </a>
</div>
</div>
    );
};

export default PagenotFound;