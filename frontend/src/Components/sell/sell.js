import React, { useState } from 'react'
import axios from 'axios'
import './sell.css'
// import  {readDatabase , addData} from '../Backend/functions.js'
import ImageUpload from '../ImageUpload'
export default function Sell() {
  let [ProductName , setProductName] = useState()
  let [Price , setPrice] = useState()
  let [Quantity,setQuantity] = useState()
  let [Extra , setExtra] = useState()
  const addProduct = async function (event) {
    event.preventDefault();
    const token = localStorage.getItem('authToken');
    const ImagePath = localStorage.getItem('imagePath')
    try {
        const response = await axios.post('http://localhost:5000/addProduct', {
          Authorization: token,
          ProductName : ProductName,
          Price: Price,
          Quantity: Quantity,
          Extra: Extra,
          Image : ImagePath
        });
  
        alert(response.data.msg);
  
      } catch (err) {
        alert("Error: " + (err.response ? err.response.data.msg : "An unknown error occurred"));
      }
}
  return ( 
    <div>
      <div id="sell-outer">
        <h2 id="sell-heading">POST YOUR PRODUCT</h2>
        <div id="sell-inner">
        
          <form onSubmit={addProduct} className="form-cont">
            
            <div className="sell-input" >
              <label className="sell-label">Product Name</label>
              <input required type='' placeholder='Enter your product name' onChange={(event) => setProductName(event.target.value)}></input>
            </div>
            <div className="sell-input" >
            <label className="sell-label">Quantity</label>
              <input required type='number' placeholder='Enter Your Product Quantity' onChange={(event) => setQuantity(event.target.value)}></input>
            </div>
            <div className="sell-input" >
            <label className="sell-label">Price</label>
              <input required type='number' placeholder='Enter Your Product Price' onChange={(event) => setPrice(event.target.value)}></input>
            </div>
            <div className="sell-input">
            <label className="sell-label">Description</label>
              <input type='' required placeholder='Write pick up details ' onChange={(event) => setExtra(event.target.value)}></input>
            </div>
            <button id="sell-post-button" >POST</button>
          </form>
          <div className="sell-input">
              <ImageUpload/>
            </div>
        </div>
      </div>
    </div>
  )
}
