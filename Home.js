import React from 'react';
import Herosection from '../components/Herosection';
import Herosection2 from '../components/Herosection2';

export default function Home() {
  return (
    <div className="home-page">
      <Herosection />
      <Herosection2 />
    </div>
  )
}