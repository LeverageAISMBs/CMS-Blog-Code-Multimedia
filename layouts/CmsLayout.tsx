
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const CmsLayout: React.FC = () => {
  return (
    <>
      <Nav />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </>
  );
};

export default CmsLayout;
