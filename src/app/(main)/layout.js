import React from 'react';
import Sidebar from '../../../components/Sidebar';
const MainLayout = ({ children }) => {
  return (
    <div className="background">
      <Sidebar />
      {children}
    </div>
  );
};

export default MainLayout;
