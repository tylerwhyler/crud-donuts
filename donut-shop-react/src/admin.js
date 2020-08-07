import React, { useState } from 'react'
import mockdata from './mockdata.json'
import axios from 'axios'

import './styles/admin.css'

export default function Admin() {
    const [donuts, setDonuts] = useState([])

    const donut = donutInfo.map(donutitem => {
        const { id, donutname, pictureurl, price, quantity } = donutitem;
        
        const donutInfo = () => {
            axios.get("http://localhost:5000/donuts")
                .then(res => setDonuts(res.data))
                .catch(error => console.log(error))
        }
    
        

    return (
        <div key={id} className="donut-wrapper">
                
                <div className="donut-image">
                    <img src={pictureurl} alt="" />
                    
                </div>
                <div className="donut-items">
                <div><h3>{donutname}</h3></div>
                    <div><p>{price}</p></div>
                    <div><p>{quantity}</p></div>
                    <div><input type="number" placeholder="quantity"></input><button>Update</button></div>
                </div>
                
                
            </div>
       )
   })
   return <div>{donut}</div>
}