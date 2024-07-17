import {React, useState} from 'react'

const App = () => {
  

  let [product,updatedProduct]=useState({
    pname:'Real me 10 pro',
    price:16000
  })

  return (
    <div>
      <h1>Product:{product.pname}</h1>
      <p>Price:{product.price}</p>

      <input id='pname'/>
      <button onClick={()=>{
        let mprice = document.getElementById('pname').value;
        updatedProduct({
          ...product,
          price:mprice,


        })
      }}>Update</button>
    </div>
  )
}

export default App
