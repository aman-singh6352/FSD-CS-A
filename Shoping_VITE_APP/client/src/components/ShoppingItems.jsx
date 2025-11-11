import React, { useState ,useEffect} from 'react'
import Cart from './Cart';
const ShoppingItems = () => {
    const [cartItems,setCartItems]=useState([]);
    const [error,setError]=useState(null);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>{
            setCartItems(data);
        })
        .catch(err=>{
           setError(err.message)
        })
    },[])
  return (
    <div>
        {error && <h1> Error: {error}</h1>}
      <h1>Shopping Items</h1>
      {
        cartItems.map((b,i)=>
            (<Cart key={i} item={b}/>))
      }
    </div>
  )
}

export default ShoppingItems