import React from 'react';
import NavBar from './Navbar';



export const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};


export default Layout;