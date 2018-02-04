import React from 'react';

export default ({children, extraStyles = ''}) => (
  <p className={`f4 mid-gray sans-serif ${extraStyles}`}>
    {children}
  </p>
);
