import React from 'react';
import Navbar from '../components/Navbar';
import HackerNewsList from '../components/HackerNewsList';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <HackerNewsList />
    </div>
  );
};

export default Index;