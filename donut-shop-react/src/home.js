import React, { useState, useEffect} from 'react';

import axios from "axios";

import mockdata from "./mockdata.json";

import "./styles/home.css";

function Home() {

    const [ donutItems, setDonutItem ] = useState([])

    const getData = () => {
        axios.get("http://localhost:5000/donuts")
        .then(res => {
            setDonutItem(res.data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const renderDonuts = donutItems.map(item => {
        const {name, 
               description, 
               picture_url, 
               price, 
               quantity, 
               category} = item   
        return (
            <div className="donut-item-wrapper">
                <div className="donut-item">
                   <h2>{name}</h2>
                    <p>{description}</p>
                    <p>{price}</p>
                </div>
                <div className="image-wrapper">
                   <img src={picture_url} alt="Donut" />

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