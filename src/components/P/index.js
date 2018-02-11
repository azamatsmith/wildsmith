import React from 'react';

export default ({children, extraStyles = ''}) => (
  <p className={`f5 f4-ns mid-gray sans-serif ${extraStyles}`}>{children}</p>
);
