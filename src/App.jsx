import React from 'react'
import { useState } from 'react'

export default function App() {
  const[counter,setCounter]=useState(0);
  const increase=()=>{
    setCounter(counter+1);
  }
const[show,setshow]=useState(false);
  
const ShowMore=()=>{
  setshow(!show);

}
const Product={Name:'iPhone 14',Price:'$1200',Description:'A premium smartphone with advanced featurs'};

  return (
    <>
    <h1>Counter is {counter}</h1>
    <button onClick={increase} className='btn btn-secondary'>Counter</button>
    <button onClick={ShowMore} className="btn btn-success">Show More</button>
   

    {show && (
        <div>
          <h1>Product Details</h1>
          <p><strong>Name:</strong> {Product.Name}</p>
          <p><strong>Price:</strong> {Product.Price}</p>
          <p><strong>Description:</strong> {Product.Description}</p>
        </div>
      )}

  
   
    </>
  )
}

