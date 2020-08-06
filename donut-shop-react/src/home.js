import React from 'react';

import mockdata from "./mockdata.json"

import "./styles/home.css"

function Home() {

    const renderDonuts = mockdata.map(item => {
        const {donutname, 
               description, 
               pictureurl, 
               price, 
               quantity, 
               category} = item   
        return (
            <div className="donut-item-wrapper">
                <div className="donut-item">
                    <h2>{donutname}</h2>
                    <p>{description}</p>
                    <p>{price}</p>
                </div>
                <div className="image-wrapper">
                    <img src={pictureurl} alt="Donut" />
                </div>    
            </div>
        );
    })
    
  return (
    <div className="home-wrapper">
        {renderDonuts}
        <p>Footer</p>
    </div>
  );
}

export default Home;

