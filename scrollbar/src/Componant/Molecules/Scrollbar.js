import React, { useRef } from 'react';
import Card from './Card';

const Scrollbar = ({ data }) => {
  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    containerRef.current.scrollBy({
      left: -200, // Adjust the scroll amount as needed
      behavior: 'smooth',
    });
  };

  const handleScrollRight = () => {
    containerRef.current.scrollBy({
      left: 200, // Adjust the scroll amount as needed
      behavior: 'smooth',
    });
  };

  return (
    <div className="card-container">
      <button className="nav-button" onClick={handleScrollLeft}>
        &lt;
      </button>
      <div className="cards" ref={containerRef}>
        {data.map((item, index) => (
          <Card key={index} name={item.name} image={item.image} exp={item.exp}companyname={item.companyname}/>
        ))}
      </div>
      <button className="nav-button" onClick={handleScrollRight}>
        &gt;
      </button>
    </div>
  );
};

export default Scrollbar;
