import React from 'react';

const Card = ({ name, image ,exp,companyname}) => {
  return (
    <div className="card">
      <img src={image} alt={`Image ${name}`} />
      <h4>{name}</h4>
      
      <h4>{companyname}</h4>
      <h4>{exp}</h4>
    </div>
  );
};

export default Card;
