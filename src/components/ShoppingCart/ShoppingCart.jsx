import React from 'react'
import "./ShoppingCart.css";
const ShoppingCart = ({cart,setcart}) => {
  function removePro(id)
  {
     const arr=cart.filter((item)=>{
        return item.id!==id;
        
     })
     setcart(arr);
  }
  return (
    <>
    {cart.map((data)=> {
      return (
        <div className='flex flex-row justify-evenly items-center my-6 mx-10 px-5 py-5 rounded-lg hover:bg-red-200 '>
          <div>
          <img className="w-40 h-40 mr-4" src={data.img}/>
          <h2 className='text-2xl font-semibold txt'>{data.name}</h2>
          </div>
         <div className='text-2xl font-semibold txt'>
         {data.quantity}
         </div>
         <div className='text-2xl font-semibold txt'>
          ${data.quantity * data.price}
         </div>
         <div>
          <button className="btn" onClick={()=>removePro(data.id)}>Remove</button>
         </div>
        </div>
      )
    })}
    </>

  )
  //console.log(cart.length)

}

export default ShoppingCart