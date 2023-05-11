import React from 'react';
import Scrollbar from './Componant/Molecules/Scrollbar';
import "./App.css"

const App = () => {
  // Example data
  const data = [
    { name: 'Aditya IIT-K', image: './images/download.jpg',exp:"2 yr", companyname :"google"},
    { name: 'Kabir IIT-K', image: './images/download.jpg',exp: "3 yr", companyname :"google"},
    { name: 'Puja IIT-K', image: './images/images.jpg',exp: " 2 yr", companyname :"google"},
    { name: 'Kriti IIT-K', image: './images/images.jpg',exp: "5 yr", companyname :"google"},
    { name: 'Aditya IIT-K', image: './images/download.jpg',exp:"2 yr", companyname :"google"},
    { name: 'Kabir IIT-K', image: './images/download.jpg',exp: "3 yr", companyname :"google"},
    { name: 'Puja IIT-K', image: './images/images.jpg',exp: " 2 yr", companyname :"google"},
    { name: 'Kriti IIT-K', image: './images/images.jpg',exp: "5 yr", companyname :"google"},
    
    // Add more data objects as needed
  ];

  return (
    <div>
      <h1>Know your mentors</h1>
      <p>Wark with a mentor senior data scientists from top companies who closely looks at your progress, gives personalized feedback and help you fill gaps in your knowledge</p>
      <Scrollbar data={data} />
    </div>
  );
};

export default App;
