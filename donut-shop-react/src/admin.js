import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './styles/admin.css'

export default function Admin() {
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
        const {id,
               name, 
               picture_url, 
               price, 
               quantity
               } = item   
        

    return (
        <div key={id} className="donut-wrapper">
                
                <div className="donut-image">
                    <img src={picture_url} alt="" />
                    
                </div>
                <div className="donut-items">
                <div><h3>{name}</h3></div>
                    <div><p>{price}</p></div>
                    <div><p>{quantity}</p></div>
                    <div><input type="number" placeholder="quantity"></input><button>Update</button></div>
                </div>
                
                
            </div>
       )
   })
   return <div>{renderDonuts}</div>
}