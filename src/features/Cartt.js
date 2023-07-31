import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { deleteItem} from "./cartSlice";

const Cart = () => {

    const cartData=useSelector((state)=>state.cart.cart)

    console.log("cartData", cartData)
  
    const dispatch = useDispatch()

   
    const handleDelete=(val)=>{
      dispatch(deleteItem(val));      
    };
  
    //totaling amount
    const sum = cartData.reduce(function (result, initialitem) {
     
      return result + initialitem.price;
    }, 0);

  return (
  <>
    
      <div>
    
      <h2>Cart</h2>
      <div>Total Items: {cartData.length}</div>
      <div>Total Amount:{sum} </div>

      <table className="table">
      {/* table with cart items.... */}
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Image</th>
            {/* <th>Add</th> */}
            <th>Remove</th>
            <th scope="col">$Price</th>
          </tr>
        </thead>
        {cartData.length>0?(
           <tbody>
          {cartData.map((item,index)=>(
     
       <tr>
       
          <th>{index+1}</th>
          <th>{item.title}</th>
          <th><img
          src={item.image}
          
          style={{ height: "50px", width: "50px" }}
        /></th>
          <th><button onClick={() =>handleDelete(item)}>delete</button></th>
          <th>{item.price}</th>
            
 
       
        </tr>
        ))}
       </tbody>
   
       ):(<p>No items in the cart.</p>)}
       
      </table>
    </div>
    

  </>
  )
}

export default Cart