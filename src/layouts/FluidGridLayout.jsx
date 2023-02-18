import React from 'react';

const FluidGridLayout = ({ children }) => {
  return (
    <div style={{ columnWidth: '300px', columnGap: '20px' }}>{children}</div>
  );
};

export default FluidGridLayout;
