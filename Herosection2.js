import React from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";

export default function Herosection2() {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate('/nonvegetarian');
  }

  return (
    <div className="section hero2">
      <div className="col gallery2">
        <img src="https://as1.ftcdn.net/v2/jpg/03/89/19/60/1000_F_389196042_lU8kLHE46YdZXFhklDuMRDIhGzzH1gOc.jpg" alt=""/>
      </div>
        <div className="col typography">
          <h1 className="title">NON VEG EATERS</h1>
          <p className="info">
            'In the book of culinary delights, non-vegetarian recipes are the
            thrilling chapters that keep you turning pages, eager for the next
            flavorful adventure.'
          </p>
          <button className="btn" onClick={handleclick}>Explore now</button>
        </div>
      </div>
  );
}
